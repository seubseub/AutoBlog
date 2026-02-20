export interface Post {
  slug: string;
  title: string;
  date: string; // publishedAt
  description: string;
  content: string;
  category?: string;
  tags?: string[];
  image?: string;
  published: boolean; // 발행 승인 여부
}

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  tags?: string[];
  image?: string;
  published: boolean;
}
