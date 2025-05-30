
export default function Home() {
  const modules = [
    { name: "Talk Like a Local", id: "module1" },
    { name: "Storytime", id: "module2" },
    { name: "Smart English for Work & Study", id: "module3" },
    { name: "Relationships & Social Life", id: "module4" },
    { name: "Viral English", id: "module5" },
    { name: "Travel & Emergencies", id: "module6" },
    { name: "Side Hustles & Freelancing", id: "module7" },
    { name: "Motivation & Dreams", id: "module8" }
  ];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>
        Welcome to the ESOL Course 🎓
      </h1>
      <p style={{ marginBottom: "1.5rem" }}>
        Start learning English through real-life stories, modern conversations, and fun tasks!
      </p>
      {modules.map((mod) => (
        <a
          key={mod.id}
          href={`/modules/${mod.id}`}
          style={{
            display: "block",
            padding: "1rem",
            marginBottom: "1rem",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            color: "#0070f3",
            textDecoration: "none",
            boxShadow: "0 1px 4px rgba(0, 0, 0, 0.05)"
          }}
        >
          {mod.name}
        </a>
      ))}
    </main>
  );
}
