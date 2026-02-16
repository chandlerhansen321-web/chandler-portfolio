"use client";
import { useState, useRef } from "react";
import { X, ZoomIn } from "lucide-react";

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
      style={{ padding: "6rem 2rem", borderTop: "1px solid #333" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem", borderLeft: "3px solid #ff3c00", paddingLeft: "1.5rem" }}>
          <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", color: "#ff3c00", marginBottom: "0.5rem" }}>
            04 / PHOTOS
          </p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1, margin: 0 }}>
            Gallery
          </h2>
        </div>

        {/* Upload zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => inputRef.current?.click()}
          style={{
            border: "1px dashed #333",
            padding: "3rem",
            textAlign: "center",
            marginBottom: "2rem",
            cursor: "crosshair",
            transition: "border-color 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#ff3c00")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#333")}
        >
          <p style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", margin: 0 }}>
            Drop photos here or click to upload
          </p>
          <p style={{ fontSize: "0.6rem", color: "#333", marginTop: "0.5rem", letterSpacing: "0.1em" }}>
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
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1px",
              background: "#333",
              border: "1px solid #333",
            }}
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                style={{ position: "relative", aspectRatio: "1", overflow: "hidden", background: "#0a0a0a", cursor: "crosshair" }}
                onMouseEnter={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
                  if (overlay) overlay.style.opacity = "0";
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.caption ?? `Photo ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div
                  className="overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.7)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    opacity: 0,
                    transition: "opacity 0.15s",
                  }}
                >
                  <button
                    onClick={() => setLightbox(photo)}
                    style={{ background: "none", border: "1px solid #f0ede6", color: "#f0ede6", padding: "8px", cursor: "crosshair" }}
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    onClick={() => removePhoto(i)}
                    style={{ background: "none", border: "1px solid #ff3c00", color: "#ff3c00", padding: "8px", cursor: "crosshair" }}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {photos.length === 0 && (
          <p style={{ fontSize: "0.7rem", color: "#333", letterSpacing: "0.15em", textTransform: "uppercase", textAlign: "center" }}>
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
            cursor: "crosshair",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox.src}
            alt={lightbox.caption ?? "Photo"}
            style={{ maxWidth: "90vw", maxHeight: "90vh", objectFit: "contain", border: "1px solid #333" }}
          />
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "1px solid #333",
              color: "#f0ede6",
              padding: "8px 12px",
              cursor: "crosshair",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
            }}
          >
            CLOSE
          </button>
        </div>
      )}
    </section>
  );
}
