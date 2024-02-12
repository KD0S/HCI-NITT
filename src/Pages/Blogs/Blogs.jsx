import { useEffect, useState } from "react"
import Blog from "../../Components/Blog/Blog"
import './Blogs.css'
import { Fade } from "react-awesome-reveal"
import blogService from "../../Components/blogService"

const Blogs = () => {

    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        blogService.getAll().then((data) => {
            setBlogs(data.data)
            setIsLoading(false)
        })
    }, [])

    const [isLoading, setIsLoading] = useState(true)


    return (
        <div className='iresources-main-body'>
            <div>
                {isLoading ? <div className='loader-container'>
                    <div className='loader'></div></div> :
                    <div className='iresources-content-body'>
                        <h1 className='main-title'>Blogs</h1>
                        <div className="blogs-container">
                            <Fade cascade damping={0.5} delay={500}>
                                {blogs.map((blog) => <Blog props={blog}></Blog>)}
                            </Fade>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Blogs