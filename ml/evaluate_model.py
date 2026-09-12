import pandas as pd

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score, KFold

# Load dataset

data = pd.read_csv("railway_data.csv")

# Separate features and target

X = data.drop("additional_delay", axis=1)
y = data["additional_delay"]

# Create Random Forest model

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

# Create 5-fold cross-validation

kf = KFold(
    n_splits=5,
    shuffle=True,
    random_state=42
)

# Calculate MAE

mae_scores = -cross_val_score(
    model,
    X,
    y,
    cv=kf,
    scoring="neg_mean_absolute_error"
)

# Calculate R²

r2_scores = cross_val_score(
    model,
    X,
    y,
    cv=kf,
    scoring="r2"
)

# Display results

print("===== CROSS-VALIDATION RESULTS =====")

print("\nMAE scores:")
print(mae_scores)

print("Average MAE:", round(mae_scores.mean(), 3))

print("\nR² scores:")
print(r2_scores)

print("Average R²:", round(r2_scores.mean(), 3))