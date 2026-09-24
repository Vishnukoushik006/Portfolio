import { useRef } from 'react'

export default function Nav({ dark, onToggle }) {
  const rippleRef = useRef(null)

  function handleToggle() {
    const ripple = rippleRef.current
    ripple.classList.remove('ripple-animate')
    void ripple.offsetWidth // reflow
    ripple.classList.add('ripple-animate')
    onToggle()
  }

  return (
    <>
      <div ref={rippleRef} className="dark-ripple" />
      <nav className="nav">
        <div className="nav-logo">Vishnu Koushik<span>.</span></div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact" className="nav-cta">Let's talk</a></li>
          <li>
            <button className="dark-toggle" onClick={handleToggle} aria-label="Toggle dark mode">
              {dark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}
