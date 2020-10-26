import React from "react";
import { Link } from "@reach/router";

const Pagination = ({ next, previous, onClick }) => {
	const isValidNext = next != null && next != "";
	const isValidPrev = previous != null && previous != "";

	const NextLink = () => {
		return isValidNext ? (
			<Link
				onClick={changePage}
				data-page={next.replace(/\D/gi, "")}
				to={`/people/${next.replace(/\D/gi, "")}`}
			>
				Next &gt;
			</Link>
		) : (
			<span>Next &gt;</span>
		);
	};

	const PreviousLink = () => {
		return isValidPrev ? (
			<Link
				onClick={changePage}
				data-page={previous.replace(/\D/gi, "")}
				to={`/people/${previous.replace(/\D/gi, "")}`}
			>
				&lt; Previous
			</Link>
		) : (
			<span>&lt; Previous</span>
		);
	};

	function changePage(event) {
		onClick(event.target.dataset.page);
	}

	return (
		<div className="pagination">
			<PreviousLink />
			<NextLink />
		</div>
	);
};

export default Pagination;
