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



const MainContent = () => {
  return (
<section class="flex flex-col-reverse lg:flex-row justify-between items-center h-[100%] lg:h-[100vh] w-full px-10 lg:px-20 py-10 lg:py-0 bg-black text-white font-mono">
  
  <div class="lg:max-w-1/2 w-full text-lg leading-7">
    <h1 class="text-4xl lg:text-7xl">Introducing LURN</h1>
    <p class="my-6 lg:m-10 text-white">
      An Artificial Intelligence platform that helps you learn with the help of GAMES that are interactive and fresh.
      We offer infinite learning resources for our users that help them learn and grow.
    </p>
    <button class="bg-white text-black px-8 py-4 text-lg font-bold rounded-md mt-8 hover:bg-green-500 hover:text-white transition duration-250 ease-in-out">
      Start Learning
    </button>
  </div>

  
  <div class="text-left text-xl mb-10 lg:mb-0 lg:max-w-1/2 w-full">
    <h1 class="text-4xl">LURN = {'{'}</h1>
    <p class="text-vsred">&nbsp;&nbsp;&nbsp;&nbsp;L&nbsp;:&nbsp;Learn,</p>
    <p class="text-vsskyblue">&nbsp;&nbsp;&nbsp;&nbsp;U&nbsp;:&nbsp;Understand,</p>
    <p class="text-vscyan">&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;:&nbsp;Reward,</p>
    <p class="text-vsgreen">&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;:&nbsp;Navigate</p>
    <h1>{'}'}</h1>
  </div>
</section>


  );

};

export default MainContent;
