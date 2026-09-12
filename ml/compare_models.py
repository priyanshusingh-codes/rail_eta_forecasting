import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.linear_model import LinearRegression
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

# -------------------------
# Linear Regression
# -------------------------

linear_model = LinearRegression()

linear_model.fit(X_train, y_train)

linear_predictions = linear_model.predict(X_test)

linear_mae = mean_absolute_error(
    y_test,
    linear_predictions
)

linear_r2 = r2_score(
    y_test,
    linear_predictions
)

# -------------------------
# Random Forest
# -------------------------

forest_model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

forest_model.fit(X_train, y_train)

forest_predictions = forest_model.predict(X_test)

forest_mae = mean_absolute_error(
    y_test,
    forest_predictions
)

forest_r2 = r2_score(
    y_test,
    forest_predictions
)

# -------------------------
# Results
# -------------------------

print("\n===== MODEL COMPARISON =====")

print("\nLinear Regression")
print("MAE:", round(linear_mae, 3))
print("R² Score:", round(linear_r2, 3))

print("\nRandom Forest")
print("MAE:", round(forest_mae, 3))
print("R² Score:", round(forest_r2, 3))