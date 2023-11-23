import sqlite3Lib from "sqlite3";
import { promises as fs } from "fs";

const sqlite3 = sqlite3Lib.verbose();

export const isDatabaseFile = (file) => {
	return file.endsWith(".db");
};

export const connectDB = (path) => {
	let db = new sqlite3.Database(path, (error) => {
		if (error) console.log(error.message);
		console.log("connected to db");
	});
	return db;
};

// export const queryDB = (db) => {
// 	db.serialize(() => {});
// };

// export const closeDB = () => {};

// // Connect to the SQLite database
// let db = new sqlite3.Database(
// 	"/Users/kenneth/Documents/Programming/kindle-vocabulary-reader/backend/tests/vocab.db",
// 	(err) => {
// 		if (err) {
// 			console.error(err.message);
// 		}
// 		console.log("Connected to the SQLite database.");
// 	}
// );

// // Query the database
// db.serialize(() => {
// 	db.all("SELECT * FROM LOOKUPS", [], (err, rows) => {
// 		if (err) {
// 			throw err;
// 		}

// 		// Convert to JSON
// 		const jsonResult = JSON.stringify(rows, null, 4);

// 		// Write JSON to a file
// 		fs.writeFile("vocab.json", jsonResult, "utf8", (err) => {
// 			if (err) {
// 				console.error(err.message);
// 			} else {
// 				console.log("JSON saved to result.json");
// 			}
// 		});
// 	});
// });

// // Close the database connection
// db.close((err) => {
// 	if (err) {
// 		console.error(err.message);
// 	}
// 	console.log("Closed the database connection.");
// });
