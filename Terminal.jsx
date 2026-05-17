// Terminal.jsx — the macOS-styled terminal widget used in the hero.
const Terminal = ({ path = '~/joe', lines = [] }) => (
  <div className="terminal">
    <div className="terminal-bar">
      <span className="dot dot-r"></span>
      <span className="dot dot-y"></span>
      <span className="dot dot-g"></span>
      <span className="path">{path}</span>
    </div>
    <div className="terminal-body">
      {lines.map((l, i) => {
        if (l.type === 'cmd') {
          return (
            <div key={i}>
              <span className="prompt">$</span> {l.text}
              {l.cursor && <span className="cursor"></span>}
            </div>
          );
        }
        return <span key={i} className="out">{l.text}</span>;
      })}
    </div>
  </div>
);

window.Terminal = Terminal;
