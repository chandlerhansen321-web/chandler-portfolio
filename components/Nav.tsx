"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Photos", href: "#photos" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        background: scrolled ? "rgba(9,9,9,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.4s ease",
        padding: "0 2.5rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="#top"
        style={{
          fontSize: "0.85rem",
          fontWeight: 600,
          letterSpacing: "0.2em",
          color: "var(--accent)",
          textTransform: "uppercase",
          fontFamily: "var(--font-body)",
        }}
      >
        Chandler Hansen
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: "2.5rem" }} className="hidden-mobile">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              transition: "color 0.3s ease",
              fontWeight: 400,
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--fg)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-secondary)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "1px solid var(--border)",
          color: "var(--fg)",
          padding: "8px 14px",
          cursor: "pointer",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          fontFamily: "var(--font-body)",
          fontWeight: 400,
          display: "none",
          borderRadius: "2px",
        }}
        className="show-mobile"
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(9,9,9,0.98)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid var(--border)",
            padding: "2rem 2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.75rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.9rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                fontWeight: 400,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
