function Topbar() {
  return (
    <header className="topbar">
      <div>
        <p className="eyebrow">INDIAN RAILWAYS • PS 26028</p>
        <h2>Operations Dashboard</h2>
      </div>

      <div className="topbar-actions">
        <button className="icon-button">⌕</button>
        <button className="icon-button">🔔</button>

        <div className="profile">
          <div className="avatar">P</div>

          <div>
            <strong>Control Room</strong>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;