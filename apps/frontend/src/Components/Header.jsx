import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  background-color: black;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;
  font-family: 'Courier New', Courier, monospace;
`;

const SignUpButton = styled(Link)`
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavLinks>
        <a href="/">Home</a>
        <a href="#">Our Vision</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </NavLinks>
      <SignUpButton to="/signup">Sign Up</SignUpButton>
    </Nav>
  );
};  

export default Header;
