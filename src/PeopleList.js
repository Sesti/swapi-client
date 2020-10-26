import React, { useEffect, useState } from "react";
import Person from "./Person";
import Pagination from "./Pagination";
import { Link } from "@reach/router";

const PeopleList = ({ page: paged }) => {
	const [people, setPeople] = useState([]);
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

		fetch(`http://localhost:4321/api/v1/people/${page}`)
			.then(res => res.json())
			.then(res => {
				if (res.status == "none") {
					setError(true);
				} else {
					setLoading(false);
					setPeople(res.persons);
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
				<h1>List of people</h1>
				<div className="list">
					<h1>
						Loading error... <Link to="/people/3">Back to list</Link>
					</h1>
				</div>
			</div>
		);
	}

	if (loading) {
		return (
			<div>
				<h1>List of people</h1>
				<div className="list">
					<h1>Loading...</h1>
				</div>
			</div>
		);
	}

	return (
		<div>
			<h1>List of people</h1>
			<div className="list">
				{people.length === 0 ? (
					<h1>No people found</h1>
				) : (
					people.map(person => (
						<Person
							key={person.name.replace(/-\s/g, "")}
							name={person.name}
							gender={person.gender}
							starships={person.starships}
							hairColor={person.hairColor}
							skinColor={person.skinColor}
							eyeColor={person.eyeColor}
						/>
					))
				)}
			</div>
			<Pagination onClick={changePage} next={next} previous={previous} />
		</div>
	);
};

export default PeopleList;
