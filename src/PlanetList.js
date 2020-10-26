import React, { useEffect, useState } from "react";
import Planet from "./Planet";
import Pagination from "./Pagination";
import { Link } from "@reach/router";

const PeopleList = ({ page: paged }) => {
	const [planets, setPlanets] = useState([]);
	const [next, setNext] = useState("");
	const [previous, setPrevious] = useState("");
	const [page, setPage] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (paged != undefined) {
			setPage(paged);
		} else {
			setPage(1);
		}
	}, []);

	useEffect(() => {
		if (page === 0) return;

		fetch(`http://localhost:4321/api/v1/planets/${page}`)
			.then(res => res.json())
			.then(res => {
				if (res.status == "none") {
					setError(true);
				} else {
					setLoading(false);
					setPlanets(res.planets);
					setNext(res.next);
					setPrevious(res.previous);
					setError(false);
				}
			});
	}, [page]);

	function changePage(page) {
		setLoading(true);
		setPage(page);
	}

	if (error) {
		return (
			<div>
				<h1>List of planets</h1>
				<div className="list">
					<h1>
						Loading error... <Link to="/planets/1">Back to list</Link>
					</h1>
				</div>
			</div>
		);
	}

	if (loading) {
		return (
			<div>
				<h1>List of planets</h1>
				<div className="list">
					<h1>Loading...</h1>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h1>List of planets</h1>
			<div className="list">
				{planets.length === 0 ? (
					<h1>No planet found</h1>
				) : (
					planets.map(planet => (
						<Planet
							key={planet.name.replace(/-\s/g, "")}
							name={planet.name}
							diameter={planet.diameter}
							gravity={planet.gravity}
							climate={planet.climate}
							population={planet.population}
						/>
					))
				)}
			</div>
			<Pagination
				onClick={changePage}
				type="planets"
				next={next}
				previous={previous}
			/>
		</div>
	);
};

export default PeopleList;
