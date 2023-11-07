import React, { useEffect, useState } from "react";

function App() {
	const [words, setWords] = useState(null);

	fetch("http://localhost:3001/getData").then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		console.log(response);
		setWords(response);
	});

	return (
		<div>
			<h1>Data from SQLite Database</h1>
			<pre>{words}</pre>
			{/* <pre>{JSON.stringify(words, null, 4)}</pre> */}
			{/* <p>{words}</p> */}
		</div>
	);
}

export default App;
//TODO move json into backend
