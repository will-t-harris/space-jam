import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Clock from "./components/Clock";
import Question from "./components/Question";

const App = () => {
	return (
		<body className="bg-primaryBackground text-center">
			<Header />
			<Switch>
				<Route path="/question">
					<Question content="What is your favorite food?" />
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
