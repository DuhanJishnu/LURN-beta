import React from "react";
import "./Carousel.css";

const Carousel = ({setOption}) => {
    return (
        <div className="z-0 relative">
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
            <input type="radio" name="slider" id="item-5" alt="compare"
                onChange={(e)=>setOption(e.target.alt)} 
            />
            <div className="cards">
                <label className="carouselCard" htmlFor="item-1" id="tile-1">
                    <div className="img_card bg-black text-white">Flash Cards</div>
                </label>
                <label className="carouselCard" htmlFor="item-2" id="tile-2">
                    <div className="img_card bg-black text-white">Quiz</div>
                </label>
                <label className="carouselCard" htmlFor="item-3" id="tile-3">
                    <div className="img_card bg-black text-white">Mind Maps</div>
                </label>
                <label className="carouselCard" htmlFor="item-4" id="tile-4">
                    <div className="img_card bg-black text-white">Flow Charts</div>
                </label>
                <label className="carouselCard" htmlFor="item-5" id="tile-5">
                    <div className="img_card bg-black text-white">VS</div>
                </label>
            </div>
        </div>
    );
};

export default Carousel;
