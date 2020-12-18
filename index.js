const express = require("express");
const path = require("path");
const players = require("./Players");

const app = express();

app.get("/api/players", (req, res) => res.json(players));

app.use(express.static(path.join(__dirname, "public")));

// Move to seperate config file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
