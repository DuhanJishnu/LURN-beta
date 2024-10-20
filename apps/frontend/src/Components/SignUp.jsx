import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  border: 2px solid white;
  border-radius: 10px;
  padding: 2rem 4rem;
  text-align: center;
  max-width: 400px;
  width: 100%;
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
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;
  font-size: 1.2rem;
`;

const ContinueButton = styled(Link)`
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
          <ContinueButton to="/welcome">Continue</ContinueButton>
        </form>
        <GoBack href="/">Go Back</GoBack>
      </FormWrapper>
    </Container>
  );
};

export default SignUp;
