import React from 'react';
import {Link,withRouter} from 'react-router-dom'
import styled from 'styled-components';


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 1rem;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor:pointer;
  outline:none;
  &:hover{
    color: #bada55;
  }
  
`;

const NavLogo=styled.img`
  height:80px;
  width:80px;
`

const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #bada55;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;

  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;



const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav>
      <Logo>
        <NavLogo src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1706875838/Blue_Modern_Teamwork_Together_Logo_j1csr6.png" alt="header-logo"/>
      </Logo>
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? 'Close' : 'Menu'}
      </MobileNavToggle>
      <DesktopNav>
        <Link to="/" style={{ textDecoration: 'none' }}><NavItem>Home</NavItem></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><NavItem>About Us</NavItem></Link>
        <Link to="/blogs" style={{ textDecoration: 'none' }}><NavItem>Blogs</NavItem></Link>
        <Link to="/services" style={{ textDecoration: 'none' }}><NavItem>Services</NavItem></Link>
        <Link to="/contact-us" style={{ textDecoration: 'none' }}><NavItem>Contact Us</NavItem></Link>
      </DesktopNav>
      <MobileNav style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <Link to="/" style={{ textDecoration: 'none' }}><NavItem>Home</NavItem></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}><NavItem>About Us</NavItem></Link>
        <Link to="/blogs" style={{ textDecoration: 'none' }}><NavItem>Blogs</NavItem></Link>
        <Link to="/services" style={{ textDecoration: 'none' }}><NavItem>Services</NavItem></Link>
        <Link to="/contact-us" style={{ textDecoration: 'none' }}><NavItem>Contact Us</NavItem></Link>
      </MobileNav>
    </Nav>
  );
};
export default withRouter(Header);