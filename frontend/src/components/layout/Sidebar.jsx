function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">R</div>

        <div>
          <h1>RailPredict</h1>
          <span>ETA Intelligence</span>
        </div>
      </div>

      <nav className="navigation">
        <button className="nav-item active">
          <span>⌂</span>
          Dashboard
        </button>

        <button className="nav-item">
          <span>⌕</span>
          Train Search
        </button>

        <button className="nav-item">
          <span>◉</span>
          Live Map
        </button>

        <button className="nav-item">
          <span>◫</span>
          Analytics
        </button>

        <button className="nav-item">
          <span>⚠</span>
          Alerts
        </button>

        <button className="nav-item">
          <span>▤</span>
          Reports
        </button>
      </nav>

      <div className="sidebar-footer">
        <span className="status-dot"></span>
        System operational
      </div>
    </aside>
  );
}

export default Sidebar;