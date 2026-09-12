import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error, r2_score


# Load dataset
data = pd.read_csv("railway_data.csv")


# Separate features and target
X = data.drop("additional_delay", axis=1)
y = data["additional_delay"]


# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)


# Create Random Forest model
model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)


# Train model
model.fit(X_train, y_train)


# Make predictions
predictions = model.predict(X_test)


# Display predictions
print("Actual:", list(y_test))
print("Predicted:", list(predictions))


# Calculate MAE

mae = mean_absolute_error(y_test, predictions)

print("MAE:", round(mae, 3))

# Calculate R² Score

r2 = r2_score(y_test, predictions)

print("R² Score:", round(r2, 3))