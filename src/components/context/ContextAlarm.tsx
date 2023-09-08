import { createContext, useState } from "react";

export const AlarmContext = createContext<any | string>(undefined);

function ContextAlarm({ children }: any) {
  const [realTime, setRealTime] = useState(new Date());
  const [alarmTime, setAlarm] = useState("");

  return (
    <AlarmContext.Provider
      value={{
        realTime,
        setRealTime,
        alarmTime,
        setAlarm,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
}

export default ContextAlarm;
