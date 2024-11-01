import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { SidebarItem } from './Sidebar';
import { Baby, EyeClosed, Layers, MailCheck, PersonStanding, Search, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import AuthButton from "./AuthButton"
import logo from '../../assets/Images/logo.svg';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
    background-color: transaprent;
    backdrop-filter: blur(2px);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
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
      background-color: red;
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





const Header = () => {

const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    (innerWidth<768)?
    <div className='z-50'>
    <Sidebar>
        <SidebarItem
                goToPage=""
                icon={<Layers size={20} />}
                text="Home"
        ></SidebarItem>
        <SidebarItem
                goToPage="vision"
                icon={<EyeClosed size={20} />}
                text="vision"
        ></SidebarItem>
        <SidebarItem
                goToPage="about_us"
                icon={<Users size={20} />}
                text="About Us"
        ></SidebarItem>
        <SidebarItem
                goToPage="Contact"
                icon={<MailCheck size={20} />}
                text="Contact"
        ></SidebarItem>
               
    </Sidebar>
    </div>
    :
    <Nav>
      <a href="/"><img to="/auth" src={logo} alt="logo" className="bg-white rounded-full w-10 h-10" /></a> 
      <NavLinks>
        <a href="/" className='text-vsgreen hover:text-vsred'>Home</a>
        <a href="/vision" className='text-vscyan hover:text-vsred'>Our Vision</a>
        <a href="/about_us" className='text-vspurple hover:text-vsred'>About Us</a>
        <a href="/contact" className='text-vsyellow hover:text-vsred'>Contact</a>
      </NavLinks>
      <AuthButton />
    </Nav>
  );
};  

export default Header;

