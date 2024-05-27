// WaveSVG.js
import React from "react";
import { WaveSVGContainer } from "./WaveSVGElements"; // Import the styled component

const WaveSVG = () => {
  return (
    <WaveSVGContainer
      height="100%"
      width="100%"
      id="svg"
      viewBox="0 0 1440 320"
      xmlns="http://www.w3.org/2000/svg">
   <path fill="#111" fill-opacity="1" d="M0,256L60,256C120,256,240,256,360,245.3C480,235,600,213,720,224C840,235,960,277,1080,293.3C1200,309,1320,299,1380,293.3L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>



    </WaveSVGContainer>
  );
};

export default WaveSVG;
