//TODO change import method
const express = require("express");
const Database = require("better-sqlite3");
const cors = require("cors");
const port = 3001;
const databaseModule = require("databaseModules.js");
const app = express();
app.use(cors());

// app.get("/getData", (req, res) => {
// 	const kindleVocabFile = new Database("public/vocab.kindleVocabFile");
// 	let jsonOutput = {};

// 	const wordsData = kindleVocabFile
// 		// const wordsData = kindleVocabFile.prepare("SELECT * FROM LOOKUPS").all();

// 		.prepare(
// 			"SELECT book_key, word_key, usage FROM LOOKUPS WHERE id BETWEEN 1 AND 5"
// 		)
// 		.all();
// 	jsonOutput["LOOKUPS"] = wordsData;

// 	res.json(jsonOutput);
// });

// app.listen(port, () => {
// 	console.log("Server running on http://localhost:3001");
// });

// fetch("http://localhost:3001/getData")
// 	.then((response) => {
// 		if (!response.ok) {
// 			throw new Error("Network response was not ok");
// 		}
// 		return response.json();
// 	})
// 	.then((data) => {
// 		setWords(data);
// 	})
// 	.catch((error) => {
// 		console.error("Fetch error:", error);
// 	});
