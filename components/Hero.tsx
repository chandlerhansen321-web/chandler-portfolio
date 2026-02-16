"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 20);
    const drops: number[] = Array(cols).fill(1);
    const chars = "01CHANDLER//{}[]<>";

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(10,10,10,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,60,0,0.15)";
      ctx.font = "14px Courier New";
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, drops[i] * 20);
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", onResize);
    };
  }, []);

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
        borderBottom: "1px solid #333",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, opacity: 0.4 }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            color: "#ff3c00",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          [ Portfolio — 2025 ]
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 10vw, 9rem)",
            lineHeight: 0.9,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Chandler
          <br />
          <span style={{ color: "#ff3c00", WebkitTextStroke: "2px #ff3c00", WebkitTextFillColor: "transparent" }}>
            Hansen
          </span>
        </h1>

        <p
          style={{
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            color: "#888",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          Developer &nbsp;/&nbsp; Builder &nbsp;/&nbsp; Creator
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#work"
            style={{
              border: "1px solid #ff3c00",
              color: "#ff3c00",
              padding: "0.75rem 2rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "all 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#ff3c00";
              (e.currentTarget as HTMLElement).style.color = "#000";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#ff3c00";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              border: "1px solid #333",
              color: "#f0ede6",
              padding: "0.75rem 2rem",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              transition: "all 0.15s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#f0ede6";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#333";
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          color: "#444",
          textTransform: "uppercase",
          animation: "pulse 2s ease-in-out infinite",
        }}
      >
        Scroll ↓
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
