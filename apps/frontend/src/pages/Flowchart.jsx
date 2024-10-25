import React, { useState } from "react";

const FlowchartData = [
  {
    "head": "Set the Display Property",
    "desc": "Ensure your div has a display property that allows for centering, such as 'flex' or 'grid'."
  },
  {
    "head": "Apply Alignment Properties",
    "desc": "Use `justify-content: center` for horizontal centering and `align-items: center` for vertical centering. If using 'grid', set `place-items: center`."
  },
  {
    "head": "Consider Container Size",
    "desc": "If necessary, set a fixed width or height for your container to enable proper centering."
  },
  {
    "head": "Check Parent Elements",
    "desc": "Make sure parent elements don't have conflicting alignment properties that are preventing your div from centering."
  }
];

const Flowchart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="main bg-black h-screen">
      <div className="flex justify-center pt-[5vh] text-center text-white font-bold italic bg-black text-4xl">
      Flow Chart
       <br/>
        Topic: topic here

      </div>
      <div className="flowchart-container pt-20 bg-black items-center flex  justify-center space-x-8 relative">
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
            <div className="absolute transform  translate-y-8 border-2 border-b-emerald-50 italic text-white p-4 rounded-lg w-fit text-center ">
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
