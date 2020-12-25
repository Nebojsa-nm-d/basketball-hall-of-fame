const express = require("express"),
	path = require("path"),
	exphbs = require("express-handlebars"),
	players = require("./Players");

const app = express();

// Handlebars Middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Static files Middelware
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
	res.render("index", {
		title: "Basketball Hall of Fame",
		players,
	})
);

// Players API routes
app.use("/api/players", require("./routes/api/players"));

// Move to seperate config file
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
