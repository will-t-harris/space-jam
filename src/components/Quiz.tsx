import React, { ChangeEvent } from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";

type QuizProps = {
	answer: string;
	questionId: number;
	questionTotal: number;
	question: string;
	answerOptions: { type: string; content: string }[];
	renderAnswerOptions: () => {};
	onAnswerSelected: (event: ChangeEvent) => void;
};

const Quiz = (props: QuizProps) => {
	const renderAnswerOptions = (key: any) => (
		<AnswerOption
			key={key.content}
			answerContent={key.content}
			answerType={key.type}
			answer={props.answer}
			questionId={props.questionId}
			onAnswerSelected={props.onAnswerSelected}
		/>
	);
	return (
		<div className="">
			<QuestionCount counter={props.questionId} total={props.questionTotal} />
			<Question content={props.question} />
			<ul>{props.answerOptions.map(renderAnswerOptions)}</ul>
		</div>
	);
};

export default Quiz;
