import React, { useState } from "react";
import Person from "./Person";

const Search = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);

	async function searchPerson() {
		const data = await fetch(`http://localhost:4321/api/v1/search/${search}`);

		const json = await data.json();
		await setResults(json.persons || []);
	}

	return (
		<div id="search">
			<form
				onSubmit={event => {
					event.preventDefault();
					searchPerson();
				}}
			>
				<input
					onChange={event => setSearch(event.target.value)}
					type="text"
					name="search"
				/>
				<button type="submit">Submit</button>
			</form>
			<div className="list">
				{results.length === 0 ? (
					<h1>No people found</h1>
				) : (
					results.map(person => (
						<Person
							key={person.name.replace(/-\s/g, "")}
							name={person.name}
							gender={person.gender}
							hairColor={person.hairColor}
							skinColor={person.skinColor}
							eyeColor={person.eyeColor}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default Search;
