import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectName = styled.h3`
  font-size: 0.8rem;
  text-align: center;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: 400;
  max-width: 90%;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-top: 1rem;
  gap: 0.7rem;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 0.4rem 1.6rem;
  background-color: #808080;
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #6b6b6b;
  }
`;

export const Button2 = styled(Button)`
  background-color: #0047ab;
  &:hover {
    background-color: #6b6b6b;
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TechCard = styled.div`
  border-radius: 10px;
  background-color: #f5f5f5;
  padding: 5px 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.815);
  cursor: default;
  box-shadow: 0px 2px 5px rgba(160, 170, 180, 0.6);
`;

export const ProjectsContainer = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (min-width: 768px) {
    padding: 3rem 5rem;
  }

  @media screen and (min-width: 992px) {
    padding: 3rem 10rem;
  }
`;

export const ProjectsHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 5rem;
  margin-top: 7rem;
  text-align: center;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  justify-items: center;
`;
