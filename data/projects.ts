export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  featured?: boolean;
};

// Add your projects here — just fill in the url with your Vercel deployment link
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Project One",
    description: "Short description of what this project does and why it's interesting.",
    tags: ["React", "Next.js", "Tailwind"],
    url: "https://your-project.vercel.app",
    featured: true,
  },
  {
    id: "project-2",
    title: "Project Two",
    description: "Another project description. What problem does it solve?",
    tags: ["TypeScript", "Node.js"],
    url: "https://your-other-project.vercel.app",
    featured: true,
  },
  // Add more projects by copying the object above
];
