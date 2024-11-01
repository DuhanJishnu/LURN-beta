import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/Images/logo.svg';

const FormWrapper = styled.div` 
  text-align: center;
  width: 30vmax; /* Default width: 30% of the larger viewport dimension */
min-width: 300px;
z-index:0;
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

  @property --border-angle {
    syntax: "<angle>";
    inherits: true;
    initial-value: 0turn;
  }

  /* Set width to 400px when the screen width is more than 900px */
  @media (min-width: 900px) {
    width: 400px;
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
        <div className="flex justify-center items-center min-h-screen h-fit bg-black text-white font-mono">
        

<FormWrapper className="mt-[4rem]  px-[2rem] sm:px-[4rem] py-[1rem] pt-[2rem]">
<div className="bg-white text-black rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center font-bold text-xl">
  <img src={logo} alt="image" className="rounded-full" />
</div>

    <h2>Sign in to your account</h2>
    <h3>or <u><Link onClick={()=>setLogin((e)=>!e)}>Create account here</Link></u></h3>
    <input
  type="email"
  placeholder="Email"
  className="bg-black text-white border-2 border-white rounded-md p-2 w-full my-4 text-lg"
  onChange={(e) => setEmail(e.target.value)}
/>
<input
  type="password"
  placeholder="Password"
  className="bg-black text-white border-2 border-white rounded-md p-2 w-full my-4 text-lg"
  onChange={(e) => setPassword(e.target.value)}
/>

                <button
                className="mt-5 bg-white font-bold text-black p-1 rounded-md transition-colors duration-200 hover:bg-[#13871b] hover:text-white"
                onClick={onclickHandler}
            >
                Continue
            </button>
            <a href="/" className="block mt-4  text-[#00b894] cursor-pointer hover:underline">
                    Go Back
                </a>
    <ErrorMessage>{errorMessage}</ErrorMessage>
</FormWrapper>

        </div>
       
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
        <div class="flex justify-center items-center min-h-screen h-fit bg-black text-white font-mono">
  <FormWrapper>
                <div className="bg-white text-black rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center font-bold text-xl">
                <img src={logo} alt="image" className="rounded-full" />
                </div>
                <h2>Create your account</h2>
                <h3>or <u><Link onClick={()=>setLogin((e)=>!e)}>Login here</Link></u></h3>
                <input
          type="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          className="bg-black text-white border-2 border-white rounded-md p-2 w-full my-4 text-lg"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="bg-black text-white border-2 border-white rounded-md p-2 w-full my-4 text-lg"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-black text-white border-2 border-white rounded-md p-2 w-full my-4 text-lg"
        />
               <button
                className="mt-5 bg-white text-black p-1 font-bold rounded-md transition-colors duration-200 hover:bg-[#13871b] hover:text-white"
                onClick={onclickHandler}
            >
                Continue
            </button>
                
                <a href="/" className="block mt-4 text-[#00b894] cursor-pointer hover:underline">
                    Go Back
                </a>
                <ErrorMessage>{errorMessage}</ErrorMessage>
            </FormWrapper>
</div>
            
       
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
