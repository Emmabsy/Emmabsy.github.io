import styled from "styled-components";

export const ContactContainer = styled.section`
  color: #333;
  padding: 4rem 0;
`;

export const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

export const ContactInfo = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;

export const SocialIcons = styled.div`
  margin-top: 2rem;

  i {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: #333;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }
`;

export const SocialIconLink = styled.a`
  text-decoration: none;
`;
