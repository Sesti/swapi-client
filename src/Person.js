import React from "react";

const Person = ({
	name,
	gender,
	starships,
	hairColor,
	eyeColor,
	skinColor,
}) => {
	return (
		<div className="person">
			<h3>
				<span>Name</span>
				{name}
			</h3>
			<div className="infos">
				<p>
					<span>Gender</span> {gender}
				</p>
				<p>
					<span>Hair</span>
					{hairColor}
				</p>
				<p>
					<span>Eye</span>
					{eyeColor}
				</p>
				<p>
					<span>Skin</span>
					{skinColor}
				</p>
			</div>
			<br />
			<span>Starships</span>
			<ul>
				{starships.length === 0 ? (
					<li>No starships</li>
				) : (
					starships.map(starship => (
						<li key={starship.replace(/\D/gi, "")}>{starship}</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Person;
