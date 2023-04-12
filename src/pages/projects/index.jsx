import React from "react";

import Project from "@/components/Project";
import Meta from "@/components/Meta";
import server from "../../config/serverHelper";

function Projects({ projects }) {
  return (
    <>
      <Meta title="Next.js Test App - Projects" />
      <main>
        <h1>Projects</h1>
        <div className="project-container">
          {projects.map((p) => (
            <Project key={p.id} id={p.id} title={p.title} content={p.content} />
          ))}
        </div>
      </main>
    </>
  );
}

//getStaticProps -> page will prerendered at build time - used for data fetching once at build time
export const getStaticProps = async () => {
  const res = await fetch(`${server()}/api/projects`);
  const projects = res.status === 200 ? await res.json() : null;
  if (!projects) return;

  return {
    props: {
      projects,
    },
  };
};

export default Projects;
