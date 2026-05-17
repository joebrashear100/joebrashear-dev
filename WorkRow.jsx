// WorkRow.jsx — NDA-safe enterprise-work row: category · title/desc · stack.
const WorkRow = ({ category, title, desc, stack }) => (
  <div className="work-row">
    <span className="work-category">{category}</span>
    <div>
      <div className="work-title">{title}</div>
      <div className="work-desc">{desc}</div>
    </div>
    <span className="work-stack">{stack}</span>
  </div>
);

window.WorkRow = WorkRow;
