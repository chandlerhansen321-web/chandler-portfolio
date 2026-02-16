import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandler Hansen",
  description: "Developer, builder, creator.",
  openGraph: {
    title: "Chandler Hansen",
    description: "Developer, builder, creator.",
    url: "https://chandlerhansen.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
