import React, { ReactElement, useState } from "react";

import Clock from "./components/Clock/Clock";
import AlarmForm from "./components/AlarmForm/AlarmForm";
import ChasePlayer from "./components/ChasePlayer/ChasePlayer";

import ContextAlarm from "./components/context/ContextAlarm";

import styles from "./App.module.scss";

import "./styles/styles.scss";
import Footer from "./components/Footer/Footer";

function App(): ReactElement {
  return (
    <div className={styles.App}>
      <ContextAlarm>
        <div className={styles.upperSection}>
          <h1 className={styles.header}>CHASE ALARM</h1>
          <Clock />
          <AlarmForm />
        </div>
        <div className={styles.bottomSection}>
          <ChasePlayer />
          <Footer />
        </div>
      </ContextAlarm>
    </div>
  );
}

export default App;
