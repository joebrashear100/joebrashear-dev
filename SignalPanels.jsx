// SignalPanels.jsx — the three panel variants used in the Signal grid.

const PanelHead = ({ label, meta, live, children }) => (
  <div className="panel-head">
    <span className="panel-head-label">{label}</span>
    <span className="panel-head-meta">
      {live && <><span className="pulse"></span><span className="live-text">{meta}</span></>}
      {!live && meta}
      {children}
    </span>
  </div>
);

const PRPanel = ({ rows = [], openCount }) => (
  <div className="panel" style={{ gridColumn: 'span 3' }}>
    <PanelHead label="// open pull requests" meta={`${openCount} open`} live />
    {rows.map((r, i) => (
      <div key={i} className="pr-row">
        <span className="pr-repo">{r.repo}</span>
        <span className="pr-title">{r.title}</span>
        <span className="pr-status">● {r.status}</span>
      </div>
    ))}
  </div>
);

const StatPanel = ({ label, meta, live, big, sub, trend }) => (
  <div className="panel">
    <PanelHead label={label} meta={meta} live={live} />
    <div className="stat-big">{big}</div>
    <div className="stat-sub">{sub}</div>
    {trend && <div className="stat-trend">{trend}</div>}
  </div>
);

const NowPlayingPanel = ({ tracks = [] }) => (
  <div className="panel">
    <PanelHead label="// now playing" meta="spotify" live />
    {tracks.map((t, i) => (
      <div key={i} className="now-playing-item">
        <div className="np-icon">♪</div>
        <div className="np-meta">
          <div className="np-title">{t.title}</div>
          <div className="np-sub">{t.artist}</div>
        </div>
      </div>
    ))}
  </div>
);

Object.assign(window, { PRPanel, StatPanel, NowPlayingPanel });
