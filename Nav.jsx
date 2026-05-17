// Nav.jsx — sticky top nav with brand glyph, lowercase mono links, theme toggle.
// (Signal is no longer a standalone section — it's woven into Projects.)
const Nav = ({ active = 'projects', onNav = () => {}, onToggleTheme }) => {
  const links = ['projects', 'enterprise', 'contact'];
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-brand">
          <span className="led"></span>
          <span>JOE / ATL / ONLINE</span>
        </div>
        <div className="nav-links">
          {links.map(l => (
            <a key={l}
               className={active === l ? 'active' : ''}
               onClick={(e) => { e.preventDefault(); onNav(l); }}
               href={`#${l}`}>{l}</a>
          ))}
        </div>
        <button className="theme-toggle" onClick={onToggleTheme}>◐ theme</button>
      </div>
    </nav>
  );
};

window.Nav = Nav;
