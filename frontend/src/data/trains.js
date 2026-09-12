const trains = [
  {
    train: "12301",
    name: "Rajdhani Express",
    route: "Howrah → New Delhi",
    status: "On Time",
    eta: "14:35",
    statusType: "ontime",
    position: 8,
    station: "Liluah",

    mlInput: {
      current_delay: 0,
      distance_remaining: 120,
      stops_remaining: 5,
      congestion: 0,
      weather: 0,
      hour: 14,
      day_of_week: 1,
    },

    forecast: {
      predictedEta: "14:35",
      confidence: 94,
      risk: "Low",
      factors: ["Normal traffic", "Good weather", "On schedule"],
    },
  },

  {
    train: "12860",
    name: "Gitanjali Express",
    route: "Mumbai → Howrah",
    status: "Delayed",
    eta: "16:20",
    statusType: "delayed",
    position: 66.7,
    station: "Chandannagar",

    mlInput: {
      current_delay: 8,
      distance_remaining: 35,
      stops_remaining: 4,
      congestion: 1,
      weather: 0,
      hour: 16,
      day_of_week: 1,
    },

    forecast: {
      predictedEta: "16:38",
      confidence: 87,
      risk: "Medium",
      factors: ["Previous delay", "Moderate traffic", "Weather stable"],
    },
  },

  {
    train: "12024",
    name: "Jan Shatabdi",
    route: "Patna → Howrah",
    status: "On Time",
    eta: "17:05",
    statusType: "ontime",
    position: 25,
    station: "Bally",

    mlInput: {
      current_delay: 0,
      distance_remaining: 80,
      stops_remaining: 3,
      congestion: 0,
      weather: 0,
      hour: 17,
      day_of_week: 1,
    },

    forecast: {
      predictedEta: "17:05",
      confidence: 92,
      risk: "Low",
      factors: ["Normal traffic", "Good weather", "On schedule"],
    },
  },

  {
    train: "12951",
    name: "Mumbai Rajdhani",
    route: "Mumbai → Howrah",
    status: "At Risk",
    statusType: "risk",
    position: 81.7,
    station: "Bandel",

    mlInput: {
      current_delay: 12,
      distance_remaining: 50,
      stops_remaining: 6,
      congestion: 2,
      weather: 1,
      hour: 18,
      day_of_week: 1,
    },

    forecast: {
      predictedEta: "19:05",
      confidence: 78,
      risk: "High",
      factors: ["Congestion ahead", "Previous delay", "Operational risk"],
    },
  },
];

export default trains;