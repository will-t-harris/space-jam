import React, { FunctionComponent, useState, useEffect } from "react";

type ClockState = {
  time: Date;
};

const Clock: FunctionComponent = () => {
  const [time, setTime] = useState(new Date());
  const tick = () => setTime(new Date());

  useEffect(() => {
    tick();
  }, [time]);
  return <p>The current time is {time.toLocaleTimeString()}</p>;
};

export default Clock;
