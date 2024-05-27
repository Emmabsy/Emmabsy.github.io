import styled from "styled-components";


export const FooterContainer = styled.footer`
  background: #202020;
  color: #fff;
  padding: 2rem 1rem; /* Adjusted padding for smaller screens */
  padding-left: 5rem;
  padding-right: 5rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centered content for smaller screens */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 992px;
    margin: 0 auto;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centered items for smaller screens */
  gap: 1rem; /* Adjusted gap for smaller screens */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start; /* Adjusted alignment for larger screens */
    gap: 2rem; /* Adjusted gap for larger screens */
  }
`;

export const MenuItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center; /* Centered items for smaller screens */
  gap: 1rem; /* Adjusted gap for smaller screens */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center; /* Adjusted alignment for larger screens */
    gap: 1rem; /* Adjusted gap for larger screens */
  }
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ccc;
  }
`;

export const CopyText = styled.p`
  font-size: 1rem;
  text-align: center; /* Centered text for smaller screens */

  @media screen and (min-width: 768px) {
    text-align: left; /* Adjusted alignment for larger screens */
  }
`;
