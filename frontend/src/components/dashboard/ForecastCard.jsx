function ForecastCard({ train }) {
  return (
    <div className="panel forecast-panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow">AI FORECAST</p>
          <h3>Upcoming ETA</h3>
        </div>
      </div>

      <div className="forecast-main">
        <span className="forecast-label">
          TRAIN {train.train}
        </span>

        <h4>{train.forecast.predictedEta}</h4>

        <p>
          Predicted arrival at Howrah Junction
        </p>

        <div className="confidence">
          <div className="confidence-header">
            <span>Prediction confidence</span>

            <strong>{train.forecast.confidence}%</strong>
          </div>

          <div className="confidence-bar">
            <div
              className="confidence-fill"
              style={{
                width: `${train.forecast.confidence}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="forecast-factors">
        <div>
          <span>Current status</span>
          <strong>{train.status}</strong>
        </div>

        <div>
          <span>Delay risk</span>
          <strong>{train.forecast.risk}</strong>
        </div>

        <div>
          <span>Current station</span>
          <strong>{train.station}</strong>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;