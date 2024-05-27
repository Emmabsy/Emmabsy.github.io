import React from "react";
import technologies from "../../data/technologies";
import {
  TechnologiesContainer,
  Title,
  Description,
  TechnologiesRow,
  TechnologiesList,
  TechnologyImage,
  Box,
} from "./TechnologiesElements";


const TechnologiesUsed = () => {
  // Group technologies into arrays of 8
  const technologiesPerRow = 8;
  const rows = [];
  for (let i = 0; i < technologies.length; i += technologiesPerRow) {
    rows.push(technologies.slice(i, i + technologiesPerRow));
  }

  return (
    <>
      <TechnologiesContainer>
        <Title>Technologies</Title>
        <Description>
          Here are some of the technologies I use in my projects:
        </Description>
        {rows.map((row, index) => (
          <Box key={index}>
            <TechnologiesRow>
              <TechnologiesList>
                {row.map((techy) => (
                  <TechnologyImage
                    key={techy.id}
                    src={techy.image}
                    alt={techy.name}
                  />
                ))}
              </TechnologiesList>
            </TechnologiesRow>
          </Box>
        ))}
      </TechnologiesContainer>
    
    </>
  );
};

export default TechnologiesUsed;
