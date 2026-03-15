"use client";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:chandlerhansen321@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.02)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
    padding: "1rem 1.25rem",
    fontSize: "0.85rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "all 0.3s ease",
    borderRadius: "2px",
  };

  return (
    <section
      id="contact"
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
            05 / Contact
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Get In Touch
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Left — info */}
          <div>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.9,
                marginBottom: "3.5rem",
              }}
            >
              Have a project in mind, want to collaborate, or just want to say
              hi? Drop me a line — I&apos;m always open to interesting
              conversations.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <a
                href="mailto:chandlerhansen321@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  color: "var(--fg)",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--fg)")
                }
              >
                <div
                  style={{
                    border: "1px solid var(--border)",
                    padding: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                  }}
                >
                  <Mail size={16} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.25)",
                      margin: "0 0 0.3rem",
                    }}
                  >
                    Email
                  </p>
                  <p style={{ fontSize: "0.9rem", margin: 0 }}>
                    chandlerhansen321@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              style={inputStyle}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)")
              }
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              style={inputStyle}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)")
              }
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={6}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) =>
                ((e.target as HTMLElement).style.borderColor = "var(--accent)")
              }
              onBlur={(e) =>
                ((e.target as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)")
              }
            />
            <button
              type="submit"
              style={{
                background:
                  status === "sent"
                    ? "rgba(201, 185, 154, 0.1)"
                    : "var(--accent)",
                color: status === "sent" ? "var(--accent)" : "var(--bg)",
                border: "none",
                padding: "1rem 2rem",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                transition: "all 0.3s ease",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                if (status !== "sent")
                  (e.currentTarget as HTMLElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = "1";
              }}
            >
              <Send size={14} />
              {status === "sent" ? "Message Sent" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
