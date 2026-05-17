// Hero.jsx — award row + h1 + lede + CTAs on the left, terminal on the right.
const Hero = ({ awards = [], onProjects, onContact }) => (
  <div className="hero">
    <div>
      <div className="award-row">
        {awards.map((a, i) => (
          <div key={i} className="award-badge">
            <span className="star">★</span>
            <span>{a}</span>
          </div>
        ))}
      </div>
      <h1 className="hero-h1">
        Full-stack developer<br />
        <span className="muted">shipping at altitude.</span>
      </h1>
      <p className="lede">
        I build <strong>modern web</strong> and <strong>AI &amp; automation</strong> systems.
        Technical Lead &amp; SME at Delta. Shipping indie products on the side.
        Available for select freelance work from Atlanta.
      </p>
      <div className="cta-row">
        <a className="btn" onClick={(e) => { e.preventDefault(); onProjects?.(); }} href="#projects">see projects</a>
        <a className="btn btn-ghost" onClick={(e) => { e.preventDefault(); onContact?.(); }} href="#contact">hire me ↗</a>
      </div>
    </div>

    <Terminal
      path="~/joe"
      lines={[
        { type: 'cmd', text: 'whoami' },
        { type: 'out', text: 'joe — full-stack, AI & automation' },
        { type: 'cmd', text: 'stack' },
        { type: 'out', text: 'next.js · react · typescript' },
        { type: 'out', text: 'swift · power platform · aws' },
        { type: 'cmd', text: 'location' },
        { type: 'out', text: 'atlanta, ga · or on standby' },
        { type: 'cmd', text: 'status', cursor: true },
      ]}
    />
  </div>
);

window.Hero = Hero;
