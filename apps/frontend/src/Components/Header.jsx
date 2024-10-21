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
    font-family: "Courier New", Courier, monospace;

  //new code 
  a {
    
    position: relative;
    text-decoration: none;
    padding-bottom: 2px;
    
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: white;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.3s ease-in-out;
    }

        &:hover::before {
            visibility: visible;
            transform: scaleX(1);
        }
    }
`;

const SignUpButton = styled(Link)`
    background-color: white;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;

    //added later
    &:hover {
        background-color: green;
        color: white;
        animation: zoom 1.2s ease infinite;
        animation: prop 0.2s ease 1;
    }

    @keyframes prop {
        from {
            background-color: white;
        }
        to {
            background-color: green;
            color: white;
        }
    }
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

const LogOutButton = styled.button`
    background-color: white;
    color: black;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;

    //added later
    &:hover {
        background-color: green;
        color: white;
        animation: zoom 1.2s ease infinite;
        animation: prop 0.2s ease 1;
    }

    @keyframes prop {
        from {
            background-color: white;
        }
        to {
            background-color: green;
            color: white;
        }
    }
`;

const Header = () => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavLinks>
        <a href="/" className='text-vsgreen hover:text-vsred'>Home</a>
        <a href="#" className='text-vscyan hover:text-vsred'>Our Vision</a>
        <a href="#" className='text-vspurple hover:text-vsred'>About Us</a>
        <a href="#" className='text-vsyellow hover:text-vsred'>Contact</a>
      </NavLinks>
      <SignUpButton to="/signup">Sign Up</SignUpButton>
    </Nav>
  );
};  

export default Header;

