import React from "react";
import PropTypes from "prop-types";

type QuestionProps = {
	content: string;
};

const Question = (props: QuestionProps) => {
	return <h2>{props.content}</h2>;
};

Question.propTypes = {
	content: PropTypes.string.isRequired
};

export default Question;
