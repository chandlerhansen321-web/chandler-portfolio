export type WorkItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string;
  bullets: string[];
  tags?: string[];
  newsUrl?: string;  // Link to press/news coverage from this employer
  newsHeadline?: string;
};

// Fill in your real work history here
export const workHistory: WorkItem[] = [
  {
    id: "job-1",
    company: "Company Name",
    role: "Your Role",
    period: "Jan 2022 – Present",
    location: "Remote",
    description: "One sentence summary of what you did here.",
    bullets: [
      "Key achievement or responsibility",
      "Another accomplishment",
      "Another highlight",
    ],
    tags: ["React", "TypeScript", "AWS"],
    newsUrl: "https://example.com/news-article",
    newsHeadline: "Company Announces Major Product Launch",
  },
  {
    id: "job-2",
    company: "Previous Company",
    role: "Previous Role",
    period: "Jun 2019 – Dec 2021",
    location: "Seattle, WA",
    description: "What you built or accomplished here.",
    bullets: [
      "Led development of...",
      "Reduced X by Y%",
    ],
    tags: ["Vue", "Python", "Docker"],
  },
  // Add more jobs by copying the object above
];
