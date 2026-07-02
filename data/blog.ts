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
  // Template — copy, fill in, and uncomment:
  // {
  //   id: "post-1",
  //   slug: "first-post",
  //   title: "First Post",
  //   date: "2025-02-01",
  //   excerpt: "A short preview of what this post is about.",
  //   content: `Write your full post content here.`,
  //   tags: ["thoughts", "tech"],
  // },
];
