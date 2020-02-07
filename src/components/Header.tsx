import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-darkBrown p-6 shadow-lg flex flex-col">
    <h1 className="text-pink flex-auto">
      <span role="img" aria-label="basketball emoji">
        🏀
      </span>{" "}
      <em>space-jam</em>{" "}
      <span role="img" aria-label="basketball emoji">
        🏀
      </span>
    </h1>
    <div className="pt-4 flex flex-col">
      <Link to="/clock">Go Clock</Link>
      <Link to="/">Go Home</Link>
    </div>
  </header>
);

export default Header;
