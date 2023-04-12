import styles from "../styles/Card.module.css";
import Link from "next/link";

import { Roboto } from "next/font/google";

const fntRobotoLight = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const fntRobotoRegular = Roboto({
  subsets: ["latin"],
  weight: "400",
});

function Card({ id, title, content }) {
  return (
    <Link href="/cards/[id]" as={`/cards/${id}`}>
      <div className={styles.container}>
        <p className={styles.id}>{id}</p>
        <div className={fntRobotoRegular.className}>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
        </div>
        <div className={fntRobotoLight.className}>
          <div className={styles.content}>{content}</div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
