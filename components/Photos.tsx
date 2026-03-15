"use client";
import { useState, useRef } from "react";
import { X, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";

type Photo = {
  src: string;
  caption?: string;
};

export default function Photos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [lightbox, setLightbox] = useState<Photo | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFiles(files: FileList | null) {
    if (!files) return;
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotos((prev) => [...prev, { src: e.target?.result as string }]);
      };
      reader.readAsDataURL(file);
    });
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  }

  function removePhoto(index: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <section
      id="photos"
      style={{ padding: "8rem 2rem" }}
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
            04 / Photos
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Gallery
          </h2>
        </motion.div>

        {/* Upload zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          style={{
            border: "1px dashed rgba(201, 185, 154, 0.2)",
            padding: "3.5rem",
            textAlign: "center",
            marginBottom: "2.5rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            borderRadius: "4px",
            background: "rgba(255,255,255,0.01)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
            (e.currentTarget as HTMLElement).style.background = "rgba(201, 185, 154, 0.03)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "rgba(201, 185, 154, 0.2)";
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.01)";
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Drop photos here or click to upload
          </p>
          <p
            style={{
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.2)",
              marginTop: "0.75rem",
              letterSpacing: "0.1em",
            }}
          >
            JPG, PNG, WEBP, GIF
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>

        {/* Grid */}
        {photos.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  aspectRatio: "1",
                  overflow: "hidden",
                  background: "var(--bg)",
                  cursor: "pointer",
                  borderRadius: "4px",
                  border: "1px solid var(--border)",
                }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(
                    ".overlay"
                  ) as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(
                    ".overlay"
                  ) as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption ?? `Photo ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(9,9,9,0.8)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <button
                    onClick={() => setLightbox(photo)}
                    style={{
                      background: "none",
                      border: "1px solid var(--fg)",
                      color: "var(--fg)",
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    onClick={() => removePhoto(i)}
                    style={{
                      background: "none",
                      border: "1px solid rgba(255,100,100,0.5)",
                      color: "rgba(255,100,100,0.8)",
                      padding: "10px",
                      cursor: "pointer",
                      borderRadius: "2px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {photos.length === 0 && (
          <p
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.15)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            No photos yet
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.95)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            cursor: "pointer",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.caption ?? "Photo"}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "2rem",
              right: "2rem",
              background: "none",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "var(--fg)",
              padding: "10px 16px",
              cursor: "pointer",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              borderRadius: "2px",
              fontFamily: "var(--font-body)",
              transition: "border-color 0.3s ease",
            }}
          >
            Close
          </button>
        </div>
      )}
    </section>
  );
}
