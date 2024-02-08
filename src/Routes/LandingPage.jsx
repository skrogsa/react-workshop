// LandingPage.jsx

import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import Button from "../components/NavBar/Button.jsx";
import Footer from "../components/NavBar/Footer.jsx";

function LandingPage() {
	return (
		<div>
			<NavBar />
			<h1>Welcome to the Landing Page!</h1>
			<Button />
			<Button />
			<Footer />
		</div>
	);
}

export default LandingPage;
