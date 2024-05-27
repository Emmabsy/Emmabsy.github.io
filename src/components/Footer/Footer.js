
import TechnologiesWaveSVG from "../SVG/TechnologiesWaveSVG";
import {
  FooterContainer,
  FooterContent,
  Menu,
  MenuItem,
  CopyText,
  SocialIcons,
  SocialIconLink,
} from "./FooterElement";


// Footer component
const Footer = () => {
  return (
    <>
   

      <FooterContainer>
        <FooterContent>
          <Menu>
            <MenuItem href="/works">Works</MenuItem>
            <MenuItem href="https://www.linkedin.com/in/emma-maikuri-997ba631/">
              Resume
            </MenuItem>
          </Menu>
          <CopyText>&copy; Emma 2024 </CopyText>
          <SocialIcons>
            <SocialIconLink href="https://github.com/Emmabsy/">
              <i className="fab fa-github"></i>
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/in/emma-maikuri-997ba631/">
              <i className="fab fa-linkedin"></i>
            </SocialIconLink>

            <SocialIconLink href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </SocialIconLink>
          </SocialIcons>
        </FooterContent>
      </FooterContainer>
    </>
  );
};

export default Footer;
