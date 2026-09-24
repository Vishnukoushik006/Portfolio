const projects = [
  {
    emoji: '',
    bg: 'linear-gradient(135deg, #131225, #1a1830)',
    tags: [
      { label: 'React.js', color: '#000000', bg: 'rgba(0,0,0,0.08)' },
      { label: 'Extension', color: '#5bb8d4', bg: 'rgba(91,184,212,0.12)' },
    ],
    title: 'RoleFlow',
    desc: 'An application for tracking jobs that are applying in carrer pages and job portals so you can track your jobs easily',
    link: '#',
  },
  {
    emoji: '📊',
    bg: 'linear-gradient(135deg, #101a16, #131f18)',
    tags: [
      { label: 'React.js', color: '#6abf8a', bg: 'rgba(106,191,138,0.12)' },
      { label: 'MongoDB', color: '#d4a55b', bg: 'rgba(212,165,91,0.12)' },
    ],
    title: 'CashCompass',
    desc: 'A dashboard for tracking daily expenses',
    link: '#',
  },
  {
    emoji: '🤖',
    bg: 'linear-gradient(135deg, #1a1218, #1a1015)',
    tags: [
      { label: 'Python', color: '#c47fbf', bg: 'rgba(196,127,191,0.12)' },
      { label: 'FastAPI', color: '#000000', bg: 'rgba(0,0,0,0.08)' },
    ],
    title: 'Chat Engine',
    desc: 'A lightweight RAG-based chat backend I open-sourced last year. Got more stars than I expected. Still maintaining it in my free time.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="label">Work</p>
          <h2 className="heading">A few things I've shipped</h2>
          <p className="subheading">
            Some recent projects — client work, personal experiments, and
            open source. Nothing too fancy, just real stuff I'm proud of.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.title} className="project-card reveal">
              <div className="project-thumb" style={{ background: p.bg }}>
                <span>{p.emoji}</span>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span
                      key={t.label}
                      className="project-tag"
                      style={{ color: t.color, background: t.bg }}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <a href={p.link} className="project-link">View project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
