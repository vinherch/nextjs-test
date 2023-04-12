import React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";

import server from "@/config/serverHelper";
import Meta from "@/components/Meta";
import styles from "../../../styles/ProjectDetails.module.css";

const fntRobotoLight = Roboto({
  subsets: ["latin"],
  weight: "300",
});

const fntRobotoRegular = Roboto({
  subsets: ["latin"],
  weight: "400",
});

const ProjectDetail = ({ project }) => {
  return (
    <>
      <Meta title="Next Test App - Project Details" />
      <div className={styles.container}>
        <h2>Project Details - using getStaticProps (fetching at build time) & getStaticPaths</h2>
        <br />
        <br />
        <h4>Project Details</h4>
        <div className={fntRobotoLight.className}>
          <p>Project ID: {project.id} </p>
          <p>Project Title: {project.title}</p>
          <p>Project Title: {project.content}</p>
        </div>

        <Link href="/projects" className={styles.link}>
          Go Back
        </Link>
      </div>
    </>
  );
};

export default ProjectDetail;

//getStaticProps -> page will prerendered at build time - used for data fetching once at build time
//params from url -> in context
export const getStaticProps = async (context) => {
  const res = await fetch(`${server()}/api/projects/${context.params.id}`);
  const project = res.status === 200 ? await res.json() : null;

  return {
    props: {
      project,
    },
  };
};

//generates static paths for all fetched data
export const getStaticPaths = async () => {
  const res = await fetch(`${server()}/api/projects`);
  const projects = res.status === 200 ? await res.json() : null;
  if (!projects) return;

  const paths = projects
    .map((p) => p.id)
    .map((id) => ({
      params: {
        id: id.toString(),
      },
    }));

  /* The returned value must be an array of objects. 
  Each object must have the params key and contain an object with the id key (because of using [id] in the file name (in this case. can be anything else))
  Property false - 404 for non existing routes */
  return {
    paths,
    fallback: false,
  };
};
