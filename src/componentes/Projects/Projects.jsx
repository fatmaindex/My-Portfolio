import React from "react";
import "./Projects.scss";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Data } from "./../../helper/Data";

function Projects() {
  return (
    <section className="Projects container section" id="projectsSec">
      <h1 className="ProjectsTitle">Projects</h1>
      <div className="mainProjects">
        {Data.map((dataItem, key) => {
          return (
            <ProjectCard
              proImg={dataItem.proImg}
              proName={dataItem.proName}
              proDetail={dataItem.proDetail}
              proSite={dataItem.proSite}
              proCode={dataItem.proCode}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
