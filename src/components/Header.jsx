import React from "react";
import Link from "next/link";

import Navigation from "./Navigation";
import styles from "../styles/Header.module.css";

function Header({ title }) {
  const elements = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>{title}</h1>
      </Link>
      <Navigation elements={elements} />
    </header>
  );
}

export default Header;
