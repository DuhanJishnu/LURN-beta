import React, { useState } from "react";

const FlowchartData = [
  {
    head: 'Heading 1',
    desc: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ut iure quis laborum rem explicabo architecto facilis dicta, voluptatem assumenda!',
  },
 
  {
    head: 'Heading 2',
    desc: 'Description 2',
  },
];

const Flowchart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="main">
      <div className="flex justify-center pt-[5vh] text-center text-white font-bold italic bg-black text-4xl">
      Flow Chart
       <br/>
        Topic: topic here

      </div>
      <div className="flowchart-container h-screen bg-black items-center flex pt-[30vh] justify-center space-x-8 relative">
      {FlowchartData.map((item, index) => (
        <div
          key={index} 
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flowchart-item bg-white text-black p-4  rounded-lg w-fit text-center cursor-pointer hover:shadow-[0_4px_30px_rgba(255,255,255,1)]">
            <h3 className="font-bold">{item.head}</h3>
          </div>

          {index > 0 && index < FlowchartData.length && (
            <div className="arrow w-8 h-0.5 bg-gray-400 absolute transform -translate-x-8 -translate-y-7"></div>
          )}

          {hoveredIndex === index && (
            <div className="absolute -bottom-20 translate-y-[80%] transform -translate-x-1/2 italic text-white p-4 rounded-lg w-64 text-center ">
              {item.desc}   
            </div>
          
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Flowchart;
