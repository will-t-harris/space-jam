import React, { FunctionComponent, MouseEvent } from "react";

type ButtonProps = {
  text: string;
};

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  alert(event.currentTarget.tagName);
};

const Button: FunctionComponent<ButtonProps> = ({ text }) => {
  return (
    <button
      className="border border-lightOrange rounded px-4 py-2 my-10 hover:bg-lightOrange"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
