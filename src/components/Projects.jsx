import { useState, useEffect } from 'react'

const projects = [
  {
    emoji: '🚀',
    bg: 'linear-gradient(135deg, #0d1117, #161b22)',
    accentColor: '#5bb8d4',
    tags: [
      { label: 'React.js', color: '#61dafb', bg: 'rgba(97,218,251,0.12)' },
      { label: 'Chrome Extension', color: '#5bb8d4', bg: 'rgba(91,184,212,0.12)' },
    ],
    title: 'RoleFlow',
    shortDesc: 'Job application tracker — never lose track of where you applied.',
    fullDesc:
      'RoleFlow is a smart job-application tracking tool that lives right in your browser. It lets you save jobs directly from career pages and job portals with a single click, then organises everything in a clean dashboard. Track status, notes, deadlines, and interviews — all in one place, with zero friction.',
    features: ['One-click job capture from any portal', 'Application status pipeline (Applied → Interview → Offer)', 'Notes & deadline reminders per application', 'Clean, distraction-free dashboard'],
    github: 'https://github.com/Vishnukoushik006/RoleFlow',
    live: 'https://role-flow-five.vercel.app/',
    status: 'Live',
  },
  {
    emoji: '💸',
    bg: 'linear-gradient(135deg, #0a1a10, #0d2015)',
    accentColor: '#6abf8a',
    tags: [
      { label: 'React.js', color: '#6abf8a', bg: 'rgba(106,191,138,0.12)' },
      { label: 'MongoDB', color: '#d4a55b', bg: 'rgba(212,165,91,0.12)' },
      { label: 'Chart.js', color: '#ff6384', bg: 'rgba(255,99,132,0.12)' },
    ],
    title: 'CashCompass',
    shortDesc: 'Expense dashboard with real-time charts & spending insights.',
    fullDesc:
      'CashCompass is a full-stack personal finance tracker that helps you understand where your money goes. Built with React on the frontend and MongoDB for persistence, it features a rich analytics dashboard powered by Chart.js. Enhanced dashboard loading performance by 15% through optimised data-fetching and responsive visualisation techniques.',
    features: ['Daily / monthly expense breakdown', 'Category-based spending pie & bar charts', 'Income vs expense trend line', '15 % faster dashboard load via optimised queries'],
    github: 'https://github.com/Vishnukoushik006/Expense-Tracker',
    live: 'https://expense-tracker-x4xi.vercel.app/',
    status: 'Live',
  },
  {
    emoji: '🤖',
    bg: 'linear-gradient(135deg, #120a1a, #1a0f25)',
    accentColor: '#c47fbf',
    tags: [
      { label: 'Python', color: '#c47fbf', bg: 'rgba(196,127,191,0.12)' },
      { label: 'FastAPI', color: '#009688', bg: 'rgba(0,150,136,0.12)' },
      { label: 'RAG', color: '#ffa726', bg: 'rgba(255,167,38,0.12)' },
    ],
    title: 'GATE RAG System',
    shortDesc: 'RAG-based AI chat engine for GATE exam prep — ongoing.',
    fullDesc:
      'An open-source Retrieval-Augmented Generation (RAG) backend built for GATE exam preparation. It ingests syllabus PDFs and past-year question papers, then lets students ask natural-language questions and get precise, cited answers in real time. Powered by FastAPI, LangChain, and a vector store for semantic retrieval.',
    features: ['PDF ingestion & chunking pipeline', 'Semantic vector search with FAISS', 'Cited answers with source page references', 'REST API via FastAPI — plug any frontend'],
    github: 'https://github.com/Vishnukoushik006/gate-rag-system',
    live: null,
    status: 'Ongoing',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  // Close modal on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  return (
    <>
      <section className="section" id="projects">
        <div className="container">
          <div className="section-header reveal">
            <p className="label">Work</p>
            <h2 className="heading">A few things I've shipped</h2>
            <p className="subheading">
              Some recent projects — personal experiments and open source.
              Click any card to learn more.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p) => (
              <div
                key={p.title}
                className="project-card reveal"
                onClick={() => setSelected(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelected(p)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-thumb" style={{ background: p.bg }}>
                  <span>{p.emoji}</span>
                  {p.status === 'Ongoing' && (
                    <span className="project-status-badge ongoing">Ongoing</span>
                  )}
                  {p.status === 'Live' && (
                    <span className="project-status-badge live">Live ✦</span>
                  )}
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
                  <p className="project-desc">{p.shortDesc}</p>
                  <span className="project-link">View details →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {selected && (
        <div
          className="modal-backdrop"
          onClick={(e) => e.target === e.currentTarget && setSelected(null)}
        >
          <div className="modal-card">
            {/* Thumb / Hero */}
            <div className="modal-thumb" style={{ background: selected.bg }}>
              <span className="modal-emoji">{selected.emoji}</span>
              {selected.status === 'Ongoing' && (
                <span className="project-status-badge ongoing modal-badge">Ongoing</span>
              )}
              {selected.status === 'Live' && (
                <span className="project-status-badge live modal-badge">Live ✦</span>
              )}
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* Close */}
              <button
                className="modal-close"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                ✕
              </button>

              {/* Tags */}
              <div className="project-tags" style={{ marginBottom: '12px' }}>
                {selected.tags.map((t) => (
                  <span
                    key={t.label}
                    className="project-tag"
                    style={{ color: t.color, background: t.bg }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              <h2 className="modal-title">{selected.title}</h2>
              <p className="modal-desc">{selected.fullDesc}</p>

              {/* Features */}
              <div className="modal-features">
                <p className="modal-features-label">✦ Key highlights</p>
                <ul className="modal-features-list">
                  {selected.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="modal-actions">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn modal-btn-outline"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                {selected.live ? (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn modal-btn-primary"
                  >
                    🔗 Live Demo
                  </a>
                ) : (
                  <span className="modal-btn modal-btn-disabled">
                    🚧 In Progress
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
