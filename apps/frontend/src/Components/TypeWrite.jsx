import React from 'react';

const TypewriterPage = () => {
  return (
    <div className='h-screen bg-[#212121] flex justify-center items-center'> 
      <div className="inline-block p-4">  
        <p className="text-white font-mono tracking-widest border-r-2 border-white overflow-hidden whitespace-nowrap animate-typing">
          Welcome to Learning Page
        </p>
      </div>
    </div>
  );
};

export default TypewriterPage;
