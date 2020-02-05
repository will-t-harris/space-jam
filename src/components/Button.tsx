import React, { FunctionComponent, MouseEvent } from "react";

const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  alert(event.currentTarget.tagName);
};

const Button: FunctionComponent = ({ children }) => {
  return <button onClick={handleClick}>Test Button {children}</button>;
};

export default Button;
