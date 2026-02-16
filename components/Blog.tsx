"use client";
import { useState } from "react";
import { blogPosts } from "@/data/blog";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
  const [selected, setSelected] = useState<string | null>(null);

  const post = blogPosts.find((p) => p.slug === selected);

  return (
    <section
      id="blog"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid #333",
        background: "#0d0d0d",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", borderLeft: "3px solid #ff3c00", paddingLeft: "1.5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#ff3c00", marginBottom: "0.5rem" }}>
            03 / BLOG
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1, margin: 0 }}>
            Writing
          </h2>
        </div>

        {!selected ? (
          // Post list
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#333", border: "1px solid #333" }}>
            {blogPosts.length === 0 && (
              <div style={{ padding: "3rem", textAlign: "center", background: "#0d0d0d" }}>
                <p style={{ fontSize: "0.7rem", color: "#333", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                  No posts yet — add them in data/blog.ts
                </p>
              </div>
            )}
            {blogPosts.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelected(p.slug)}
                style={{
                  background: "#0d0d0d",
                  border: "none",
                  padding: "1.75rem 2rem",
                  textAlign: "left",
                  cursor: "crosshair",
                  display: "grid",
                  gridTemplateColumns: "60px 1fr auto",
                  alignItems: "center",
                  gap: "1.5rem",
                  transition: "background 0.15s",
                  color: "inherit",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#111")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d0d0d")}
              >
                <span style={{ fontSize: "0.6rem", color: "#333", letterSpacing: "0.1em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 style={{ fontSize: "0.95rem", margin: "0 0 0.4rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "0.75rem", color: "#666", margin: 0, lineHeight: 1.5 }}>
                    {p.excerpt}
                  </p>
                </div>
                <span style={{ fontSize: "0.6rem", color: "#444", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                  {new Date(p.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </button>
            ))}
          </div>
        ) : post ? (
          // Post detail
          <div>
            <button
              onClick={() => setSelected(null)}
              style={{
                background: "none",
                border: "1px solid #333",
                color: "#888",
                padding: "6px 14px",
                cursor: "crosshair",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "3rem",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#f0ede6";
                (e.currentTarget as HTMLElement).style.color = "#f0ede6";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#333";
                (e.currentTarget as HTMLElement).style.color = "#888";
              }}
            >
              <ArrowLeft size={12} /> Back
            </button>

            <div style={{ maxWidth: "720px" }}>
              <p style={{ fontSize: "0.6rem", color: "#444", letterSpacing: "0.2em", marginBottom: "0.75rem" }}>
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </p>
              <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", marginBottom: "2rem", textTransform: "uppercase" }}>
                {post.title}
              </h2>
              {post.tags && (
                <div style={{ display: "flex", gap: "0.4rem", marginBottom: "2rem", flexWrap: "wrap" }}>
                  {post.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid #333", padding: "2px 8px", color: "#555" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div style={{ fontSize: "0.9rem", color: "#bbb", lineHeight: 1.9, whiteSpace: "pre-wrap" }}>
                {post.content}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
