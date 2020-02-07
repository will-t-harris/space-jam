import React from "react";
import Card from "./components/Card";
import Clock from "./components/Clock";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <body className="bg-primaryBackground">
      <div className="text-center">
        <Header />
        <Switch>
          <Route path="/clock">
            <Card title="Clock Title" paragraph="Clock Paragraph" />
          </Route>
          <Route path="/home">
            <Card title="Card Title" paragraph="Card Paragraph" />
          </Route>
        </Switch>
        <Button text="test button props" />
        <Footer />
      </div>
    </body>
  );
};

export default App;
