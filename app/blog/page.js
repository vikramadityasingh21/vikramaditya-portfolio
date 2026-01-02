import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogPageClient from './BlogPageClient';

export default async function BlogPage() {
  const articlesDirectory = path.join(process.cwd(), 'content', 'articles');
  let articles = [];
  
  try {
    const filenames = fs.readdirSync(articlesDirectory);
    articles = filenames
      .filter(filename => filename.endsWith('.md'))
      .map((filename, index) => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          id: index + 1,
          slug: filename.replace('.md', ''),
          title: data.title || filename.replace('.md', ''),
          excerpt: data.excerpt || data.description || content.substring(0, 200) + '...',
          content: content,
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || '5 min read',
          tags: Array.isArray(data.tags) ? data.tags : [],
          featured: data.featured || false,
          image: data.image || null
        };
      });
  } catch (error) {
    console.error('Error loading articles:', error);
  }

  return <BlogPageClient initialArticles={articles} />;
}