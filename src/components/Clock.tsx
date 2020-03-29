import React, { FunctionComponent, useState, useEffect } from "react";

const Clock: FunctionComponent = () => {
	const [time, setTime] = useState(new Date());
	const tick = () => setTime(new Date());

	useEffect(() => {
		setInterval(() => {
			tick();
		}, 1000);
	});

	return (
		<p className="text-primaryText">
			The current time is {time.toLocaleTimeString()}
		</p>
	);
};

export default Clock;
