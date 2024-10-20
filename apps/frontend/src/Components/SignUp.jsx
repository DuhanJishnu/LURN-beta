import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: 'Courier New', Courier, monospace;
`;

const FormWrapper = styled.div`
  background-color: black;
  // border: 2px solid white;
  // border-radius: 10px;
  padding: 2rem 4rem;
  text-align: center;
  max-width: 400px;
  width: 100%;


  //updated from here

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
//if want to pause animation on hovering
  // &:hover {
  //   animation-play-state: paused;
  // }
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

const ContinueButton = styled.button`
  background-color: #00b894;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
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

const SignUp = () => {
  return (
    <Container>
      <FormWrapper>
        <Logo>Logo</Logo>
        <h2>Create your account</h2>
        <form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <ContinueButton>Continue</ContinueButton>
        </form>
        <GoBack href="/">Go Back</GoBack>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
