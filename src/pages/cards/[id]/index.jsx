import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { Roboto } from "next/font/google";

import server from "@/config/serverHelper";
import styles from "../../../styles/CardDetails.module.css";

const fntRobotoLight = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const fntRobotoRegular = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const CardDetail = ({ card }) => {
  // Option to get params from url
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div className={styles.container}>
      <h2>Card Details - using getServerSideProps (fetching at request time)</h2>
      <br />
      <br />
      <h4>Card Details from:</h4>
      <br />
      <div className={fntRobotoLight.className}>
        <p>Card ID: {card.id}</p>
        <p>Card Title: {card.title}</p>
        <p>Card Content: {card.content}</p>
      </div>
      <Link href="/" className={styles.link}>
        Go Back
      </Link>
    </div>
  );
};

//getServerSideProps -> page will prerendered at runtime - used for data fetching at each request
export const getServerSideProps = async (context) => {
  //params from url -> in context
  const res = await fetch(`${server()}/api/cards/${context.params.id}`);
  const card = res.status === 200 ? await res.json() : null;

  return {
    props: {
      card,
    },
  };
};

export default CardDetail;
