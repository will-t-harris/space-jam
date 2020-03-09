import React from "react";

type QuestionCountProps = {
	counter: number;
	total: number;
};

const QuestionCount = (props: QuestionCountProps) => {
	return (
		<div>
			Question <span>{props.counter}</span> of <span>{props.total}</span>
		</div>
	);
};

export default QuestionCount;
