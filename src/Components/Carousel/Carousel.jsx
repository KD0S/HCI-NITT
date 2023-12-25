import "./Carousel.css";
import React, { useState } from "react";
import { imgSlides } from "./ImgSlides";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide((slide + 1) % imgSlides.length);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? imgSlides.length - 1 : slide - 1);
    };

    return (
        <div className="carousel">
            <BsArrowLeftCircleFill
                className="arrow arrow-left"
                onClick={prevSlide}
            ></BsArrowLeftCircleFill>

            <div className="slider">
                {imgSlides.map((item, idx) => {
                    return (
                        <img
                            src={item.src}
                            alt={item.alt}
                            key={idx}
                            className="img-slider"
                            style={{ translate: `${-100 * slide}%` }}
                        ></img>
                    );
                })}
            </div>

            <div className="overlay">
                <h2>Welcome to</h2>
                <h1>Human-Computer Interface Lab</h1>
                <h1>@National Institute of Technology, Tiruchirappalli</h1>
            </div>

            <BsArrowRightCircleFill
                className="arrow arrow-right"
                onClick={nextSlide}
            ></BsArrowRightCircleFill>
            
            <span className="indicators">
                {imgSlides.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            onClick={() => setSlide(idx)}
                            className={
                                slide === idx
                                    ? "indicator"
                                    : "indicator indicator-hidden"
                            }
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};

export default Carousel;
