import React from "react";
import {
  HeroContainer,
  HeroWrapper,
  HeroContent,
  HeroImage,
  Image,
  ButtonContainer,
  Button,
} from "./HeroElements";

import SocialIcons from "../Social/SocialIcons";


function Hero() {
  return (
    <HeroContainer>
      <div className="container">
        <HeroWrapper>
          <HeroContent>
            <h1>Hi, I'm Emma </h1>
            <h4>Software Engineer</h4>
            <p>
              Crafting innovative digital solutions with code and creativity
            </p>
            <ButtonContainer>
              <Button
                href="https://www.linkedin.com/in/emma-maikuri-997ba631/"
                target="_blank"
                rel="noopener noreferrer">
                ⚡
              </Button>
            </ButtonContainer>
          </HeroContent>
          <HeroImage>
            <Image src="/programmer.png" />
          </HeroImage>
        </HeroWrapper>
        <SocialIcons />
      </div>
    </HeroContainer>
  );
}

export default Hero;
