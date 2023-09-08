import React, {
  FormEvent,
  ReactElement,
  SyntheticEvent,
  useContext,
  useState,
} from "react";

import { AlarmContext } from "../context/ContextAlarm";

import styles from "./AlarmForm.module.scss";

function AlarmForm(): ReactElement {
  const { alarmTime, setAlarm } = useContext(AlarmContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Time set to: ${alarmTime}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <p id="text">Set alarm for: </p>

        <input
          type="time"
          id={styles.setTime}
          value={alarmTime}
          onChange={(e) => setAlarm(e.target.value)}
        />

        <input id={styles.button} type="submit" value="SET" />
      </form>
    </div>
  );
}

export default AlarmForm;
