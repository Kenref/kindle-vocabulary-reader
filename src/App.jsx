import React, { useEffect, useState } from "react";

function App() {
	const [words, setWords] = useState(null);

	fetch("http://localhost:3001/getData")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return response.json();
		})
		.then((data) => {
			setWords(data);
		})
		.catch((error) => {
			console.error("Fetch error:", error);
		});

	return (
		<div>
			<h1>Data from SQLite Database</h1>

			<pre>{JSON.stringify(words, null, 4)}</pre>
			{/* <p>{words}</p> */}
		</div>
	);
}

export default App;
