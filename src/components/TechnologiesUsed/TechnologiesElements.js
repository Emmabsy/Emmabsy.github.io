import styled from "styled-components";

export const TechnologiesContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 8rem;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  //padding-bottom: 50px;

  @media screen and (max-width: 768px) {
    padding: 2.5rem;
    padding-top: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Box = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.8rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    padding: 0.8rem;
    margin-bottom: 1rem;
    border-radius: 5px;

  }
`;

export const TechnologiesRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;

  @media screen and (max-width: 992px) {
    gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

export const TechnologyImage = styled.img`
  width: 45px;
  /* Adjust the size of technology images */
  height: 45px;
  transition: transform 0.3s ease-in-out;
  /* Add transition effect */

  &:hover {
    transform: scale(1.2);
    /* Scale up the image on hover */
  }

  @media screen and (max-width: 992px) {
    width: 45px;
    height: 45px;
  }

  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;
