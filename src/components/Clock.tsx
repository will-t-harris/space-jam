import React, { FunctionComponent, useState, useEffect } from "react";

type ClockState = {
  time: Date;
};

const Clock: FunctionComponent = () => {
  const [time, setTime] = useState(new Date());
  const tick = () => setTime(new Date());

  useEffect(() => {
    setTimeout(() => {
      tick();
    }, 1000);
  }, [time]);

  return (
    <p className="text-primaryText">
      The current time is {time.toLocaleTimeString()}
    </p>
  );
};

export default Clock;
