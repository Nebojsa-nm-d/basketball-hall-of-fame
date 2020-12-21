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

module.exports = router;
