"use client";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Opens default mail client with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:chandlerhansen321@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "1px solid #333",
    color: "#f0ede6",
    padding: "0.875rem 1rem",
    fontSize: "0.85rem",
    fontFamily: "Courier New, monospace",
    outline: "none",
    transition: "border-color 0.15s",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        borderTop: "1px solid #333",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", borderLeft: "3px solid #ff3c00", paddingLeft: "1.5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#ff3c00", marginBottom: "0.5rem" }}>
            05 / CONTACT
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1, margin: 0 }}>
            Get In Touch
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left — info */}
          <div>
            <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.8, marginBottom: "3rem" }}>
              Have a project in mind, want to collaborate, or just want to say hi?
              Drop me a line — I&apos;m always open to interesting conversations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <a
                href="mailto:chandlerhansen321@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  color: "#f0ede6",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ff3c00")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#f0ede6")}
              >
                <div style={{ border: "1px solid #333", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Mail size={16} />
                </div>
                <div>
                  <p style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#444", margin: "0 0 0.2rem" }}>Email</p>
                  <p style={{ fontSize: "0.85rem", margin: 0 }}>chandlerhansen321@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1px", background: "#333" }}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="NAME"
              required
              style={inputStyle}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#ff3c00")}
              onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#333")}
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="EMAIL"
              required
              style={inputStyle}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#ff3c00")}
              onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#333")}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              required
              rows={6}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#ff3c00")}
              onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "#333")}
            />
            <button
              type="submit"
              style={{
                background: status === "sent" ? "#1a1a1a" : "#ff3c00",
                color: status === "sent" ? "#ff3c00" : "#000",
                border: "none",
                padding: "1rem 2rem",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                cursor: "crosshair",
                fontFamily: "Courier New, monospace",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                transition: "all 0.15s",
              }}
            >
              <Send size={14} />
              {status === "sent" ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
