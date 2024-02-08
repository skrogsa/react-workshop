import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";

function NoContent() {
	return (
		<div>
			<NavBar />
			<h2>This site have no content</h2>
			<p>Try one of the other pages</p>
			{/* Add more content as needed */}
		</div>
	);
}

export default NoContent;
