// Footer.jsx — mono links + copyright in --text-tertiary.
const Footer = ({ year = 2026, links = [] }) => (
  <footer className="cockpit-footer">
    <div className="container">
      <div>
        {links.map((l, i) => (
          <a key={i} href={l.href || '#'}>{l.label}</a>
        ))}
      </div>
      <div>© {year} · built in atlanta</div>
    </div>
  </footer>
);

window.Footer = Footer;
