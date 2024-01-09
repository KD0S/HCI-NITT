import "./Research.css";
import Footer from "../../Components/Footer/Footer";
import { Header } from "../../Components/Header/Header";
import { IoIosFlask } from "react-icons/io";
import { IconContext } from "react-icons";

const Research = () => {
  return (
    <div className="research-main">
      <Header></Header>
      <div className="research-content-header">
        <h1 className="main-title">WHAT WE DO</h1>
        <IconContext.Provider value={{ className: "research-content-icon" }}>
          <IoIosFlask />
        </IconContext.Provider>
      </div>
      <div className="research-content-body">
        <div className="research-content-body-list-container">
          <h2 className="research-content-body-list-title">
            Our Research Areas
          </h2>
          <ul className="research-content-body-list">
            <li>Human Computer Interaction (e-learning)</li>
            <li>
              Brain Computer Interfaces (algorithms, devices, systems,
              applications)
            </li>
            <li>Neural Signal Processing</li>
            <li>Neural Image Processing</li>
            <li>Machine learning</li>
            <li>Deep Learning</li>
            <li>Artificial Intelligence</li>
            <li>Computer Architecture</li>
          </ul>
        </div>
        <div className="research-content-body-list-container">
          <h2 className="research-content-body-list-title">
            Our Research Topics
          </h2>
          <ul className="research-content-body-list">
            <li>Emotional Intelligence as personal context</li>
            <li>Emotions in humans</li>
            <li>Cognitive load in tasks</li>
            <li>Imagined Speech in paralyzed patients</li>
            <li>Motor imaginary in disabled patients</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Research;
