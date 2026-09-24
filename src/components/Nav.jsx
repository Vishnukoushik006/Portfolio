export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">Vishnu Koushik<span>.</span></div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact" className="nav-cta">Let's talk</a></li>
      </ul>
    </nav>
  )
}
