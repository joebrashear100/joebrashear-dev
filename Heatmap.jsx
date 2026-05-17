// Heatmap.jsx — GitHub-style contribution grid.
// Pass `days` as an array of integers (commits per day, oldest first).
const Heatmap = ({ days = [], legend = true }) => {
  const level = (c) => {
    if (c === 0) return 0;
    if (c < 3) return 1;
    if (c < 8) return 2;
    if (c < 20) return 3;
    return 4;
  };
  const cols = Math.ceil(days.length / 7);
  return (
    <div className="panel">
      <div className="heatmap-wrap">
        <div className="heatmap-grid" style={{ '--hm-cols': cols }}>
          {days.map((c, i) => (
            <div key={i}
                 className={`hm-cell hm-${level(c)}`}
                 title={`${c} commit${c === 1 ? '' : 's'}`}></div>
          ))}
        </div>
      </div>
      {legend && (
        <div className="hm-legend">
          <span>less</span>
          {[0,1,2,3,4].map(l => <div key={l} className={`hm-cell hm-${l}`}></div>)}
          <span>more</span>
        </div>
      )}
    </div>
  );
};

window.Heatmap = Heatmap;
