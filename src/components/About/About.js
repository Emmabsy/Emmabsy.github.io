import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutImage,
  AboutHeading,
  AboutParagraph,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutHeading>About Me</AboutHeading>
      <AboutContent>
        <AboutImage>
          <img src="/prog.png" alt="About Me" />
        </AboutImage>
        <AboutText>
          <AboutParagraph>
            Dedicated software Engineer with a keen eye for design and a passion
            for technology ❤️. Seeking opportunities to apply my skills and
            contribute to the success of web development projects. I enjoy
            writing and also playing football.
          </AboutParagraph>
          <AboutParagraph></AboutParagraph>
          <AboutParagraph>
            What I do:
            <ul>
              <li>⚡⚡Building Web Applications</li>
              <li>⚡⚡Game Programming</li>
              <li>⚡⚡AI & Machine Learning!!!</li>
            </ul>
          </AboutParagraph>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
