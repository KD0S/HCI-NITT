import "./AboutUs.css";
import { imgSlides } from "../Carousel/ImgSlides";

const AboutUs = () => {
  return (
    <div className="about-main">
      <div className="about-img-column">
        <div className="about-img-container">
          <img src={imgSlides[1].src} alt={imgSlides[1].alt} />
        </div>
        <div className="about-img-container">
          <img src={imgSlides[2].src} alt={imgSlides[2].alt} />
        </div>
      </div>
      <div className="about-content">
        <h1 className="about-content-title">ABOUT US</h1>
        <p className="about-content-body">
          The EEG Laboratory at the National Institute of Technology (NIT)
          Trichy, India, is dedicated to investigating various neuro-physical
          aspects and functionalities of the human brain and body. Our focus
          areas encompass the in-depth exploration of human emotions, emotional
          intelligence, cognitive load, imagined speech and motor imagery using
          brain signals (BCI).
          <br />
          <br />
          Our research involves the processing of brain signals acquired through
          advanced neuro-imaging techniques such as Electroencephalogram (EEG)
          and sensors-based methods on human body. We employ cutting-edge
          time-frequency signal processing methods to extract valuable insights
          into the underlying functions of the brain.
          <br />
          <br />
          The laboratory's expertise extends to the specialization in
          classification and prediction tasks of brain signals, leveraging
          advanced Machine Learning (ML) and Deep Learning (DL) techniques. Our
          dynamic team comprises Ph.D. and M. Tech students under the guidance
          of Dr. B Shameedha Begum, a distinguished faculty member in the
          Department of Computer Science Engineering (CSE) at NIT Trichy.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
