import React from "react";
import { render } from "react-dom";
import { Link, Router } from "@reach/router";
import PeopleList from "./PeopleList";
import PlanetList from "./PlanetList";
import StarshipList from "./StarshipList";
import Search from "./Search";

const App = () => {
	return (
		<React.StrictMode>
			<header id="navigation">
				<Link to="/">Search for someone</Link>
				<Link to="/people">Peoples</Link>
				<Link to="/planets">Planets</Link>
				<Link to="/starships">Starships</Link>
			</header>
			<div className="container">
				<Router>
					<PeopleList path="/people" />
					<PeopleList path="/people/:page" />
					<PlanetList path="/planets" />
					<PlanetList path="/planets/:page" />
					<StarshipList path="/starships" />
					<StarshipList path="/starships/:page" />
					<Search path="/" />
				</Router>
			</div>
		</React.StrictMode>
	);
};

render(<App />, document.querySelector("#root"));
