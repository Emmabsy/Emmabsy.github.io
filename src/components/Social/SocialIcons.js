import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SocialContainer = styled.div`
  position: ${(props) => (props.fixed ? "fixed" : "absolute")};
  padding: 13px;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: ${(props) => (props.show ? 1 : 0)}; /* Show or hide based on state */
  transition: opacity 0.3s;

  
  @media screen and (max-width: 576px) {
    //bottom: 10px;
    position:relative;
    right: 0;
    left: 0;
    justify-content: center; /* Center the icons horizontally */
    flex-direction: row; /* Display icons horizontally */
    gap: 15px;
  }
    
`;

const SocialIcon = styled.a`
  color: #555;
  font-size: 35px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
 
`;

const SocialIcons = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(true);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // Adjust scroll position as needed
        setShowSocialIcons(true);
        setFixed(true);
      } else {
        setShowSocialIcons(true);
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SocialContainer show={showSocialIcons} fixed={fixed}>
      <SocialIcon
        href="https://www.linkedin.com/in/emma-maikuri-997ba631/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </SocialIcon>
      <SocialIcon
        href="https://github.com/Emmabsy/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </SocialIcon>
      <SocialIcon
        href="https://www.twitter.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </SocialIcon>
    
    </SocialContainer>
  );
};

export default SocialIcons;
