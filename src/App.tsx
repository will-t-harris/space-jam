import React from "react";
import Card from "./components/Card";
import Clock from "./components/Clock";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="text-center">
      <Header />
      <body className="bg-primaryBackground">
        <Switch>
          <Route path="/clock">
            <Clock />
          </Route>
          <Route path="/home">
            <Card title="Card Title" paragraph="Card Paragraph" />
          </Route>
        </Switch>
        <Button text="test button props" />
        <Footer />
      </body>
    </div>
  );
};

export default App;
