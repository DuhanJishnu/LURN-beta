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
                <label className="carouselCard" htmlFor="item-1" id="song-1">
                    <img src="../../assets/Images/1.png" alt="song 1" />
                </label>
                <label className="carouselCard" htmlFor="item-2" id="song-2">
                    <img src="../../assets/Images/2.png" alt="song 2" />
                </label>
                <label className="carouselCard" htmlFor="item-3" id="song-3">
                    <img src="../../assets/Images/3.png" alt="song 3" />
                </label>
                <label className="carouselCard" htmlFor="item-4" id="song-4">
                    <img src="../../assets/Images/4.png" alt="song 4" />
                </label>
                <label className="carouselCard" htmlFor="item-5" id="song-5">
                    <img src="../../assets/Images/5.png" alt="song 5" />
                </label>
            </div>
        </>
    );
};

export default Carousel;
