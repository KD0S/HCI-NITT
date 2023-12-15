import React, { useState } from 'react'
import './Carousel.css'
import { slides } from '../ImageSlides'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


const Carousel = () => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide((slide + 1) % slides.length)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? slides.length - 1 : slide - 1)
    }

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill
                className='arrow arrow-left' onClick={prevSlide}></BsArrowLeftCircleFill>

            <div className='slider'>
                {slides.map((item, idx) => {
                    return <img src={item.src} alt={item.alt} key={idx}
                        className='img-slider' style={{ translate: `${-100 * slide}%` }}></img>
                })}
            </div>

            <BsArrowRightCircleFill
                className='arrow arrow-right' onClick={nextSlide}></BsArrowRightCircleFill>
            <span className='indicators'>
                {slides.map((_, idx) => {
                    return <button key={idx}
                        onClick={() => setSlide(idx)}
                        className={slide === idx ? "indicator" : "indicator indicator-hidden"}></button>
                })}
            </span>
        </div >
    )
}

export default Carousel