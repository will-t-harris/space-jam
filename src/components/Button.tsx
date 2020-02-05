import React, { FunctionComponent, MouseEvent } from "react";

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  alert(event.currentTarget.tagName);
};

const Button: FunctionComponent = ({ children }) => {
  return (
    <button
      className="border border-lightOrange rounded px-4 py-2 my-10 hover:bg-lightOrange"
      onClick={handleClick}
    >
      Test Button {children}
    </button>
  );
};

export default Button;
