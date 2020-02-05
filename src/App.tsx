import React from "react";
import Card from "./components/Card";
import Clock from "./components/Clock";
import Button from "./components/Button";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="text-center">
      <Header />
      <body className="bg-primaryBackground">
        <Card title="Welcome!" paragraph="To the example card!" />
        <Clock />
        <Button />
      </body>
    </div>
  );
};

export default App;
