export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />

      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-dot" />
          Open to new opportunities
        </div>

        <h1 className="hero-title">
          I build things for the web —{' '}
          <em>carefully</em>.
        </h1>

        <p className="hero-desc">
          I'm <span className="hero-name">Vishnu Koushik</span>, a full-stack developer based in India. I care a lot about
          the details — clean code, fast interfaces, and experiences that
          feel good to use. I've been doing this for about 3 years now.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">See my work →</a>
          <a href="#contact" className="btn-outline">Get in touch</a>
        </div>
      </div>
    </section>
  )
}
