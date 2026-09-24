const experience = [
  {
    period: '2026(May) – Now',
    role: 'GSSOC26 - Open Source Contributor',
    Organisation: 'GSSOC26',
    desc: "I worked with some projects and learned how to work in team and how to read and rectify the issue , I've learnt GitHub workflows in this process. ",
  },

]

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <div className="reveal" style={{ marginBottom: '44px' }}>
          <p className="label">Experience</p>
          <h2 className="heading">Where I've worked</h2>
          <p className="subheading">
            Three roles so far, each pretty different. I've picked up something
            useful from each of them.
          </p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.role} className="timeline-item reveal">
              <div className="timeline-left">
                <div className="timeline-period">{item.period}</div>
              </div>
              <div className="timeline-right">
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
