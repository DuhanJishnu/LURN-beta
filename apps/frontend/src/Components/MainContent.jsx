import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 88vh;
    padding: 0 5rem;
    background-color: black;
    color: white;
    font-family: "Courier New", Courier, monospace;
`;

const IntroText = styled.div`
    max-width: 50%;
    font-size: 1.2rem;
    line-height: 1.8;
`;

const LurnSection = styled.div`
    text-align: left;
    font-size: 1.5rem;
`;

const StartButton = styled(Link)`
    background-color: white;
    color: black;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 5px;
    margin-top: 2rem;

    &:hover {
        background-color: green;
        color: white;
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

const MainContent = () => {
  return (
    <Section>
      <IntroText>
        <h1 className='text-7xl'>Introducing LURN</h1>
        <p className='m-10'>
          An Artificial Intelligence platform that helps you learn with the help of GAMES that are interactive and fresh. 
          We offer infinite learning resources for our users that help them learn and grow.
        </p>
        <StartButton to="/auth">Start Learning</StartButton>
      </IntroText>
      <LurnSection className='text-4xl'>
        <h1 className='text-4xl'>LURN = {'{'}</h1>
        <p className="text-vsred">&nbsp;&nbsp;&nbsp;&nbsp;L&nbsp;:&nbsp;Learn,</p>
        <p className="text-vsskyblue">&nbsp;&nbsp;&nbsp;&nbsp;U&nbsp;:&nbsp;Understand,</p>
        <p className="text-vscyan">&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;:&nbsp;Reward,</p>
        <p className="text-vsgreen">&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;:&nbsp;Navigate</p>
        <h1>{'}'}</h1>
      </LurnSection>
    </Section>
  );

};

export default MainContent;
