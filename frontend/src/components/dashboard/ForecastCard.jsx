import { useEffect, useState } from "react";

function ForecastCard({ train }) {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function getLivePrediction() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `http://127.0.0.1:8000/predict-live/${train.train}`
        );

        if (!response.ok) {
          throw new Error("Live prediction request failed");
        }

        const data = await response.json();

        if (!cancelled) {
          setPrediction(data);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError("Unable to fetch live ML prediction");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    getLivePrediction();

    return () => {
      cancelled = true;
    };
  }, [train.train]);

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

        {loading && <h4>Calculating...</h4>}

        {error && <h4>{error}</h4>}

        {!loading && !error && prediction !== null && (
          <>
            <h4>
              {prediction.predicted_eta || train.eta}
            </h4>

            <p>
              Predicted arrival at Howrah Junction
            </p>

            <div className="prediction-delay">
              +{prediction.predicted_additional_delay.toFixed(2)}
              {" "}min additional delay
            </div>

            <div className="prediction-delay">
              Total predicted delay:{" "}
              {prediction.predicted_total_delay.toFixed(2)}
              {" "}min
            </div>
          </>
        )}

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
          <span>Current delay</span>
          <strong>
            {prediction !== null
              ? `${prediction.live_data.current_delay} min`
              : "—"}
          </strong>
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