"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated gradient mesh background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-50%",
            animation: "meshMove 20s ease-in-out infinite",
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(201, 185, 154, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(201, 185, 154, 0.05) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(160, 140, 110, 0.06) 0%, transparent 50%)
            `,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "-50%",
            animation: "meshMove2 25s ease-in-out infinite",
            background: `
              radial-gradient(ellipse at 70% 60%, rgba(201, 185, 154, 0.06) 0%, transparent 40%),
              radial-gradient(ellipse at 30% 30%, rgba(180, 160, 130, 0.04) 0%, transparent 45%)
            `,
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.35em",
            color: "var(--accent)",
            marginBottom: "2rem",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          Portfolio — 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(3rem, 10vw, 9rem)",
            lineHeight: 0.9,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: "2rem",
          }}
        >
          Chandler
          <br />
          <span
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--accent)",
            }}
          >
            Hansen
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontSize: "0.9rem",
            letterSpacing: "0.15em",
            color: "var(--text-secondary)",
            textTransform: "uppercase",
            marginBottom: "3.5rem",
            fontWeight: 300,
          }}
        >
          Developer &nbsp;/&nbsp; Builder &nbsp;/&nbsp; Creator
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#work"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "0.875rem 2.5rem",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              display: "inline-block",
              borderRadius: "2px",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--bg)";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              border: "1px solid var(--border)",
              color: "var(--fg)",
              padding: "0.875rem 2.5rem",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
              display: "inline-block",
              borderRadius: "2px",
              fontWeight: 500,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg)";
            }}
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: "rgba(201, 185, 154, 0.4)",
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, rgba(201, 185, 154, 0.4), transparent)",
            animation: "scrollLine 2s ease-in-out infinite",
          }}
        />
      </motion.div>

      <style>{`
        @keyframes meshMove {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(5%, -3%) rotate(1deg); }
          66% { transform: translate(-3%, 5%) rotate(-1deg); }
        }
        @keyframes meshMove2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-5%, 3%) rotate(-0.5deg); }
        }
        @keyframes scrollLine {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}
