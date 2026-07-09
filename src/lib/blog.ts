import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  featured: boolean;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

type BlogFrontMatter = {
  title?: string;
  description?: string;
  date?: string;
  readingTime?: string;
  category?: string;
  tags?: string[];
  featured?: boolean;
};

function getMarkdownFiles() {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith('.md'));
}

function normalizeFrontMatter(
  slug: string,
  data: BlogFrontMatter,
): BlogPostMeta {
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? new Date().toISOString(),
    readingTime: data.readingTime ?? '3 min read',
    category: data.category ?? 'Notes',
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: Boolean(data.featured),
  };
}

export function getAllBlogPosts(): BlogPostMeta[] {
  return getMarkdownFiles()
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return normalizeFrontMatter(slug, data);
    })
    .sort(
      (firstPost, secondPost) =>
        new Date(secondPost.date).getTime() -
        new Date(firstPost.date).getTime(),
    );
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const fullPath = path.join(blogDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);

  return {
    ...normalizeFrontMatter(slug, data),
    contentHtml: processedContent.toString(),
  };
}
