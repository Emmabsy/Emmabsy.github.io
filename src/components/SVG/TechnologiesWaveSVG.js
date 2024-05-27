// TechnologiesWaveSVG.js
import React from "react";
import styled from "styled-components";

const WaveSVGContainer = styled.div`
  width: 100%;
  margin-top: -1px; /* Adjust the margin to remove the tiny white space */
`;

const WaveSVG = styled.svg`
  display: block;
  width: 100%;
  height: 120px;
`;

const TechnologiesWaveSVG = () => {
  return (
    <WaveSVGContainer>
      <WaveSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#202020"
          fill-opacity="1"
          d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,138.7C672,96,768,64,864,74.7C960,85,1056,139,1152,133.3C1248,128,1344,64,1392,32L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </WaveSVG>
    </WaveSVGContainer>
  );
};

export default TechnologiesWaveSVG;
