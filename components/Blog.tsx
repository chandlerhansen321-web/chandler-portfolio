"use client";
import { useState } from "react";
import { blogPosts } from "@/data/blog";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  const [selected, setSelected] = useState<string | null>(null);

  const post = blogPosts.find((p) => p.slug === selected);

  return (
    <section
      id="blog"
      style={{
        padding: "8rem 2rem",
        background: "#0c0c0c",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginBottom: "4rem",
            borderLeft: "2px solid var(--accent)",
            paddingLeft: "1.5rem",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "var(--accent)",
              marginBottom: "0.75rem",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            03 / Blog
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Writing
          </h2>
        </motion.div>

        {!selected ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            {blogPosts.length === 0 && (
              <div
                style={{
                  padding: "4rem",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.01)",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  No posts yet — add them in data/blog.ts
                </p>
              </div>
            )}
            {blogPosts.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setSelected(p.slug)}
                style={{
                  background: "rgba(255,255,255,0.01)",
                  border: "none",
                  borderBottom: i < blogPosts.length - 1 ? "1px solid var(--border)" : "none",
                  padding: "2rem 2.5rem",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "grid",
                  gridTemplateColumns: "50px 1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  transition: "background 0.3s ease",
                  color: "inherit",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "rgba(201, 185, 154, 0.03)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)")
                }
              >
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.15)",
                    letterSpacing: "0.1em",
                    fontWeight: 300,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      margin: "0 0 0.5rem",
                      letterSpacing: "0.02em",
                      fontWeight: 700,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-secondary)",
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {p.excerpt}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.25)",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {new Date(p.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </button>
            ))}
          </motion.div>
        ) : post ? (
          <div>
            <button
              onClick={() => setSelected(null)}
              style={{
                background: "none",
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
                padding: "8px 18px",
                cursor: "pointer",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "3rem",
                transition: "all 0.3s ease",
                borderRadius: "2px",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--fg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
              }}
            >
              <ArrowLeft size={12} /> Back
            </button>

            <div style={{ maxWidth: "720px" }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.15em",
                  marginBottom: "1rem",
                }}
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  marginBottom: "2rem",
                }}
              >
                {post.title}
              </h2>
              {post.tags && (
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    marginBottom: "2.5rem",
                    flexWrap: "wrap",
                  }}
                >
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: "rgba(201, 185, 154, 0.08)",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <div
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(240, 237, 230, 0.75)",
                  lineHeight: 1.9,
                  whiteSpace: "pre-wrap",
                }}
              >
                {post.content}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
