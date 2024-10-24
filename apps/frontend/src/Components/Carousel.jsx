import React from "react";
import "./Carousel.css";

const Carousel = ({setOption}) => {
    return (
        <>
            <input type="radio" name="slider" id="item-1" alt="flashcard"
                onChange={(e)=>setOption(e.target.alt)} defaultChecked />
            <input type="radio" name="slider" id="item-2" alt="quiz"
                onChange={(e)=>setOption(e.target.alt)} 
            />
            <input type="radio" name="slider" id="item-3" alt="mindmap"
                onChange={(e)=>setOption(e.target.alt)} 
            />
            <input type="radio" name="slider" id="item-4" alt="flowchart"
                onChange={(e)=>setOption(e.target.alt)} 
            />
            <input type="radio" name="slider" id="item-5" alt="newimage"
                onChange={(e)=>setOption(e.target.alt)} 
            />
            <div className="cards">
                <label className="carouselCard" htmlFor="item-1" id="tile-1">
                    <img src="../../assets/Images/1.png" alt="tile 1" />
                </label>
                <label className="carouselCard" htmlFor="item-2" id="tile-2">
                    <img src="../../assets/Images/2.png" alt="tile 2" />
                </label>
                <label className="carouselCard" htmlFor="item-3" id="tile-3">
                    <img src="../../assets/Images/3.png" alt="tile 3" />
                </label>
                <label className="carouselCard" htmlFor="item-4" id="tile-4">
                    <img src="../../assets/Images/4.png" alt="tile 4" />
                </label>
                <label className="carouselCard" htmlFor="item-5" id="tile-5">
                    <img src="../../assets/Images/5.png" alt="tile 5" />
                </label>
            </div>
        </>
    );
};

export default Carousel;
