import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 8rem;
  padding-top: 6rem;
  min-height: calc(100vh - 80px);

  @media screen and (max-width: 992px) {
    padding: 5rem;
    min-height: calc(100vh - 200px);

    @media screen and (max-width: 768px) {
      padding: 3rem;
      min-height: calc(100vh - 200px);
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutText = styled.div`
  flex: 1;
  padding-left: 2rem;
  padding-right: 2rem;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
  }
`;

export const AboutHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #333;
  align-text:center;
`;

export const AboutParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #666;

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

export const AboutImage = styled.div`
  flex: 0 0 45%;
  max-width: 400px;
  margin-top: 1.5rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 100px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    filter: blur(1px);
  }

  @media screen and (max-width: 768px) {
    order: -1;
    margin-bottom: 2rem;
  }
`;
