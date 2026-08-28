import trains from "../../data/trains";

const stations = [
  "Howrah",
  "Liluah",
  "Belur",
  "Bally",
  "Uttarpara",
  "Konnagar",
  "Rishra",
  "Serampore",
  "Seoraphuli",
  "Chandannagar",
  "Chuchura",
  "Bandel",
  "Bardhaman",
];

function NetworkMap({ selectedTrain, setSelectedTrain }) {
  return (
    <section className="network-panel panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">RAILRADAR • HOWRAH SECTION</p>
          <h3>Howrah → Bardhaman Main Line</h3>
        </div>

        <div className="live-indicator">
          <span className="status-dot"></span>
          LIVE
        </div>
      </div>

      <div className="route-map">
        <div className="route-line"></div>

        <div className="station-list">
          {stations.map((station, index) => (
            <div
              className={`station station-${index}`}
              key={station}
            >
              <span className="station-dot"></span>
              <span className="station-name">{station}</span>
            </div>
          ))}
        </div>

        <div className="radar-trains">
          {trains.map((train) => (
            <div
              key={train.train}
              className={`route-train ${train.statusType}`}
              style={{
                left: `${train.position}%`,
              }}
              onClick={() => setSelectedTrain(train)}
            >
              <span className="route-train-dot"></span>

              <span className="route-train-label">
                {train.train}
              </span>
            </div>
          ))}
        </div>
      </div>

      {selectedTrain && (
        <>
          <div className="train-details">
            <div className="train-details-header">
              <div>
                <p className="eyebrow">SELECTED TRAIN</p>

                <h4>
                  {selectedTrain.train} • {selectedTrain.name}
                </h4>
              </div>

              <button
                className="close-button"
                onClick={() => setSelectedTrain(null)}
              >
                ×
              </button>
            </div>

            <div className="train-details-grid">
              <div>
                <span>Route</span>
                <strong>{selectedTrain.route}</strong>
              </div>

              <div>
                <span>Current Station</span>
                <strong>{selectedTrain.station}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>{selectedTrain.status}</strong>
              </div>

              <div>
                <span>Predicted ETA</span>
                <strong>
                  {selectedTrain.forecast.predictedEta}
                </strong>
              </div>

              <div>
                <span>Confidence</span>
                <strong>
                  {selectedTrain.forecast.confidence}%
                </strong>
              </div>

              <div>
                <span>Delay Risk</span>
                <strong>{selectedTrain.forecast.risk}</strong>
              </div>
            </div>
          </div>

          <div className="forecast-factors-panel">
            <div className="forecast-factors-header">
              <p className="eyebrow">FORECAST FACTORS</p>
              <span>AI MODEL INPUTS</span>
            </div>

            <div className="forecast-factor-list">
              {selectedTrain.forecast.factors.map((factor) => (
                <div
                  className="forecast-factor"
                  key={factor}
                >
                  <span className="factor-dot"></span>
                  <span>{factor}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="radar-footer">
        <div className="radar-legend">
          <div>
            <span className="legend-dot ontime"></span>
            On Time
          </div>

          <div>
            <span className="legend-dot delayed"></span>
            Delayed
          </div>

          <div>
            <span className="legend-dot risk"></span>
            At Risk
          </div>
        </div>

        <span className="prototype-label">
          Prototype • Operational View
        </span>
      </div>
    </section>
  );
}

export default NetworkMap;