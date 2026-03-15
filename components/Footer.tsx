export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <p
        style={{
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.15em",
          margin: 0,
          textTransform: "uppercase",
          fontWeight: 300,
        }}
      >
        &copy; {new Date().getFullYear()} Chandler Hansen
      </p>
      <p
        style={{
          fontSize: "0.65rem",
          color: "rgba(255,255,255,0.12)",
          letterSpacing: "0.1em",
          margin: 0,
          fontWeight: 300,
        }}
      >
        chandlerhansen.com
      </p>
    </footer>
  );
}
