import { useState } from "react"
import { Header } from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import Blog from "../../Components/Blog/Blog"
import './Blogs.css'
import { Fade } from "react-awesome-reveal"

const Blogs = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className='iresources-main-body'>
            <Header></Header>
            <div>
                {isLoading ? <div className='loader-container'>
                    <div className='loader'></div></div> :
                    <div className='iresources-content-body'>
                        <h1 className='main-title'>Blogs</h1>
                        <div className="blogs-container">
                            <Fade cascade damping={0.3} delay={500}>
                                <Blog></Blog>
                                <Blog></Blog>
                                <Blog></Blog>
                                <Blog></Blog></Fade>
                        </div>
                    </div>
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Blogs