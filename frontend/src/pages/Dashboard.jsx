import "../App.css";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import StatCard from "../components/dashboard/StatCard";
import TrainRow from "../components/dashboard/TrainRow";
import ForecastCard from "../components/dashboard/ForecastCard";
import NetworkMap from "../components/map/NetworkMap";
import trains from "../data/trains";
import stats from "../data/stats";

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
  {stats.map((stat) => (
    <StatCard
      key={stat.title}
      title={stat.title}
      value={stat.value}
      change={stat.change}
      label={stat.label}
    />
  ))}
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
              {trains.map((train) => (
                <TrainRow
                  key={train.train}
                  train={train.train}
                  name={train.name}
                  route={train.route}
                  status={train.status}
                  eta={train.eta}
                  statusType={train.statusType}
                />
              ))}
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
