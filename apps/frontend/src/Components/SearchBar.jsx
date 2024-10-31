import React, { useEffect,useState } from "react";

const SearchBar = ({setSearch, submitHandler}) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          submitHandler(); 
        }
    };
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className="flex items-center space-x-4 w-fit shadow-lg shadow-black bg-[#182139] p-2 border-solid border-[#353c51] border-[0.5px] rounded-[25px] transition-all duration-300 ease-in-out">
          {/* Icon */}
          {/* <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1">
            <span className="w-5 h-5 block"></span>
          </div> */}
          
          {/* Search Input */}
          <input
            type="text"
            placeholder="Message LURN"
            className={`bg-[#0f1421] text-gray-400 h-10 outline-none transition-all duration-300 ease-in-out ${
              isFocused ? "w-60 sm:w-[500px]" : "w-32 sm:w-60"
            } px-4 py-1 rounded-[15px]`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          
          {/* Microphone Icon */}
          <button className="z-5 flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 p-2 rounded-full ml-2"
                onClick={submitHandler}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    className="w-5 h-5 text-gray-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </button>

        </div>
      );
};

export default SearchBar;
