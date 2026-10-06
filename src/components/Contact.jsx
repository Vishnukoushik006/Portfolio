import { useState } from 'react'

const links = [
  { icon: '📧', label: 'Email', sub: 'vishnukoushik353@gmail.com', href: 'mailto:vishnukoushik353@gmail.com', copyable: true },
  { icon: '💼', label: 'LinkedIn', sub: '/in/vishnukoushik', href: 'https://www.linkedin.com/in/vishnu-koushik-samayamantri-20b023316/' },
  { icon: '🐙', label: 'GitHub', sub: '@Vishnukoushik006', href: 'https://github.com/Vishnukoushik006' },
]

export default function Contact() {
  const [toast, setToast] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function copyEmail(e) {
    e.preventDefault()
    navigator.clipboard.writeText('vishnukoushik353@gmail.com').then(() => {
      setToast(true)
      setTimeout(() => setToast(false), 2200)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = form
    const body = encodeURIComponent(`Hi Vishnu,\n\nMy name is ${name} (${email}).\n\n${message}`)
    window.open(`mailto:vishnukoushik353@gmail.com?subject=Portfolio%20Contact&body=${body}`)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-wrap">

          {/* Left — text + links */}
          <div className="reveal">
            <p className="label">Contact</p>
            <h2 className="heading">Let's talk</h2>
            <p className="subheading">
              I'm open to freelance work, full-time roles, and interesting
              side projects. If you have something in mind — just reach out.
              I reply to everything.
            </p>
            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginTop: '16px', marginBottom: '24px' }}>
              Usually responds within a day or two.
            </p>

            <div className="contact-links">
              {links.map((link) =>
                link.copyable ? (
                  <button
                    key={link.label}
                    className="contact-link contact-link-btn"
                    onClick={copyEmail}
                    title="Click to copy email"
                  >
                    <span className="contact-link-icon">{link.icon}</span>
                    <span>{link.label}</span>
                    <span className="contact-link-label">{link.sub}</span>
                    <span className="contact-copy-hint">copy</span>
                  </button>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="contact-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="contact-link-icon">{link.icon}</span>
                    <span>{link.label}</span>
                    <span className="contact-link-label">{link.sub}</span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right — contact form */}
          <div className="contact-right reveal">
            <h3>Send a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="What's on your mind?"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Send via Email →
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Toast */}
      <div className={`copy-toast${toast ? ' copy-toast-show' : ''}`}>
        ✓ Email copied to clipboard!
      </div>
    </section>
  )
}
