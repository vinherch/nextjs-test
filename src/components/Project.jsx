import React from "react";
import Link from "next/link";

import styles from "../styles/Project.module.css";

const Project = ({ id, content, title }) => {
  return (
    <Link className={styles.container} href="/projects/[id]" as={`/projects/${id}`}>
      <p className={styles.id}>{id} </p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </Link>
  );
};

export default Project;
