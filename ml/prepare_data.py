import pandas as pd
from sklearn.model_selection import train_test_split

# Load dataset
data = pd.read_csv("railway_data.csv")

# Inspect dataset
print(data.head())
print(data.shape)
print(data.columns)
print(data.info())

# Check missing values
print(data.isnull().sum())

# Separate features and target
X = data.drop("additional_delay", axis=1)
y = data["additional_delay"]

print("X shape:", X.shape)
print("y shape:", y.shape)

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("Training features:", X_train.shape)
print("Testing features:", X_test.shape)
print("Training targets:", y_train.shape)
print("Testing targets:", y_test.shape)