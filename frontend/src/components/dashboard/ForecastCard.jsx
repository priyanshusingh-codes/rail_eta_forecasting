function ForecastCard() {
  return (
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
  );
}

export default ForecastCard;