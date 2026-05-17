// App.jsx — composes the portfolio. Projects carry inline signal (PRs, commits,
// deploy). Enterprise work is NDA-safe, Delta-sourced.

const PROJECTS = [
  {
    title: 'CopilotFin',
    platform: 'WEB',
    version: 'v0.9',
    status: 'active',
    progress: 65,
    desc: 'AI-powered personal finance copilot. Runs discovery scans, syncs investment data, surfaces weekly reviews, and tracks portfolio activity across accounts — all locally orchestrated.',
    features: ['AI · LLM', 'Finance data', 'Alerts', 'Weekly digest'],
    signal: {
      openPRs: 72,
      weekCommits: 90,
      lastPR: { title: 'Replace ntfy with Twilio SMS for all alert notifications', status: 'draft' },
    },
  },
  {
    title: 'nimbus-trade',
    platform: 'WEB',
    version: 'v0.3',
    status: 'active',
    progress: 55,
    desc: 'Algorithmic trading platform with multi-channel alerting, SLO monitoring, and automated portfolio management. Production-grade observability and disaster recovery built in from day one.',
    features: ['Python', 'Multi-channel alerts', 'SLO monitoring', 'Prefect'],
    signal: {
      openPRs: 0,
      weekCommits: 8,
      lastPR: { title: 'Phase 4 enterprise: multi-channel alerts, SLOs, DR, threat model', status: 'open' },
    },
  },
  {
    title: 'delegate-call-agent',
    platform: 'API',
    version: 'v0.2',
    status: 'active',
    progress: 40,
    desc: 'Autonomous voice agent that places delegated phone calls on your behalf. ElevenLabs for natural TTS, automated workflow orchestration, and structured call result logging.',
    features: ['ElevenLabs TTS', 'Voice agent', 'Workflow', 'Automation'],
    signal: {
      openPRs: 0,
      weekCommits: 7,
      lastPR: { title: 'feat: swap Alice TTS for ElevenLabs audio on call smoke', status: 'open' },
    },
  },
  {
    title: 'active-initiatives',
    platform: 'WEB',
    version: 'v0.1',
    status: 'active',
    progress: 30,
    desc: 'Internal tracker for active projects and initiatives. Server-side rendered, security audited, with a full developer documentation suite. Designed for personal ops and project accountability.',
    features: ['Next.js', 'Server components', 'Docs suite', 'Security audit'],
    signal: {
      openPRs: 0,
      weekCommits: 2,
      lastPR: { title: 'chore: developer documentation suite, build fix, security audit', status: 'open' },
    },
  },
];

const WORK = [
  { category: 'AI Agents', title: 'Contract intelligence platform',
    desc: 'Multi-agent system that ingests, summarizes, and triages thousands of enterprise contracts annually. Parent-child agent architecture, retrieval-augmented generation, integration with procurement systems.',
    stack: 'Copilot Studio · RAG · multi-agent' },
  { category: 'AI Agents', title: 'Contract hygiene agent',
    desc: 'Conversational agent that reviews draft procurement agreements for completeness, missing clauses, payment terms, and process hygiene before legal escalation. Guides sourcing users through structured review without rendering legal opinions.',
    stack: 'Copilot Studio · NLP · procurement' },
  { category: 'AI Agents', title: 'NDA lifecycle automation',
    desc: 'Agentic solution that automates the end-to-end NDA process from intake through execution. Orchestrates across form capture, approval routing, document generation, e-signature, and system-of-record storage.',
    stack: 'Copilot Studio · UiPath · DocuSign · Zycus' },
  { category: 'AI Governance', title: 'Enterprise AI agent repository',
    desc: 'Central catalog and governance platform for all deployed AI agents across the organization. Defines agent lifecycle, ownership, usage tracking, data classification, and reuse standards.',
    stack: 'AWS · Next.js · FastAPI · Aurora Postgres' },
  { category: 'Real-time Ops', title: 'Frontline operations app',
    desc: 'Real-time application supporting frontline users in time-critical operations. Performance-tuned for high-volume reads against a relational backend, designed to remain stable under hostile network conditions.',
    stack: 'Power Apps · PostgreSQL' },
  { category: 'Real-time Ops', title: 'Operational assignment tracker',
    desc: 'Canvas app capturing frontline staff assignments by location, shift, and date. Feeds enterprise data warehouse and Power BI reporting pipelines for operational performance attribution.',
    stack: 'Power Apps · Dataverse · Power BI' },
  { category: 'Workforce', title: 'Vendor labor management platform',
    desc: 'Replaces Excel-based tracking and email-driven exception handling for vendor labor operations. Supports FTE tracking, forecast distribution, exception request submission, and manager approval workflows.',
    stack: 'Power Apps · Dataverse · Power Automate' },
  { category: 'Workflow', title: 'Enterprise request platform',
    desc: 'Model-driven app replacing a multi-team manual approval pipeline. Custom approval engine, role-based routing, and full audit trails. Saves thousands of FTE hours annually.',
    stack: 'Dataverse · Power Automate' },
  { category: 'Global Ops', title: 'International operations platform',
    desc: 'Cross-region application supporting disruption management and performance reporting across multiple geographies. Dynamic HTML email generation, conditional context-aware logic, deployed globally.',
    stack: 'Power Apps · Power Automate · Dataverse' },
  { category: 'Time & Attendance', title: 'Global time-tracking platform',
    desc: 'Enterprise time and attendance system deployed across domestic and international operations. Multi-region rollout with localization support.',
    stack: 'Power Apps · Dataverse' },
  { category: 'Developer Tooling', title: 'Agile platform connector',
    desc: 'Custom API connector enabling natural-language interaction with enterprise agile tooling directly from a team messaging platform. Bridges conversational AI with project management workflows.',
    stack: 'Power Platform · REST API · Teams' },
  { category: 'Automation', title: 'AI-assisted content audit system',
    desc: 'Hybrid automation pipeline combining RPA and large language models to audit and classify large volumes of training content. Reduces manual review time significantly.',
    stack: 'UiPath · Gemini · AI Builder' },
  { category: 'Modernization', title: 'Legacy platform migration',
    desc: 'Architected the modernization of a legacy enterprise app from a low-code stack to a cloud-native architecture. Presented to executive leadership and approved for build.',
    stack: 'React · AWS · UiPath' },
];

