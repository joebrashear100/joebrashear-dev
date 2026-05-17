// ImpactBar.jsx — 4-up stat row separated by 0.5px verticals.
const ImpactBar = ({ caption = '// CAREER IMPACT · ENTERPRISE', items = [] }) => (
  <div className="impact">
    <div className="impact-caption">{caption}</div>
    <div className="impact-row">
      {items.map((it, i) => (
        <div key={i} className="impact-item">
          <div className="impact-value">
            {it.value}<span className="unit">{it.unit}</span>
          </div>
          <div className="impact-label">{it.label}</div>
        </div>
      ))}
    </div>
  </div>
);

window.ImpactBar = ImpactBar;
