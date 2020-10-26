import React, { useEffect, useState } from "react";
import Starship from "./Starship";
import Pagination from "./Pagination";
import { Link } from "@reach/router";

const StarshipList = ({ page: paged }) => {
	const [starships, setStarships] = useState([]);
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

		fetch(`http://localhost:4321/api/v1/starships/${page}`)
			.then(res => res.json())
			.then(res => {
				if (res.status == "none") {
					setError(true);
				} else {
					setLoading(false);
					setStarships(res.starships);
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
				<h1>List of starships</h1>
				<div className="list">
					<h1>
						Loading error... <Link to="/starships/1">Back to list</Link>
					</h1>
				</div>
			</div>
		);
	}

	if (loading) {
		return (
			<div>
				<h1>List of starships</h1>
				<div className="list">
					<h1>Loading...</h1>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h1>List of starships</h1>
			<div className="list">
				{starships.length === 0 ? (
					<h1>No starship found</h1>
				) : (
					starships.map(starship => (
						<Starship
							key={starship.name.replace(/-\s/g, "")}
							name={starship.name}
							model={starship.model}
							starshipClass={starship.starship_class}
						/>
					))
				)}
			</div>
			<Pagination
				onClick={changePage}
				type="starships"
				next={next}
				previous={previous}
			/>
		</div>
	);
};

export default StarshipList;
