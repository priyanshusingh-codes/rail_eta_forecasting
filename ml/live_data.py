from datetime import datetime


# Simulated live railway data
# This represents the type of data that could
# eventually come from a real railway API.

LIVE_TRAINS = {
    "12301": {
        "current_delay": 0,
        "distance_remaining": 120,
        "stops_remaining": 5,
        "congestion": 0,
        "weather": 0,
    },

    "12860": {
        "current_delay": 8,
        "distance_remaining": 35,
        "stops_remaining": 4,
        "congestion": 1,
        "weather": 0,
    },

    "12024": {
        "current_delay": 0,
        "distance_remaining": 80,
        "stops_remaining": 3,
        "congestion": 0,
        "weather": 0,
    },

    "12951": {
        "current_delay": 12,
        "distance_remaining": 50,
        "stops_remaining": 6,
        "congestion": 2,
        "weather": 1,
    },
}


def get_live_train_data(train_number):

    train = LIVE_TRAINS.get(train_number)

    if train is None:
        return None

    now = datetime.now()

    return {
        "train_number": train_number,

        "current_delay": train["current_delay"],

        "distance_remaining": train["distance_remaining"],

        "stops_remaining": train["stops_remaining"],

        "congestion": train["congestion"],

        "weather": train["weather"],

        "hour": now.hour,

        "day_of_week": now.weekday(),

        "source": "simulated_live_data",
    }