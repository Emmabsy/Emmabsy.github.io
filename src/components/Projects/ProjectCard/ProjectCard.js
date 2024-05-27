import React from "react";
import {
  Card,
  CardImage,
  CardContent,
  ProjectName,
  ProjectDescription,
  ButtonGroup,
  Button,
  Button2,
  TechCardContainer,
  TechCard,
} from "./ProjectCardElements";

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardImage src={project.image} alt={project.projectName} />
      <CardContent>
        <ProjectName>{project.projectName}</ProjectName>
        <ProjectDescription>{project.projectDescription}</ProjectDescription>
        <TechCardContainer>
          {project.technologiesUsed.map((tech, index) => (
            <TechCard key={index}>{tech}</TechCard>
          ))}
        </TechCardContainer>
        
        <ButtonGroup>
         
          <Button
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </Button>
          
          <Button2
            href={project.github}
            target="_blank"
            rel="noopener noreferrer">
            Github
          </Button2>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
