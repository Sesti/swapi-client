import React from "react";

const Starship = ({ name, model, starshipClass }) => {
	return (
		<div className="planet">
			<h3>
				<span>Name</span>
				{name}
			</h3>
			<div className="infos">
				<p>
					<span>Model</span> {model}
				</p>
				<p>
					<span>Starship class</span>
					{starshipClass}
				</p>
			</div>
		</div>
	);
};

export default Starship;
