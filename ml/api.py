from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib
from live_data import get_live_train_data
from datetime import datetime, timedelta


# Create FastAPI application

app = FastAPI(
    title="RailPredict ML API",
    description="API for railway delay prediction",
    version="1.4"
)


# Allow frontend to communicate with API

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Load trained model

model = joblib.load("railpredict_model.pkl")


# Request data structure

class PredictionRequest(BaseModel):
    current_delay: float
    distance_remaining: float
    stops_remaining: int
    congestion: int
    weather: int
    hour: int
    day_of_week: int
    eta: str


# Home endpoint

@app.get("/")
def home():
    return {
        "message": "RailPredict ML API is running"
    }


# Health check

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "model": "loaded"
    }


# Standard prediction endpoint

@app.post("/predict")
def predict(request: PredictionRequest):

    # Prepare ML input

    input_data = pd.DataFrame([{
        "current_delay": request.current_delay,
        "distance_remaining": request.distance_remaining,
        "stops_remaining": request.stops_remaining,
        "congestion": request.congestion,
        "weather": request.weather,
        "hour": request.hour,
        "day_of_week": request.day_of_week
    }])

    # Generate prediction

    prediction = model.predict(input_data)

    predicted_additional_delay = round(
        float(prediction[0]),
        2
    )

    # Calculate total predicted delay

    predicted_total_delay = round(
        request.current_delay + predicted_additional_delay,
        2
    )

    # Calculate predicted ETA

    try:
        eta_time = datetime.strptime(
            request.eta,
            "%H:%M"
        )

        predicted_eta_time = eta_time + timedelta(
            minutes=predicted_additional_delay
        )

        predicted_eta = predicted_eta_time.strftime("%H:%M")

    except ValueError:
        predicted_eta = None

    return {
        "current_delay": request.current_delay,
        "predicted_additional_delay": predicted_additional_delay,
        "predicted_total_delay": predicted_total_delay,
        "predicted_eta": predicted_eta
    }


# Live prediction endpoint

@app.get("/predict-live/{train_number}")
def predict_live(train_number: str):

    # Get current train data

    live_data = get_live_train_data(train_number)

    if live_data is None:
        return {
            "error": "Train not found"
        }

    # Prepare ML input

    input_data = pd.DataFrame([{
        "current_delay": live_data["current_delay"],
        "distance_remaining": live_data["distance_remaining"],
        "stops_remaining": live_data["stops_remaining"],
        "congestion": live_data["congestion"],
        "weather": live_data["weather"],
        "hour": live_data["hour"],
        "day_of_week": live_data["day_of_week"]
    }])

    # Generate prediction

    prediction = model.predict(input_data)

    predicted_additional_delay = round(
        float(prediction[0]),
        2
    )

    # Calculate total predicted delay

    predicted_total_delay = round(
        live_data["current_delay"] + predicted_additional_delay,
        2
    )

    # Base ETA for each train

    base_eta = {
        "12301": "14:35",
        "12860": "16:20",
        "12024": "17:05",
        "12951": "19:05"
    }.get(train_number)

    # Calculate predicted ETA

    predicted_eta = None

    if base_eta:
        eta_time = datetime.strptime(
            base_eta,
            "%H:%M"
        )

        predicted_eta_time = eta_time + timedelta(
            minutes=predicted_additional_delay
        )

        predicted_eta = predicted_eta_time.strftime("%H:%M")

    return {
        "train_number": train_number,
        "base_eta": base_eta,
        "live_data": live_data,
        "predicted_additional_delay": predicted_additional_delay,
        "predicted_total_delay": predicted_total_delay,
        "predicted_eta": predicted_eta
    }


# Run application

if __name__ == "__main__":
    import os
    import uvicorn

    port = int(os.environ.get("PORT", 8000))

    uvicorn.run(
        "api:app",
        host="0.0.0.0",
        port=port
    )