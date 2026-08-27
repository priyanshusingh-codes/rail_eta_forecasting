import "../App.css";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import StatCard from "../components/dashboard/StatCard";
import TrainRow from "../components/dashboard/TrainRow";
import ForecastCard from "../components/dashboard/ForecastCard";
import NetworkMap from "../components/map/NetworkMap";
function Dashboard() {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Topbar />
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
        <ForecastCard />
      </section>

      <NetworkMap />
    </main>
  </div>
);
}

export default Dashboard;
