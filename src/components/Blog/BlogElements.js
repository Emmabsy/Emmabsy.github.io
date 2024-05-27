import styled from "styled-components";

export const BlogsContainer = styled.section`
  padding: 2rem 2rem; 
  background-color: #fff;
  color: #333;
`;

export const BlogsHeading = styled.h1`
  font-size: 1.7rem;
  margin-top: 8rem;
  margin-bottom: 3rem;
  color: #333;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    margin-top: 5rem;
  }
`;

export const BlogWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

export const BlogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const BlogImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
`;

export const BlogInfo = styled.div`
  margin-top: 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    h3 {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.7rem;
      line-height: 1;
    }
  }
`;

export const BlogLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #0056b3;
  }
`;

export const BlogDate = styled.p`
  font-size: 0.9rem;
  color: #666;
`;
