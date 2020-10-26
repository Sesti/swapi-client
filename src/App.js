import React, { useState } from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";

const App = () => {
	let Peoples = () => <div path="/">peoples</div>;
	let Planets = () => <div path="/planets">planets</div>;
	let Starships = () => <div path="/starships">starships</div>;
	let Someone = () => <div path="/someone">someone</div>;

	return (
		<React.StrictMode>
			<header id="navigation">
				<Link to="/">Peoples</Link>
				<Link to="/planets">Planets</Link>
				<Link to="/starships">Starships</Link>
				<Link to="/someone">Search for someone</Link>
			</header>
			<div className="container">
				<Router>
					<Peoples path="/" />
					<Planets path="/planets" />
					<Starships path="/starships" />
					<Someone path="/someone" />
				</Router>
			</div>
		</React.StrictMode>
	);
};

render(<App />, document.querySelector("#root"));
