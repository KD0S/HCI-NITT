import './Research.css'
import Footer from "../../Components/Footer/Footer"
import { Header } from "../../Components/Header/Header"
import { IoIosFlask } from "react-icons/io";

const Research = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="research-content-title">What we Do
                <div className='research-content-icon'><IoIosFlask></IoIosFlask></div>
            </h1>
            <div className="research-content-body">
                <div>
                    <h2>Our Research Areas</h2>
                    <ul>
                        <li>Human Computer Interaction (e-learning)</li>
                        <li>Brain Computer Interfaces (algorithms, devices, systems, applications)</li>
                        <li>Neural Signal Processing</li>
                        <li>Neural Image Processing</li>
                        <li>Machine learning</li>
                        <li>Deep Learning</li>
                        <li>Artificial Intelligence</li>
                        <li>Computer Architecture</li>
                    </ul>
                </div>
                <div>
                    <h2>Our Research Topics</h2>
                    <ul>
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
    )
}

export default Research