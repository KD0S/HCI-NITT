import './Projects.css'
import Footer from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { IoIosConstruct } from "react-icons/io";


const Projects = () => {
    return (
        <div>
            <Header></Header>
            <div className='projects-content-body'>
                <div className='projects-content'>
                    <div className='projects-icon'><IoIosConstruct></IoIosConstruct></div>
                    <h2>Under Development! Will be updated Soon.</h2>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Projects