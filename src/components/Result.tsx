import React from "react";

type ResultProps = {
	quizResult: string;
};

const Result = (props: ResultProps) => {
	return (
		<div className="">
			You prefer <strong>{props.quizResult}</strong>
		</div>
	);
};

export default Result;
