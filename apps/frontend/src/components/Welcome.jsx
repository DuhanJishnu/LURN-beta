import React from "react";
import { useNavigate } from "react-router-dom";
import TypewriterPage from "./TypeWrite.jsx";
import SearchBar from "./SearchBar.jsx";
import Carousel from "./Carousel.jsx";

const Welcome = () => {
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(localStorage.getItem("token") === null){
            navigate("/auth");
        }
    },[])
    return (
        <div className="min-h-screen w-full  bg-[#212121] text-center ">
            <div className="p-20">
                <TypewriterPage text={"Welcome to Learning Page"} />
                <SearchBar />
                <Carousel />
            </div>
        </div>
    );
};

export default Welcome;
