import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.section`
  background-color: #111;
  color: #fff;
  padding-top: 10rem; /* Adjusted padding for mobile devices */
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem; /* Adjusted padding for mobile devices */
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.2rem; /* Adjusted font size for mobile devices */
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 800;
    margin-bottom: 0.2rem;
  }

  h4 {
    font-size: 1.3rem; /* Adjusted font size for mobile devices */
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 1rem; /* Adjusted font size for mobile devices */
    color: #f6f6f6;
    opacity: 0.85;
    margin-bottom: 2rem;
    margin-right: 1rem;
  }

  @media screen and (min-width: 992px) {
    align-items: flex-start;
    text-align: left;
    margin-left: 10rem;
    margin-right: 5rem;
  }
`;

export const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  @media screen and (min-width: 992px) {
    margin-top: 0;
    margin-right: 5rem;
  }
`;

export const Image = styled.img`
  max-width: 100%; /* Adjusted image width to be responsive */
  height: auto;
  border-radius: 10px; /* Added border radius for a rounded effect */
  filter: blur(1px); /* Added a slight blur effect */
`;

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media screen and (min-width: 992px) {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

export const Button = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 50%;
  background-color: #111;
  color: white;
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  animation: ${bounceAnimation} 1.5s infinite alternate;

  &:hover {
    background-color: #555;
    animation-play-state: paused;
  }

  @media screen and (min-width: 992x) {
    padding: 0.5rem 1.5rem;
  }
`;
