const express = require("express");
const path = require("path");
const players = require("./Players");

const app = express();

// Get all players
app.get("/api/players", (req, res) => res.json(players));

// Get single players
app.get("/api/players/:id", (req, res) => {
	const found = players.some((player) => player.id === req.params.id);

	if (found) {
		res.json(players.filter((player) => player.id === req.params.id));
	} else {
		res.status(400).json({ message: "This player is not in Hall of Fame" });
	}
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Move to seperate config file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
