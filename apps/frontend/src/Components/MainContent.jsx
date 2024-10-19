import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88vh;
  padding: 0 5rem;
  background-color: black;
  color: white;
  font-family: 'Courier New', Courier, monospace;
`;

const IntroText = styled.div`
  max-width: 50%;
  font-size: 1.2rem;
  line-height: 1.8;
`;

const LurnSection = styled.div`
  text-align: right;
  font-size: 1.5rem;
`;

const StartButton = styled.button`
  background-color: white;
  color: black;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 2rem;
`;

const MainContent = () => {
  return (
    <Section>
      <IntroText>
        <h1>Introducing LURN</h1>
        <p>
          An Artificial Intelligence platform that helps you learn with the help of GAMES that are interactive and fresh. 
          We offer infinite learning resources for our users that help them learn and grow.
        </p>
        <StartButton>Start Learning</StartButton>
      </IntroText>
      <LurnSection>
        <h1>LURN = {'{'}</h1>
        <p>Learn,</p>
        <p>Understand,</p>
        <p>Reward,</p>
        <p>Navigate</p>
        <h1>{'}'}</h1>
      </LurnSection>
    </Section>
  );
};

export default MainContent;
