// ProjectCard.jsx — title, platform pill, desc, feature pills,
// optional inline signal strip (open PRs, 7d commits, last PR, deploy),
// then version + progress.
//
// `signal` is optional — omit it for non-signal cards (e.g. "Open slot").
// signal shape: {
//   openPRs?: number,
//   weekCommits?: number,
//   deploy?: { status: 'passing' | 'failing', age: '17h' },
//   lastPR?: { title: string, status: 'draft' | 'open' },
// }

const ProjectCard = ({ title, platform, desc, features = [], version, status, progress, footRight, signal, onOpen }) => {
  const hasSignal = signal && (signal.openPRs != null || signal.weekCommits != null || signal.deploy || signal.lastPR);

  return (
    <div className="project-card" onClick={onOpen}>
      <div className="project-head">
        <div className="project-title">{title}</div>
        <span className="project-platform">{platform}</span>
      </div>
      <p className="project-desc">{desc}</p>
      <div className="project-features">
        {features.map((f, i) => <span key={i} className="feature-pill">{f}</span>)}
      </div>

      {hasSignal && (
        <div className="project-signal">
          <div className="project-signal-row">
            {signal.openPRs != null && (
              <span className="ps-item">
                <span className="ps-dot ps-dot-open"></span>
                {signal.openPRs} open
              </span>
            )}
            {signal.weekCommits != null && (
              <span className="ps-item">{signal.weekCommits} commits / 7d</span>
            )}
            {signal.deploy && (
              <span className={`ps-item ps-deploy ps-${signal.deploy.status}`}>
                <span className="pulse"></span>
                {signal.deploy.age} {signal.deploy.status}
              </span>
            )}
          </div>
          {signal.lastPR && (
            <div className="project-signal-pr">
              <span className="ps-arrow">▸</span>
              <span className="ps-pr-title">{signal.lastPR.title}</span>
              <span className={`ps-pr-status ps-${signal.lastPR.status}`}>{signal.lastPR.status}</span>
            </div>
          )}
        </div>
      )}

      <div className="project-foot">
        <span><span className="project-version">{version}</span> · {status}</span>
        {footRight !== undefined ? footRight : (
          progress != null
            ? <div className="progress"><div className="progress-bar" style={{ width: `${progress}%` }}></div></div>
            : null
        )}
      </div>
    </div>
  );
};

window.ProjectCard = ProjectCard;
