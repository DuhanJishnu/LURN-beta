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
`;

const SignUpButton = styled.button`
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-weight: bold;
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
        <a href="#">Home</a>
        <a href="#">Our Vision</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </NavLinks>
      <SignUpButton>Sign Up</SignUpButton>
    </Nav>
  );
};

export default Header;
