const links = [
  { icon: '📧', label: 'Email', sub: 'VishnuKoushik', href: 'mailto:vishnukoushik353@gmail.com' },
  { icon: '💼', label: 'LinkedIn', sub: '/in/vishnukoushik', href: 'https://www.linkedin.com/in/vishnu-koushik-samayamantri-20b023316/' },
  { icon: '🐙', label: 'GitHub', sub: '@vishnukoushik', href: 'https://github.com/Vishnukoushik006' },
  { icon: '🐦', label: 'Twitter / X', sub: '@vishnukoushik', href: '#' },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-wrap">

          {/* Left text */}
          <div className="reveal">
            <p className="label">Contact</p>
            <h2 className="heading">Let's talk</h2>
            <p className="subheading">
              I'm open to freelance work, full-time roles, and interesting
              side projects. If you have something in mind — even if it's
              half-formed — just reach out. I reply to everything.
            </p>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '16px' }}>
              Usually responds within a day or two.
            </p>
          </div>

          {/* Right links */}
          <div className="contact-right reveal">
            <h3>Find me here</h3>
            <div className="contact-links">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="contact-link">
                  <span className="contact-link-icon">{link.icon}</span>
                  <span>{link.label}</span>
                  <span className="contact-link-label">{link.sub}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
