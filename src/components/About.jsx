import Tilt3DImage from './Tilt3DImage';

const skills = [
  'React', 'Node.js',
  'Python', 'MySQL', 'AWS', 'Express.js', 'Git'
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Photo - Premium 3D Tilt Effect */}
          <div className="about-photo reveal">
            <Tilt3DImage 
              src="/profile.jpg" 
              alt="Vishnu Koushik"
              className="profile-tilt"
            />
            <div className="about-photo-caption">
              <strong>Vishnu Koushik</strong> · Full-Stack Developer
            </div>
          </div>

          {/* Text */}
          <div className="about-content reveal">
            <p className="label">About</p>
            <h2 className="heading">A bit about me</h2>

            <p>
              I got into programming around 2023, mostly out of curiosity — I
              wanted to understand how websites actually worked. What started as
              tinkering with HTML turned into a genuine obsession with building
              things.
            </p>

            <p>
              These days I mostly work with <strong>React and Node.js</strong>,
              but I'm comfortable across the stack. I've worked with some projects
              to get comfortable with all those technologies.
            </p>

            <p>
              I'm the kind of person who actually reads pull request feedback
              carefully and cares whether the button label is phrased right.
            </p>

            <div className="skills-section">
              <div className="skills-label">Things I work with</div>
              <div className="skills-list">
                {skills.map((s) => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '28px' }}>
              <a href="#contact" className="btn-primary">Download résumé →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
