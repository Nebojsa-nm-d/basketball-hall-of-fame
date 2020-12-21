const express = require("express");
const router = express.Router();
const players = require("../../Players");

// Get all players
router.get("/", (req, res) => res.json(players));

// Get single players
router.get("/:id", (req, res) => {
	const found = players.some((player) => player.id === req.params.id);

	if (found) {
		res.json(players.filter((player) => player.id === req.params.id));
	} else {
		res.status(400).json({ message: "This player is not in Hall of Fame" });
	}
});

// Creating Player
router.post("/", (req, res) => {
	const newPlayer = {
		id: req.body.id,
		name: req.body.name,
		team: req.body.team,
		points: req.body.points,
		assists: req.body.assists,
		rebounds: req.body.rebounds,
		steals: req.body.steals,
		blocks: req.body.blocks,
		nbaTitles: req.body.nbaTitles,
		mvpTitles: req.body.mvpTitles,
	};

	if (!newPlayer.id || !newPlayer.name) {
		return res.status(400).json({ message: "Please enter a player id and name" });
	}

	players.push(newPlayer);
	res.json(players);
});

module.exports = router;
