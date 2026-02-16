"use client";
import { useState } from "react";
import { workHistory } from "@/data/work";
import { ExternalLink } from "lucide-react";

export default function Work() {
  const [active, setActive] = useState(workHistory[0]?.id ?? "");

  const selected = workHistory.find((w) => w.id === active) ?? workHistory[0];

  return (
    <section
      id="work"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid #333",
        borderBottom: "1px solid #333",
        background: "#0d0d0d",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", borderLeft: "3px solid #ff3c00", paddingLeft: "1.5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#ff3c00", marginBottom: "0.5rem" }}>
            01 / WORK HISTORY
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1, margin: 0 }}>
            Experience
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "0", border: "1px solid #333" }}>
          {/* Sidebar */}
          <div style={{ borderRight: "1px solid #333" }}>
            {workHistory.map((job) => (
              <button
                key={job.id}
                onClick={() => setActive(job.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1.25rem 1.5rem",
                  background: active === job.id ? "#111" : "transparent",
                  borderBottom: "1px solid #333",
                  borderLeft: active === job.id ? "3px solid #ff3c00" : "3px solid transparent",
                  cursor: "crosshair",
                  transition: "all 0.15s",
                  color: active === job.id ? "#f0ede6" : "#555",
                }}
                onMouseEnter={(e) => {
                  if (active !== job.id)
                    (e.currentTarget as HTMLElement).style.color = "#888";
                }}
                onMouseLeave={(e) => {
                  if (active !== job.id)
                    (e.currentTarget as HTMLElement).style.color = "#555";
                }}
              >
                <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  {job.company}
                </div>
                <div style={{ fontSize: "0.6rem", color: "#444", letterSpacing: "0.05em" }}>
                  {job.period}
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {selected && (
            <div style={{ padding: "2rem 2.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", margin: "0 0 0.25rem" }}>{selected.role}</h3>
                  <p style={{ fontSize: "0.8rem", color: "#ff3c00", margin: 0 }}>
                    {selected.company} {selected.location && `— ${selected.location}`}
                  </p>
                </div>
                <span style={{ fontSize: "0.65rem", color: "#444", letterSpacing: "0.15em", border: "1px solid #333", padding: "4px 10px" }}>
                  {selected.period}
                </span>
              </div>

              <p style={{ fontSize: "0.85rem", color: "#888", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {selected.description}
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                {selected.bullets.map((b, i) => (
                  <li key={i} style={{ fontSize: "0.8rem", color: "#bbb", lineHeight: 1.6, paddingLeft: "1.2rem", position: "relative", marginBottom: "0.5rem" }}>
                    <span style={{ position: "absolute", left: 0, color: "#ff3c00" }}>›</span>
                    {b}
                  </li>
                ))}
              </ul>

              {selected.tags && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {selected.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", border: "1px solid #333", padding: "2px 8px", color: "#555" }}>
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
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#ff3c00" }}
                >
                  <ExternalLink size={11} />
                  {selected.newsHeadline ?? "Press Coverage"}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
