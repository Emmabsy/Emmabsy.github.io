import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  font-family: "didot";
  //font-family: "didot";Copperplate,Verdana, optima, candara, Lucida Bright, Geneva /* Example font family */Copperplate
  background: #121111;
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled(LinkRouter)`
  margin-left: 5rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  @media screen and (max-width: 768px) {
    margin-left: 1rem; /* Reduced top margin for smaller screens */
  }
`;

export const NavMenu = styled.ul`
  display: none; /* Hide NavMenu by default */
  list-style: none;

  @media screen and (min-width: 768px) {
    /* Show NavMenu on screens larger than 768px */
    display: flex;
  }
`;

export const NavItem = styled.li`
  margin-right: 2.5rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }
  }
`;
export const ResumeBtn = styled.a`
  display: ${({ showResume }) => (showResume ? "inline-block" : "none")};
  display: flex;
  align-items: center;
  margin-right: 54px;
  background: #0047ab;
  color: #fff;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #ddd;

  }
  display: none; /* Hide the resume button by default */

  @media screen and (min-width: 768px) {
    display: flex; /* Show the resume button on screens larger than 768px */
  }
`;

export const HamburgerContainer = styled.div`
  display: block;
  cursor: pointer;
  padding-right: 0.2rem;
  position: fixed;
  right: 20px;
  top: 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.div`
  width: 30px;
  height: 2px;
  background: ${({ isOpen }) => (isOpen ? "#fff" : "#ccc")};
  border-radius: 5px;
  transition: all 0.3s linear;
  position: relative;
  margin-top: 0.5rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transition: all 0.3s linear;
  }

  &::before {
    top: ${({ isOpen }) => (isOpen ? "0" : "-10px")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? "0" : "10px")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background-color: #111;
  transition: all 0.3s ease-in-out;
  z-index: 999;
`;

export const MenuItem = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid #333;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }
  }
`;
