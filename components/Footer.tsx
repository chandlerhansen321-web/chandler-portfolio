export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #333",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <p style={{ fontSize: "0.6rem", color: "#333", letterSpacing: "0.2em", margin: 0, textTransform: "uppercase" }}>
        © {new Date().getFullYear()} Chandler Hansen
      </p>
      <p style={{ fontSize: "0.6rem", color: "#222", letterSpacing: "0.15em", margin: 0, textTransform: "uppercase" }}>
        chandlerhansen.com
      </p>
    </footer>
  );
}
