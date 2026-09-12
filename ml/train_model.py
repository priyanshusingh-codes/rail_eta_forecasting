import pandas as pd
import joblib

from sklearn.ensemble import RandomForestRegressor

# Load dataset

data = pd.read_csv("railway_data.csv")

# Separate features and target

X = data.drop("additional_delay", axis=1)
y = data["additional_delay"]

# Create final Random Forest model

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

# Train model on entire dataset

model.fit(X, y)

# Save trained model

joblib.dump(model, "railpredict_model.pkl")

print("Model trained successfully.")
print("Model saved as: railpredict_model.pkl")