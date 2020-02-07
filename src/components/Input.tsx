import React, { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  return (
    <input
      className="mb-4"
      value={input}
      onInput={event => setInput((event.target as HTMLInputElement).value)}
    />
  );
};

export default Input;
