import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Flowchart = () => {
  const location = useLocation();
  const data = location.state?.data;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flowchart-container h-screen flex items-center justify-center space-x-8 relative p-10">
      {data.map((item, index) => (
        <div
          key={index} 
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flowchart-item bg-white text-black p-4  rounded-lg w-fit text-center cursor-pointer hover:shadow-[0_4px_30px_rgba(255,255,255,1)]">
            <h3 className="font-bold">{item.head}</h3>
          </div>

          {index > 0 && index < data.length && (
            <div className="arrow w-8 h-0.5 bg-gray-400 absolute transform -translate-x-8 -translate-y-7"></div>
          )}

          {hoveredIndex === index && (
            <div className="absolute transform  translate-y-8 border-2 border-b-emerald-50 italic text-white p-4 rounded-lg w-fit text-center ">
              {item.desc}   
            </div>
          
          )}
        </div>
      ))}
    </div>
  );
};

export default Flowchart;
