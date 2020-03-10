import React, { useEffect, useState, ChangeEvent } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Clock from "./components/Clock";
import quizQuestions from "./api/quizQuestions";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

interface answersCountObject {
	[key: string]: any;
}

const App = () => {
	let answersCount: answersCountObject = {};
	let answerOptions: { type: string; content: string }[] = [];

	const [state, setState] = useState({
		counter: 0,
		questionId: 1,
		question: "",
		answerOptions,
		answer: "",
		answersCount,
		result: ""
	});

	useEffect(() => {
		const shuffledAnswerOptions = quizQuestions.map(question =>
			shuffleArray(question.answers)
		);

		setState({
			...state,
			question: quizQuestions[0].question,
			answerOptions: shuffledAnswerOptions[0]
		});
	}, []);

	const shuffleArray = (array: any) => {
		let currentIndex = array.length;
		let temporaryValue, randomIndex;

		while (currentIndex > 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	};

	const setUserAnswer = (answer: string) => {
		setState(state => ({
			...state,
			answersCount: {
				...state.answersCount,
				[answer]: (state.answersCount[answer] || 0) + 1
			},
			answer: answer
		}));
	};

	const setNextQuestion = () => {
		const counter = state.counter + 1;
		const questionId = state.questionId + 1;

		setState({
			...state,
			counter: counter,
			questionId: questionId,
			question: quizQuestions[counter].question,
			answerOptions: quizQuestions[counter].answers,
			answer: ""
		});
	};

	const getResults = () => {
		const answersCount = state.answersCount;
		const answersCountKeys = Object.keys(answersCount);
		const answersCountValues = answersCountKeys.map(key => answersCount[key]);
		const maxAnswerCount = Math.max(...answersCountValues); //! This is meant to replace Math.max.apply(null, answersCountValues). Confirm that this works!

		const returnValue = answersCountKeys.filter(
			key => answersCount[key] === maxAnswerCount
		);
		return returnValue;
	};

	const setResults = (result: string[]) => {
		if (result.length === 1) {
			setState({ ...state, result: result[0] });
		} else {
			setState({ ...state, result: "Undetermined" });
		}
	};

	const handleAnswerSelected = (event: ChangeEvent) => {
		const element = event.currentTarget as HTMLInputElement;
		const value = element.value;
		setUserAnswer(value);
		if (state.questionId < quizQuestions.length) {
			setTimeout(() => setNextQuestion(), 300);
		} else {
			setTimeout(() => setResults(getResults()), 300);
		}
	};

	return (
		<body className="bg-primaryBackground text-center">
			<Header />
			<Switch>
				<Route path="/question">
					{state.result ? (
						<Result quizResult={state.result} />
					) : (
						<Quiz
							answer={state.answer}
							answerOptions={state.answerOptions}
							questionId={state.questionId}
							question={state.question}
							questionTotal={quizQuestions.length}
							onAnswerSelected={handleAnswerSelected}
						/>
					)}
				</Route>
				<Route path="/clock">
					<Clock />
				</Route>
				<Route path="/">
					<Card title="Card Title" paragraph="Card Paragraph" />
				</Route>
			</Switch>
			<Footer />
		</body>
	);
};

export default App;
