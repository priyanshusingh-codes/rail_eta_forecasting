# Rail ETA Forecasting

Rail ETA Forecasting is a railway delay prediction project developed for SIH 2026.

The project uses machine learning to predict additional train delay and estimate the expected arrival time. The frontend displays the prediction, while a FastAPI backend handles the ML model.

## Features

- Train-wise ETA display
- Delay prediction using Random Forest
- Predicted additional delay
- Predicted total delay
- Predicted arrival time
- Prediction confidence
- Simulated live railway data
- FastAPI ML API
- React frontend

## Project Structure

```text
rail-eta-forecasting/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── ml/
│   ├── api.py
│   ├── live_data.py
│   ├── railway_data.csv
│   ├── train_model.py
│   ├── random_forest.py
│   ├── evaluate_model.py
│   ├── compare_models.py
│   ├── prepare_data.py
│   ├── dataset_check.py
│   ├── railpredict_model.pkl
│   └── requirements.txt
│
└── README.md
Machine Learning
The model uses the following inputs:
- Current delay
- Distance remaining
- Stops remaining
- Congestion
- Weather
- Hour
- Day of week
The current model is a Random Forest Regressor.
Model Results
MAE: 0.478 minutes
R² Score: 0.956
A Linear Regression model was also tested for comparison, but the Random Forest model performed better on the current dataset.
API
The backend is built with FastAPI.
Start the API
cd ml
pip install -r requirements.txt
uvicorn api:app --reload
The API runs at:
http://127.0.0.1:8000
Swagger documentation:
http://127.0.0.1:8000/docs
Health Check
GET /health
Live Prediction
GET /predict-live/{train_number}
Example:
/predict-live/12951
The response contains the current train data, predicted additional delay, total predicted delay, and predicted ETA.
Frontend
The frontend is built with React and Vite.
Start the frontend:
cd frontend
npm install
npm run dev
Current Trains
The prototype currently contains sample data for:
- 12301 — Rajdhani Express
- 12860 — Gitanjali Express
- 12024 — Jan Shatabdi
- 12951 — Mumbai Rajdhani
Tech Stack
Frontend
- React
- Vite
- JavaScript
- CSS
Backend
- Python
- FastAPI
- Uvicorn
Machine Learning
- Python
- pandas
- scikit-learn
- Random Forest
- joblib

Running Locally
Start the ML API:
cd ~/SIH/rail-eta-forecasting/ml
source ../../railpredict-ml/venv/bin/activate
uvicorn api:app --reload
In another terminal, start the frontend:
cd ~/SIH/rail-eta-forecasting/frontend
npm run dev
Then open the local URL provided by Vite.
Current Status
This is a working prototype developed for SIH 2026.
The current railway data is simulated. A real-time railway data source can be integrated when an appropriate API or data source is available.

Available next action: :chatgpt-content-reference{index="0"}
