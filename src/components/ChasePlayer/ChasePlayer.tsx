import { ReactElement, useContext } from "react";

import chase from "../../media/chase.mp4";

import { AlarmContext } from "../context/ContextAlarm";

import styles from "./ChasePlayer.module.scss";

function ChasePlayer(): ReactElement {
  const { alarmTime } = useContext(AlarmContext);
  const { realTime } = useContext(AlarmContext);

  const timeConverted = realTime.toLocaleTimeString("en", {
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
  });

  return (
    <div className={styles.playerContainer}>
      {alarmTime && timeConverted >= alarmTime && (
        <video className={styles.player} loop src={chase} autoPlay />
      )}
    </div>
  );
}

export default ChasePlayer;
