"use client";
import { useState } from "react";
import { workHistory } from "@/data/work";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Work() {
  const [active, setActive] = useState(workHistory[0]?.id ?? "");

  const selected = workHistory.find((w) => w.id === active) ?? workHistory[0];

  return (
    <section
      id="work"
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
            01 / Experience
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Work History
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="work-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "0",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {/* Sidebar */}
          <div style={{ borderRight: "1px solid var(--border)" }}>
            {workHistory.map((job) => (
              <button
                key={job.id}
                onClick={() => setActive(job.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1.5rem 1.75rem",
                  background: active === job.id ? "rgba(201, 185, 154, 0.04)" : "transparent",
                  borderBottom: "1px solid var(--border)",
                  borderLeft: active === job.id ? "2px solid var(--accent)" : "2px solid transparent",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  color: active === job.id ? "var(--fg)" : "var(--text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  if (active !== job.id)
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                }}
                onMouseLeave={(e) => {
                  if (active !== job.id)
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    letterSpacing: "0.05em",
                    marginBottom: "0.3rem",
                    fontWeight: active === job.id ? 500 : 400,
                  }}
                >
                  {job.company}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: active === job.id ? "var(--text-secondary)" : "rgba(255,255,255,0.25)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {job.period}
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {selected && (
            <div style={{ padding: "2.5rem" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    {selected.role}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--accent)",
                      margin: 0,
                      fontWeight: 400,
                    }}
                  >
                    {selected.company}
                    {selected.location && ` — ${selected.location}`}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "var(--text-secondary)",
                    letterSpacing: "0.1em",
                    background: "rgba(255,255,255,0.03)",
                    padding: "6px 14px",
                    borderRadius: "2px",
                  }}
                >
                  {selected.period}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                {selected.description}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                {selected.bullets.map((b, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(240, 237, 230, 0.7)",
                      lineHeight: 1.7,
                      paddingLeft: "1.5rem",
                      position: "relative",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                        fontSize: "0.75rem",
                      }}
                    >
                      —
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              {selected.tags && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  {selected.tags.map((tag) => (
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

              {selected.newsUrl && (
                <a
                  href={selected.newsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    transition: "opacity 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <ExternalLink size={12} />
                  {selected.newsHeadline ?? "Press Coverage"}
                </a>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
