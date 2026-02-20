import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostMeta } from './types';
import markdownToHtml from './markdown';

const postsDirectory = path.join(process.cwd(), 'public/content/posts');

// 포스트 디렉토리가 없으면 생성 (안전장치)
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getSortedPostsData(): PostMeta[] {
  // 디렉토리 내 파일 이름 가져오기
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // .md 확장자 제거하여 id(slug) 생성
    const slug = fileName.replace(/\.md$/, '');

    // 마크다운 파일 읽기
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // gray-matter로 메타데이터 파싱
    const matterResult = matter(fileContents);

    // 날짜를 문자열로 변환 (gray-matter가 Date 객체로 파싱할 수 있음)
    let dateStr = matterResult.data.publishedAt || new Date().toISOString();
    if (dateStr instanceof Date) {
      dateStr = dateStr.toISOString();
    } else if (typeof dateStr !== 'string') {
      dateStr = String(dateStr);
    }

    return {
      slug,
      ...(matterResult.data as Omit<PostMeta, 'slug' | 'date'>),
      date: dateStr,
      published: matterResult.data.published ?? true,
    };
  });

  // 날짜순 정렬
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // 메타데이터 파싱
  const matterResult = matter(fileContents);

  // 마크다운을 HTML로 변환
  const contentHtml = await markdownToHtml(matterResult.content);

  // 날짜를 문자열로 변환
  let dateStr = matterResult.data.publishedAt || new Date().toISOString();
  if (dateStr instanceof Date) {
    dateStr = dateStr.toISOString();
  } else if (typeof dateStr !== 'string') {
    dateStr = String(dateStr);
  }

  return {
    slug,
    content: contentHtml,
    ...(matterResult.data as Omit<Post, 'slug' | 'content' | 'date'>),
    date: dateStr,
    published: matterResult.data.published ?? true,
  };
}

// 특정 카테고리의 포스트 가져오기
export function getPostsByCategory(category: string): PostMeta[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.category === category);
}

// 특정 태그의 포스트 가져오기
export function getPostsByTag(tag: string): PostMeta[] {
  const allPosts = getSortedPostsData();
  return allPosts.filter((post) => post.tags && post.tags.includes(tag));
}
