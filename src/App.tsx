import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import Clock from "./components/Clock";
import MyEditor from "./components/Editor";

const App = () => {
  return (
    <body className="bg-primaryBackground text-center">
      <Header />
      <Switch>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/">
          <Card title="Card Title" paragraph="Card Paragraph" />
          <MyEditor />
        </Route>
      </Switch>
      <Footer />
    </body>
  );
};

export default App;
