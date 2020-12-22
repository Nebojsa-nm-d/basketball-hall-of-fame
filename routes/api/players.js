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

// Update single players
router.put("/:id", (req, res) => {
	const found = players.some((player) => player.id === req.params.id);

	if (found) {
		const updatePlayer = req.body;
		players.forEach((player) => {
			if (player.id === req.params.id) {
				player.team = updatePlayer.team ? updatePlayer.team : player.team;
				player.points = updatePlayer.points ? updatePlayer.points : player.points;
				player.assists = updatePlayer.assists ? updatePlayer.assists : player.assists;
				player.rebounds = updatePlayer.rebounds ? updatePlayer.rebounds : player.rebounds;
				player.steals = updatePlayer.steals ? updatePlayer.steals : player.steals;
				player.blocks = updatePlayer.blocks ? updatePlayer.blocks : player.blocks;
				player.nbaTitles = updatePlayer.nbaTitles ? updatePlayer.nbaTitles : player.nbaTitles;
				player.mvpTitles = updatePlayer.mvpTitles ? updatePlayer.mvpTitles : player.mvpTitles;

				res.json({ message: "This player data has been updated", player });
			}
		});
	} else {
		res.status(400).json({ message: "This player is not in Hall of Fame" });
	}
});

module.exports = router;
