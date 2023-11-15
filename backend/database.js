const Database = require("better-sqlite3");
// const testDatabaseFile = require("./tests/testFile.db");

const isDatabaseFile = (file) => {
	return file.endsWith(".db");
};

const convertToJson = (file) => {
	application.get("/getData");
};

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
module.exports = { isDatabaseFile, convertToJson };
