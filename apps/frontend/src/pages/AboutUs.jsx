import React from "react";
import "../Components/MainContent.css"; 

const teamMembers = [
  {
    name: 'Jishnu Duhan',
    
    description: `Director and founding partner of Studio Alto, Andrew has over 10 years experience in Australia and the UK. He has worked with a broad spectrum of clients, ranging from multi-national corporations to local and sustainable initiatives.`,
    education: 'Bachelor of Technology (Computer Science) NIT Meghalaya',
    img: '../../assets/Images/jishnu.webp',
  },
  {
    name: 'Charity Rymbai',
    
    description: `Mark is not only an experienced designer, but an enthusiastic design teacher and a passionate musician. With over 10 years of industry experience, Mark sees every new project as an opportunity to do something extraordinary.`,
    education: 'Bachelor of Technology (Mechanical Engineering) NIT Meghalaya',
    img: '../../assets/Images/3.webp',
  },
  {
    name: 'Shashank Umar Vaishy',
    
    description: `Part visual communicator, part adventurer, Eunice sees the world through a slightly different lens. Originally hailing from Hong Kong’s South East Asia, she has settled into Studio Alto.`,
    education: 'Bachelor of Technology (Computer Science) NIT, Meghalaya',
    img: '../../assets/Images/Shashank.webp',
  }
];



function App() {
  

  return (
    <div className="wrapper">
      <div id="stars" className="-z-10"></div>
      <div id="stars2" className="-z-10"></div>
      <div id="stars3" className="-z-10"></div>
      <div className="pt-20">
        <div className="flex flex-wrap justify-center text-3xl text-white font-bold">Our Team</div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-24 h-fit py-10 ">
        {teamMembers.map((item, index) => (
          <div
            key={index}
            
            className="w-[300px] h-[400px] group overflow-hidden  relative rounded-[40px] transition-all duration-700 hover:shadow-[0_4px_30px_rgba(255,255,255,1)] hover:-translate-y-3 transform"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full transition-all duration-300 ease-in-out rounded-[40px]"
            />
            <div className="absolute bottom-[-100%] left-0 w-full text-center text-white bg-black bg-opacity-60 py-2 transition-all duration-700 ease-in-out group-hover:bottom-0">
              <div className="text-2xl font-bold">{item.name}</div>
              <br />
              <div className="italic p-2">{item.education}</div>
              <br />
              <div className="text-md p-2">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default App;
