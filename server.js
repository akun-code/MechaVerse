const express = require("express");
const app = express();
app.use(express.json());

// Temporary data (we'll move to a DB later)
const cars = [
  { id: 1, name: "Toyota Supra", year: 1998, engine: "2JZ-GTE" },
  { id: 2, name: "Nissan GT-R", year: 2017, engine: "VR38DETT" },
];

const engines = [
  { id: 1, name: "2JZ-GTE", type: "Inline-6", used_in: ["Toyota Supra"] },
  { id: 2, name: "VR38DETT", type: "V6 Twin Turbo", used_in: ["Nissan GT-R"] },
];

// Routes
app.get("/api/cars", (req, res) => res.json(cars));
app.get("/api/engines", (req, res) => res.json(engines));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`MechaVerse backend running on port ${PORT}`));
