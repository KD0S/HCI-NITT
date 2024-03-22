import "./ImageGallery.css";
import { useRef, useEffect } from "react";
import { imgSlides } from "./ImgSlides";
import { register } from "swiper/element/bundle";
import { Zoom } from "react-awesome-reveal";

register();

const ImageGallery = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      loop: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            color: var(--color-white);
            width: 3.5rem;
            height: 3.5rem;
            transition: all 0.5s ease;
            z-index: 15;
          }

          .swiper-button-next {
            transform: translateX(-0.5rem);
          }

          .swiper-button-prev {
            transform: translateX(0.5rem);
          }

          .swiper-button-prev:hover, .swiper-button-next:hover{
            color: var(--color-light-blue);
            transform: translateX(0);
          }

          .swiper-pagination-bullet{
            width: 2.5rem;
            height: 0.25rem;
            border-radius: 2rem;
            background-color: var(--color-light-blue);
            z-index: 15;
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();

    // listen for Swiper events using addEventListener
    swiperRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <>
      <div className="landing-title">
        <Zoom triggerOnce>
        <div>
          <h1 className="landing-title-line1">
            Human-Computer Interface Lab
          </h1>
          <h1 className="landing-title-line2">
            @National Institute of Technology, Tiruchirappalli
          </h1>
        </div>
        </Zoom>
      </div>
      <swiper-container ref={swiperRef} init="false">
        {imgSlides.map((item, idx) => {
          return (
            <swiper-slide>
              <div className="overlay"></div>
              <img src={item.src} alt={item.alt} key={idx}></img>
            </swiper-slide>
          );
        })}
      </swiper-container>
    </>
  );
};

export default ImageGallery;