const TRACKS = [
  { title: 'You Were Right', artist: 'RÜFÜS DU SOL' },
  { title: 'Sundream', artist: 'RÜFÜS DU SOL' },
];

const DAYS = (() => {
  const out = [];
  for (let i = 0; i < 52 * 7; i++) {
    const heavy = i > 52 * 7 - 12 * 7;
    const r = Math.random();
    if (heavy) {
      if (r > 0.95) out.push(45);
      else if (r > 0.8) out.push(15);
      else if (r > 0.6) out.push(5);
      else if (r > 0.35) out.push(2);
      else out.push(0);
    } else {
      if (r > 0.92) out.push(8);
      else if (r > 0.75) out.push(3);
      else if (r > 0.55) out.push(1);
      else out.push(0);
    }
  }
  return out;
})();

const TOTALS = PROJECTS.reduce((acc, p) => {
  if (p.signal?.weekCommits) acc.commits += p.signal.weekCommits;
  if (p.signal?.openPRs) acc.openPRs += p.signal.openPRs;
  if (p.signal?.weekCommits) acc.activeRepos += 1;
  return acc;
}, { commits: 0, openPRs: 0, activeRepos: 0 });

const App = () => {
  const [theme, setTheme] = React.useState('light');
  const [active, setActive] = React.useState('projects');

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const onNav = (section) => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Nav active={active}
           onNav={onNav}
           onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />

      <div className="container">
        <Hero awards={['2024 ENTERPRISE AUTOMATION MVP']}
              onProjects={() => onNav('projects')}
              onContact={() => onNav('contact')} />

        <ImpactBar items={[
          { value: '$4', unit: 'M+', label: 'Documented ROI' },
          { value: '10', unit: 'k+', label: 'Annual hours saved' },
          { value: '50', unit: 'k+', label: 'App sessions' },
          { value: '5', unit: 'k+', label: 'Users served' },
        ]} />

        <section id="projects" className="cockpit-section">
          <div className="section-head">
            <h2>Projects · live</h2>
            <div className="meta">
              <span className="now-strip-summary">
                <span className="accent">●</span> {TOTALS.openPRs} open ·{' '}
                {TOTALS.commits} commits / 7d ·{' '}
                <span className="live">deploy passing 17h</span>
              </span>
            </div>
          </div>
          <div className="projects">
            {PROJECTS.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>

          <div className="now-strip">
            <div className="panel">
              <div className="now-strip-head">
                <span className="panel-head-label">// contributions · 52w</span>
                <span className="panel-head-meta">may 2025 – may 2026</span>
              </div>
              <div className="heatmap-wrap">
                <div className="heatmap-grid" style={{ '--hm-cols': Math.ceil(DAYS.length / 7) }}>
                  {DAYS.map((c, i) => {
                    const lvl = c === 0 ? 0 : c < 3 ? 1 : c < 8 ? 2 : c < 20 ? 3 : 4;
                    return <div key={i} className={`hm-cell hm-${lvl}`} title={`${c} commit${c===1?'':'s'}`}></div>;
                  })}
                </div>
              </div>
              <div className="hm-legend">
                <span>less</span>
                {[0,1,2,3,4].map(l => <div key={l} className={`hm-cell hm-${l}`}></div>)}
                <span>more</span>
              </div>
            </div>
            <div className="panel">
              <div className="now-strip-head">
                <span className="panel-head-label">// now playing</span>
                <span className="panel-head-meta">
                  <span className="pulse"></span>
                  <span className="live-text">spotify</span>
                </span>
              </div>
              {TRACKS.map((t, i) => (
                <div key={i} className="now-playing-item">
                  <div className="np-icon">♪</div>
                  <div className="np-meta">
                    <div className="np-title">{t.title}</div>
                    <div className="np-sub">{t.artist}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="enterprise" className="cockpit-section">
          <div className="section-head">
            <h2>Enterprise work</h2>
            <div className="meta">Delta · under NDA</div>
          </div>
          <div className="enterprise-context">
            As a Technical Lead &amp; SME at Delta, I architect and ship platform software for
            operations, supply chain, and frontline teams. Specifics are confidential, but the{' '}
            <strong>categories</strong> of work are below. Numbers in the impact bar are
            aggregated, validated outcomes from this portfolio of work.
          </div>
          <div className="work-list">
            {WORK.map((w, i) => <WorkRow key={i} {...w} />)}
          </div>
        </section>
      </div>

      <Footer year={2026}
              links={[
                { label: 'github', href: 'https://github.com/joebrashear100' },
                { label: 'linkedin', href: '#' },
                { label: 'x', href: '#' },
                { label: 'email', href: '#contact' },
              ]} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
