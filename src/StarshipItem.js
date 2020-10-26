import React, { useEffect, useState } from "react";

const Starship = ({ url }) => {
	const [name, setName] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:4321/api/v1/starship/${url.replace(/\D/gi, "")}`)
			.then(res => res.json())
			.then(res => {
				setName(res.name);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Fetching name...</div>;
	}
	return <div>{name}</div>;
};
export default Starship;
