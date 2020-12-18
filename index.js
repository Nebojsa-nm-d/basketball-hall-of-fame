const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

// Move to seperate config file
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
