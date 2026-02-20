import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import * as path from "path";
import * as dotenv from "dotenv";

// 환경 변수 로드 (.env 파일이 있는 경우)
dotenv.config();

/**
 * 인터페이스 정의
 */
interface KeywordData {
  keywords: string[];
  categories?: Record<string, string[]>;
}

interface PostFrontMatter {
  title: string;
  date: string;
  slug: string;
  category: string;
  tags: string[];
  description: string;
}

/**
 * 설정 값
 */
const API_KEY = process.env.GOOGLE_GENERATIVE_AI_KEY;
const KEYWORDS_PATH = path.join(process.cwd(), "scripts", "keywords.json");
const POSTS_DIR = path.join(process.cwd(), "public", "content", "posts");
const MODEL_NAME = "gemini-1.5-flash";

if (!API_KEY) {
  console.error("오류: GOOGLE_GENERATIVE_AI_KEY 환경 변수가 설정되지 않았습니다.");
  process.exit(1);
}

/**
 * 유틸리티: 문자열을 kebab-case 슬러그로 변환
 */
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, "") // 특수문자 제거 (한글 포함)
    .replace(/\s+/g, "-")           // 공백을 -로 변경
    .replace(/-+/g, "-")            // 중복 - 제거
    .trim();
}

/**
 * 메인 실행 함수
 */
async function generateBlogPost() {
  try {
    // 1. 키워드 읽기
    if (!fs.existsSync(KEYWORDS_PATH)) {
      throw new Error(`keywords.json 파일을 찾을 수 없습니다: ${KEYWORDS_PATH}`);
    }
    const keywordsData: KeywordData = JSON.parse(fs.readFileSync(KEYWORDS_PATH, "utf-8"));
    const selectedKeyword = keywordsData.keywords[Math.floor(Math.random() * keywordsData.keywords.length)];

    console.log(`선택된 키워드: ${selectedKeyword}`);

    // 2. Gemini API 설정
    const genAI = new GoogleGenerativeAI(API_KEY!);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    // 3. 프롬프트 작성
    const prompt = `
      당신은 전문 블로그 에디터입니다. 키워드 "${selectedKeyword}"를 바탕으로 독자들에게 유익하고 흥미로운 블로그 포스트를 작성해주세요.

      [요구사항]
      - 언어: 한국어
      - 길이: 공백 포함 800~1200자 내외
      - 구조: 매력적인 서론, 3~4개의 소주제(섹션), 명확한 결론
      - 형식: 마크다운(Markdown)
      - 추가 정보: 포스트에 어울리는 제목, 카테고리, 태그(3~5개), 요약 설명(150자 내외)을 생성하세요.

      [출력 형식 가이드]
      반드시 아래 JSON 형식을 포함하여 답변을 시작하고, 그 뒤에 마크다운 본문을 작성하세요.
      {
        "title": "생성된 제목",
        "category": "적절한 카테고리",
        "tags": ["태그1", "태그2", "태그3"],
        "description": "요약 설명"
      }
      ---
      (여기에 마크다운 본문 작성)
    `;

    // 4. 콘텐츠 생성
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const fullText = response.text();

    // 5. JSON 데이터와 마크다운 분리
    const [jsonPart, ...contentParts] = fullText.split("---");
    const metaData = JSON.parse(jsonPart.trim());
    const markdownContent = contentParts.join("---").trim();

    // 6. Front Matter 구성
    const today = new Date().toISOString().split("T")[0];
    const slug = generateSlug(metaData.title);

    const frontMatter = [
      "---",
      `title: "${metaData.title}"`,
      `date: ${today}`,
      `slug: ${slug}`,
      `category: ${metaData.category}`,
      `tags: [${metaData.tags.map((t: string) => `"${t}"`).join(", ")}]`,
      `description: "${metaData.description.replace(/"/g, '\\"')}"`,
      "---",
      "",
      markdownContent
    ].join("\n");

    // 7. 파일 저장
    if (!fs.existsSync(POSTS_DIR)) {
      fs.mkdirSync(POSTS_DIR, { recursive: true });
    }

    const fileName = `${slug}.md`;
    const filePath = path.join(POSTS_DIR, fileName);

    fs.writeFileSync(filePath, frontMatter, "utf-8");

    console.log(`성공: 블로그 포스트가 생성되었습니다.`);
    console.log(`경로: ${filePath}`);

  } catch (error) {
    console.error("포스트 생성 중 오류 발생:");
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
}

generateBlogPost();
