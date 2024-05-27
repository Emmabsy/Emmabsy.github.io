import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Logo,
  NavMenu,
  NavItem,
  ResumeBtn,
  HamburgerContainer,
  Hamburger,
  Menu,
  MenuItem,
} from "./HeaderElements";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo to="/">@maikuri</Logo>
      <NavMenu>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/works">Works</NavLink>
        </NavItem>
        <NavItem>
         
        </NavItem>
      </NavMenu>
      <ResumeBtn
        href="https://www.linkedin.com/in/emma-maikuri-997ba631/"
        target="_blank"
        rel="noopener noreferrer">
        Resume
      </ResumeBtn>
      <HamburgerContainer onClick={toggleMenu}>
        <Hamburger isOpen={isOpen} />
      </HamburgerContainer>
      <Menu isOpen={isOpen}>
        <MenuItem>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/about">About</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/works">Works</NavLink>
        </MenuItem>

        <MenuItem>
         
        </MenuItem>
        <MenuItem>
          <ResumeBtn
            href="https://www.linkedin.com/in/emma-maikuri-997ba631/"
            target="_blank"
            rel="noopener noreferrer">
            showResume={!isOpen}
            Resume
          </ResumeBtn>
        </MenuItem>
      </Menu>
    </Nav>
  );
};

export default Header;
