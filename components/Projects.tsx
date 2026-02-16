"use client";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "4rem", borderLeft: "3px solid #ff3c00", paddingLeft: "1.5rem" }}>
        <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#ff3c00", marginBottom: "0.5rem" }}>
          02 / PROJECTS
        </p>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1, margin: 0 }}>
          Things I&apos;ve Built
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1px",
          background: "#333",
          border: "1px solid #333",
        }}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            style={{
              background: "#0a0a0a",
              padding: "2rem",
              position: "relative",
              transition: "background 0.15s",
              cursor: "crosshair",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#111";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#0a0a0a";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                fontSize: "0.6rem",
                color: "#444",
                letterSpacing: "0.2em",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>

            <h3
              style={{
                fontSize: "1.1rem",
                marginBottom: "0.75rem",
                marginTop: 0,
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#888",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "1.5rem",
              }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    border: "1px solid #333",
                    padding: "2px 8px",
                    color: "#666",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ff3c00",
                    transition: "opacity 0.15s",
                  }}
                >
                  <ExternalLink size={12} /> Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#666",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#f0ede6")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#666")}
                >
                  <Github size={12} /> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
