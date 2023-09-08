import { ReactElement } from "react";

import styles from './Footer.module.scss';

function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/reklast?tab=projects"
        target="_blank"
        rel="noreferrer"
      />
    </footer>
  );
}

export default Footer;
