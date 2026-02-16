export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown or plain text
  tags?: string[];
};

// Add blog posts here — content supports basic markdown-like formatting
export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "first-post",
    title: "First Post",
    date: "2025-02-01",
    excerpt: "A short preview of what this post is about.",
    content: `Write your full post content here. You can use line breaks and paragraphs freely.

This is a second paragraph. Add as much as you want.`,
    tags: ["thoughts", "tech"],
  },
  // Add more posts by copying the object above
];
