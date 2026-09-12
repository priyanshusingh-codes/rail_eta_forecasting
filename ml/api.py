from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib

# Create FastAPI application

app = FastAPI(
    title="RailPredict ML API",
    description="API for railway delay prediction",
    version="1.0"
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


# Prediction endpoint

@app.post("/predict")
def predict(request: PredictionRequest):

    input_data = pd.DataFrame([{
        "current_delay": request.current_delay,
        "distance_remaining": request.distance_remaining,
        "stops_remaining": request.stops_remaining,
        "congestion": request.congestion,
        "weather": request.weather,
        "hour": request.hour,
        "day_of_week": request.day_of_week
    }])

    prediction = model.predict(input_data)

    return {
        "predicted_additional_delay": round(float(prediction[0]), 2)
    }

if __name__ == "__main__":
    import os
    import uvicorn

    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("api:app", host="0.0.0.0", port=port)