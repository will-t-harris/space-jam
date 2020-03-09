import React, { ChangeEvent } from "react";

type AnswerOptionProps = {
	answerType: string;
	answerContent: string;
	answer: string;
	questionId: number;
	onAnswerSelected: (event: ChangeEvent) => void;
};

const AnswerOption = (props: AnswerOptionProps) => {
	return (
		<li>
			<input
				type="radio"
				name="radioGroup"
				checked={props.answerType === props.answer}
				id={`${props.questionId}`}
				value={props.answerType}
				onChange={props.onAnswerSelected}
			/>
			<label htmlFor={props.answerType}>{props.answerContent}</label>
		</li>
	);
};

export default AnswerOption;
