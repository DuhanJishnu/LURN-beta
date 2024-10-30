import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const LogOutButton = styled(Link)`
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



const AuthButton = ()=>{
    const url = useLocation();
    const navigate = useNavigate();
    const logoutHandler = () => {
        localStorage.removeItem("token");
        navigate('/auth');
    }
    return <>
        {
            (url.pathname.includes('/auth')) ? 
                <div></div> 
            :
                (localStorage.getItem("token"))? 
                    <LogOutButton onClick={logoutHandler}>Log Out</LogOutButton>
                :
                    <SignUpButton to="/auth">Sign Up</SignUpButton>
        }
    </>
}

export default AuthButton