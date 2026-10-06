import { useRef, useEffect, useState } from 'react'

const NAV_SECTIONS = ['home', 'about', 'projects', 'experience', 'contact']

export default function Nav({ dark, onToggle }) {
  const rippleRef = useRef(null)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  function handleToggle() {
    const ripple = rippleRef.current
    ripple.classList.remove('ripple-animate')
    void ripple.offsetWidth
    ripple.classList.add('ripple-animate')
    onToggle()
  }

  // Active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  // Close mobile menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <>
      <div ref={rippleRef} className="dark-ripple" />
      <nav className="nav">
        <div className="nav-logo">Vishnu Koushik<span>.</span></div>

        {/* Desktop links */}
        <ul className="nav-links">
          {['about', 'projects', 'experience'].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? 'nav-link-active' : ''}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
          <li><a href="#contact" className="nav-cta">Let's talk</a></li>
          <li>
            <button className="dark-toggle" onClick={handleToggle} aria-label="Toggle dark mode">
              {dark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="nav-mobile-controls">
          <button className="dark-toggle" onClick={handleToggle} aria-label="Toggle dark mode">
            {dark ? '☀️' : '🌙'}
          </button>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`ham-line${menuOpen ? ' open' : ''}`} />
            <span className={`ham-line${menuOpen ? ' open' : ''}`} />
            <span className={`ham-line${menuOpen ? ' open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu-open' : ''}`}>
        {['about', 'projects', 'experience', 'contact'].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`mobile-menu-link${activeSection === id ? ' mobile-link-active' : ''}`}
            onClick={handleNavClick}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </>
  )
}
