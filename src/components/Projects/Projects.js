import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectsData from "../../data/ProjectsData";

import {
  ProjectsContainer,
  ProjectsHeading,
  ProjectList,
} from "./ProjectCard/ProjectCardElements";
import WaveSVG from "../SVG/WaveSVG";
import SocialIcons from "../Social/SocialIcons";


const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <div className="container">
          <ProjectsHeading>My Recent Works</ProjectsHeading>
          <ProjectList>
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </ProjectList>
        </div>
      </ProjectsContainer>
     
    </>
  );
};

export default Projects;
