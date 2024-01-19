import "./AboutUs.css";
import { imgSlides } from "../Carousel/ImgSlides";
import { Bounce, Slide } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <div className="about-main">
      <div className="about-img-column">
        <Bounce triggerOnce>
          <div className="about-img-container">
            <img src={imgSlides[1].src} alt={imgSlides[1].alt} />
          </div>
        </Bounce>
        <Bounce triggerOnce fraction={0.5}>
          <div className="about-img-container">
            <img src={imgSlides[2].src} alt={imgSlides[2].alt} />
          </div>
        </Bounce>
      </div>
      <div className="about-content">
        <Slide direction="up" triggerOnce fraction={0.25}>
          <h1 className="about-content-title">ABOUT US</h1>
        </Slide>
        <Slide direction="up" triggerOnce fraction={0.5}>
          <p className="about-content-body">
            The <strong>EEG Laboratory</strong> at the{" "}
            <strong>
              National Institute of Technology (NIT) Trichy, India
            </strong>
            , is dedicated to investigating various neuro-physical aspects and
            functionalities of the human brain and body. Our focus areas
            encompass the in-depth exploration of{" "}
            <strong>human emotions</strong>,{" "}
            <strong>emotional intelligence</strong>,{" "}
            <strong>cognitive load</strong>, <strong>imagined speech</strong>{" "}
            and <strong>motor imagery using brain signals (BCI) </strong>.
            <br />
            <br />
            Our research involves the processing of brain signals acquired
            through advanced neuro-imaging techniques such as
            <strong> Electroencephalogram (EEG) </strong>
            and sensors-based methods on human body. We employ cutting-edge
            time-frequency signal processing methods to extract valuable
            insights into the underlying functions of the brain.
            <br />
            <br />
            The laboratory's expertise extends to the specialization in
            classification and prediction tasks of brain signals, leveraging
            advanced <strong>Machine Learning (ML)</strong> and{" "}
            <strong>Deep Learning (DL)</strong> techniques. Our dynamic team
            comprises Ph.D. and M. Tech students under the guidance of{" "}
            <a href="https://www.nitt.edu/home/academics/departments/cse/faculty/sameedha/">
              <strong>Dr. B Shameedha Begum</strong>
            </a>
            , a distinguished faculty member in the Department of Computer
            Science Engineering (CSE) at NIT Trichy.
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default AboutUs;
