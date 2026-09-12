import { useEffect, useState } from "react";

function addMinutesToTime(time, minutes) {
  const [hours, mins] = time.split(":").map(Number);

  const date = new Date();
  date.setHours(hours, mins, 0, 0);
  date.setMinutes(date.getMinutes() + minutes);

  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

function ForecastCard({ train }) {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPrediction() {
      setLoading(true);
      setError(null);
      setPrediction(null);

      try {
        const response = await fetch(
          "https://railpredict-ml.onrender.com/predict",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(train.mlInput),
          }
        );

        if (!response.ok) {
          throw new Error("Prediction request failed");
        }

        const data = await response.json();

        setPrediction(data.predicted_additional_delay);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch ML prediction");
      } finally {
        setLoading(false);
      }
    }

    getPrediction();
  }, [train]);

  const predictedEta =
    prediction !== null
      ? addMinutesToTime(train.eta, prediction)
      : null;

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
            <h4>{predictedEta}</h4>

            <p>
              Predicted arrival at Howrah Junction
            </p>

            <div className="prediction-delay">
              +{prediction.toFixed(2)} min additional delay
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