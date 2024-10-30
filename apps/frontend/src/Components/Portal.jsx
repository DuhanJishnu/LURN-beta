import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black;
    color: white;
    font-family: "Courier New", Courier, monospace;
`;

const FormWrapper = styled.div`

  text-align: center;
  max-width: 400px;
  width: 100%;
    


--border-angle: 0turn; 
  --main-bg: conic-gradient(
      from var(--border-angle),
      black,
      black 0.3%,
      black 60%,
      black 95%
    );
  
  border: solid 3px transparent;
  border-radius: 2em;
  --gradient-border: conic-gradient(from var(--border-angle), transparent 25%, white, black 100%, transparent);
  
  background: 
   
    var(--main-bg) padding-box,
    var(--gradient-border) border-box, 
    var(--main-bg) border-box;
  
  background-position: center center;

  animation: bg-spin 3s linear infinite;
  @keyframes bg-spin {
    to {
      --border-angle: 1turn;
    }
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}



`;

const Logo = styled.div`
    background-color: white;
    color: black;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin: 0 auto 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
`;

const Input = styled.input`
    background-color: black;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    padding: 0.5rem;
    width: 100%;
    margin: 1rem 0;
    font-size: 1.2rem;
`;

const ContinueButton = styled(Link)`
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 25px;
    font-size: 1.2rem;
    width: 100%;
    margin-top: 1.5rem;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: #019374;
    }
`;

const GoBack = styled.a`
    display: block;
    margin-top: 1rem;
    color: #00b894;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

const ErrorMessage = styled.div`
    display: block;
    margin-top: 1rem;
    color: red;
    cursor: pointer;
`;



const SignIn = ({setLogin}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");

    function showError(message) {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage("");
        }, 1000*3);
    }

    const onclickHandler = async () => {
        setErrorMessage("Signing you in...");
        const res = await fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/auth/signin`,
            {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                }),
            },
        );
        const data = await res.json();
        if (!data.token) {
            showError(data.message);
        } else {
            navigate("../welcome");
            localStorage.setItem("token", data.token);
        }
    };
    return (
        <Container>
            <FormWrapper className="px-[2rem] sm:px-[4rem] ">
                <Logo>Logo</Logo>
                <h2>Sign in to your account</h2>
                <h3>or <u><Link onClick={()=>setLogin((e)=>!e)}>Create account here</Link></u></h3>
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button className="mt-5 bg-[#00b894] p-1 rounded-md  hover:bg-[#00b855]" onClick={onclickHandler}>
                    Continue
                </button>
                <GoBack href="/">Go Back</GoBack>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </FormWrapper>
        </Container>
    );
};

const SignUp = () => {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = React.useState("");

    function showError(message) {
        setErrorMessage(message);
        setTimeout(() => {
            setErrorMessage("");
        }, 1000*3);
    }

    const onclickHandler = async () => {
        setErrorMessage("Creating your account...");
        const res = await fetch(
            `${import.meta.env.VITE_REACT_APP_API_URL}/api/v1/auth/signup`,
            {
                method: "POST",
                body: JSON.stringify({
                    name: username,
                    email,
                    password,
                }),
            },
        );
        const data = await res.json();
        if (!data.token) {
            showError(data.message);
        } else {
            navigate("../welcome");
            localStorage.setItem("token", data.token);
        }
    };
    return (
        <Container>
            <FormWrapper>
                <Logo>Logo</Logo>
                <h2>Create your account</h2>
                <h3>or <u><Link onClick={()=>setLogin((e)=>!e)}>Login here</Link></u></h3>
                <Input
                    type="username"
                    placeholder="Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button className="mt-5 bg-[#00b894] p-1 rounded-md hover:bg-[#00b855]" onClick={onclickHandler}>
                    Continue
                </button>
                <GoBack href="/">Go Back</GoBack>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </FormWrapper>
        </Container>
    );
};

const Portal = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("token") !== null){
            navigate("/welcome");
        }
    },[])
    
    const [login, setLogin] = React.useState(true);
    return (<>
        {login ? <SignIn setLogin={setLogin}/> : <SignUp setLogin={setLogin}/>}
    </>)
}

export default Portal;
