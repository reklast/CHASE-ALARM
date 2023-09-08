import React, { ReactElement, useContext, useState } from "react";

import { AlarmContext } from "../context/ContextAlarm";


function Clock(): ReactElement {
  const { realTime, setRealTime } = useContext(AlarmContext);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRealTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h1>
        {realTime.toLocaleTimeString("en", {
          hour: "2-digit",
          hour12: false,
          minute: "2-digit",
          second: "2-digit",
        })}
      </h1>
    </div>
  );
}
export default Clock;
