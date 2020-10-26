import React from "react";

const Planet = ({ name, diameter, gravity, climate, population }) => {
	return (
		<div className="planet">
			<h3>
				<span>Name</span>
				{name}
			</h3>
			<div className="infos">
				<p>
					<span>Diameter</span> {diameter}
				</p>
				<p>
					<span>Gravity</span>
					{gravity}
				</p>
				<p>
					<span>Climate</span>
					{climate}
				</p>
				<p>
					<span>Population</span>
					{population}
				</p>
			</div>
		</div>
	);
};

export default Planet;
