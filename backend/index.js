const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const port = 3001;

const app = express();
app.use(cors());

app.get("/getData", (req, res) => {
	const db = new Database("public/vocab.db");
	let jsonOutput = {};

	const lookupsData = db
		// const lookupsData = db.prepare("SELECT * FROM LOOKUPS").all();

		.prepare(
			"SELECT book_key, word_key, usage FROM LOOKUPS WHERE id BETWEEN 1 AND 5"
		)
		.all();
	jsonOutput["LOOKUPS"] = lookupsData;

	res.json(jsonOutput);
});

app.listen(port, () => {
	console.log("Server running on http://localhost:3001");
});
