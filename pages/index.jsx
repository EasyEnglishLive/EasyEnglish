export default function Home() {
  const modules = Array.from({ length: 8 }, (_, i) => `Module ${i + 1}`);
  const lessons = Array.from({ length: 4 }, (_, i) => `Lesson ${i + 1}`);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>🎓 Welcome to Easy English</h1>
      <p>Start learning English through real-life stories, modern conversations, and fun tasks — from a native UK teacher who knows how to teach Chinese learners effectively.</p>
      {modules.map((module, moduleIndex) => (
        <div key={moduleIndex} style={{ marginBottom: '2rem' }}>
          <h2>{module}</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {lessons.map((lesson, lessonIndex) => (
              <a
                key={lessonIndex}
                href={`/modules/module${moduleIndex + 1}/module${moduleIndex + 1}_${lessonIndex + 1}`}
                style={{
                  padding: '0.75rem 1rem',
                  backgroundColor: '#f0f0f0',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  border: '1px solid #ccc',
                  color: '#333',
                  minWidth: '120px',
                  textAlign: 'center'
                }}
              >
                {lesson}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}