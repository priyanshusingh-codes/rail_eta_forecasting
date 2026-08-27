import "./App.css";

function App() {
  return (
    <div className="app">
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

      <main className="main-content">
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

        <section className="welcome">
          <div>
            <p className="eyebrow">REAL-TIME FORECASTING</p>
            <h3>Railway network at a glance</h3>
            <p>
              Monitor train movement, dynamic ETA predictions and operational
              conditions from one place.
            </p>
          </div>

          <div className="live-indicator">
            <span className="status-dot"></span>
            LIVE DATA
          </div>
        </section>

        <section className="stats-grid">
          <StatCard
            title="Active Trains"
            value="1,248"
            change="+4.2%"
            label="currently monitored"
          />

          <StatCard
            title="On Time"
            value="72.8%"
            change="+2.1%"
            label="network performance"
          />

          <StatCard
            title="Delayed"
            value="184"
            change="-8.4%"
            label="requiring attention"
          />

          <StatCard
            title="ETA Accuracy"
            value="91.6%"
            change="+3.7%"
            label="model confidence"
          />
        </section>

        <section className="content-grid">
          <div className="panel train-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">LIVE MONITORING</p>
                <h3>Train Status</h3>
              </div>

              <button className="view-button">View all →</button>
            </div>

            <div className="train-list">
              <TrainRow
                train="12301"
                name="Rajdhani Express"
                route="Howrah → New Delhi"
                status="On Time"
                eta="14:35"
                statusType="ontime"
              />

              <TrainRow
                train="12860"
                name="Gitanjali Express"
                route="Mumbai → Howrah"
                status="Delayed"
                eta="16:20"
                statusType="delayed"
              />

              <TrainRow
                train="12024"
                name="Jan Shatabdi"
                route="Patna → Howrah"
                status="On Time"
                eta="17:05"
                statusType="ontime"
              />

              <TrainRow
                train="12951"
                name="Mumbai Rajdhani"
                route="Mumbai → New Delhi"
                status="At Risk"
                eta="18:42"
                statusType="risk"
              />
            </div>
          </div>

          <div className="panel forecast-panel">
            <div className="panel-header">
              <div>
                <p className="eyebrow">AI FORECAST</p>
                <h3>Upcoming ETA</h3>
              </div>
            </div>

            <div className="forecast-main">
              <span className="forecast-label">TRAIN 12860</span>
              <h4>16:20</h4>
              <p>Predicted arrival at Howrah Junction</p>

              <div className="confidence">
                <div className="confidence-header">
                  <span>Prediction confidence</span>
                  <strong>94%</strong>
                </div>

                <div className="confidence-bar">
                  <div className="confidence-fill"></div>
                </div>
              </div>
            </div>

            <div className="forecast-factors">
              <div>
                <span>Current delay</span>
                <strong>+18 min</strong>
              </div>

              <div>
                <span>Congestion</span>
                <strong>Moderate</strong>
              </div>

              <div>
                <span>Next station</span>
                <strong>Bandel</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="network-panel panel">
          <div className="panel-header">
            <div>
              <p className="eyebrow">NETWORK OVERVIEW</p>
              <h3>Live Railway Network</h3>
            </div>

            <button className="view-button">Open map →</button>
          </div>

          <div className="map-placeholder">
            <div className="map-grid"></div>

            <div className="map-center">
              <div className="map-pulse"></div>
              <strong>Live Network Map</strong>
              <span>GPS & operational data feed</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function StatCard({ title, value, change, label }) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span>{title}</span>
        <span className="stat-icon">↗</span>
      </div>

      <strong>{value}</strong>

      <div className="stat-footer">
        <span className="positive">{change}</span>
        <span>{label}</span>
      </div>
    </div>
  );
}

function TrainRow({ train, name, route, status, eta, statusType }) {
  return (
    <div className="train-row">
      <div className="train-number">{train}</div>

      <div className="train-info">
        <strong>{name}</strong>
        <span>{route}</span>
      </div>

      <div className={`train-status ${statusType}`}>
        <span></span>
        {status}
      </div>

      <div className="train-eta">
        <span>ETA</span>
        <strong>{eta}</strong>
      </div>
    </div>
  );
}

export default App;