import React from "react";

type QuestionProps = {
	content: string;
};

const Question = (props: QuestionProps) => {
	return <h2>{props.content}</h2>;
};

export default Question;
