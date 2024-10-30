import React, { useEffect } from "react";

const SearchBar = ({setSearch, submitHandler}) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          submitHandler(); 
        }
    };

    return (
        <div className="flex items-center bg-[#2f2f2f] p-2 rounded-full mt-20">
            <input
                type="text"
                className="bg-transparent w-full outline-none text-gray-200 px-4 placeholder-white"
                placeholder="Message LURN"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="z-0 flex justify-center items-center bg-gray-700 hover:bg-gray-600 p-2 rounded-full ml-2"
                onClick={submitHandler}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
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
