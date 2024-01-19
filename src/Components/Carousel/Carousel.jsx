import "./Carousel.css";
import React, { useState } from "react";
import { imgSlides } from "./ImgSlides";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Zoom } from "react-awesome-reveal";

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  setTimeout(() => {
    nextSlide();
  }, 10000);

  const nextSlide = () => {
    setSlide((slide + 1) % imgSlides.length);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? imgSlides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <IoIosArrowBack className="arrow arrow-left" onClick={prevSlide} />

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
        <Zoom triggerOnce>
          <div>
            <h1 className="overlay-heading-line1">
              Human-Computer Interface Lab
            </h1>
            <h1 className="overlay-heading-line2">
              @National Institute of Technology, Tiruchirappalli
            </h1>
          </div>
        </Zoom >
      </div>

      <IoIosArrowForward className="arrow arrow-right" onClick={nextSlide} />

      <span className="indicators">
        {imgSlides.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={
                slide === idx ? "indicator" : "indicator indicator-hidden"
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
