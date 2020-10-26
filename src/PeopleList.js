import React, { useEffect, useState } from "react";
import Person from "./Person";

const PeopleList = () => {
	const [people, setPeople] = useState([]);
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(0);
		setPeople([]);

		fetch("http://localhost:4321/api/v1/people")
			.then(res => res.json())
			.then(res => {
				setCount(res.count);
				setPeople(res.persons);
				console.log(res.persons);
			});
	}, []);

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
		</div>
	);
};

export default PeopleList;
