import React from "react";
import Link from "next/link";

import styles from "../styles/Navigation.module.css";

function Navigation({ elements }) {
  return (
    <nav className={styles.navigation}>
      <ul>
        {elements.map((e) => (
          <li key={e.name}>
            <Link href={e.path}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
