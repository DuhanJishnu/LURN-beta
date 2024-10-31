import React from "react";

const TypewriterPage = ({ text }) => {
    return (
            <div className="inline-block p-4 ">
                <p className="text-white h-10 text-lg sm:text-3xl font-mono tracking-widest border-r-2 border-white overflow-hidden whitespace-nowrap animate-typing">
                    {text}
                </p>
            </div>
    );
};

export default TypewriterPage;
