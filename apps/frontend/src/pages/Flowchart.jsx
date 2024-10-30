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
          <div className="flowchart-item bg-black text-white p-4 rounded-lg w-fit text-center cursor-pointer">
            <h3 className="font-bold">{item.head}</h3>
          </div>

          {index > 0 && index < data.length && (
            <div className="arrow w-8 h-0.5 bg-gray-400 absolute transform -translate-x-8 -translate-y-7"></div>
          )}

          {hoveredIndex === index && (
            <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white p-4 rounded-lg w-64 text-center transition-opacity duration-300">
              {item.desc}   
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Flowchart;
