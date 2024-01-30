import './Blogs.css'
import blogService from '../../../Components/blogService'
import { AdminHeader } from '../../../Components/AdminHeader/AdminHeader'
import Blog from '../../../Components/Blog/Blog'
import { useEffect, useState } from 'react'
import Alert from '../../../Components/Alert/Alert'

const BlogsAdmin = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [imgPath, setImgPath] = useState('')
    const [blogPath, setBlogPath] = useState('')
    const [notif, setNotif] = useState('success')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        blogService.getAll().then((data) => {
            setBlogs(data.data)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()

        const newBlog = {
            title: title,
            author: author,
            date: date,
            description: description,
            imgPath: imgPath,
            blogPath: blogPath
        }

        blogService.create(newBlog).then((data) => {
            setBlogs(blogs.concat(data.data))
        })

        setAlert(true)
        setNotif('success')
        setMessage('Added Successfully')
        setTimeout(() => {
            setAlert(false)
        }, 3000)
        return
    }

    return (
        <div className='admin-blogs-body'>
            <AdminHeader></AdminHeader>
            <div className='admin-blogs-container'>
                <div>{alert ? <Alert type={notif} message={message}></Alert>
                    : null}
                    <div className='form-wrapper'>
                        <div className='form-container' style={{ width: '800px' }}>
                            <div className='form-text'>
                                Add Blog
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="input-data">
                                        <input type="text" required placeholder=''
                                            onChange={(e) => setTitle(e.target.value)} />
                                        <div className="underline"></div>
                                        <label>Title</label>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="input-data" style={{ flex: '20%' }}>
                                        <input type="text" placeholder=''
                                            onChange={(e) => setAuthor(e.target.value)} />
                                        <div className="underline"></div>
                                        <label>Author</label>
                                    </div>
                                    <div className="input-data">
                                        <input type="text" placeholder='eg : 1 Jan, 2024'
                                            onChange={(e) => setDate(e.target.value)} />
                                        <div className="underline"></div>
                                        <label>Date</label>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="input-data">
                                        <input type="text" placeholder=''
                                            onChange={(e) => setDescription(e.target.value)} />
                                        <div className="underline"></div>
                                        <label>Description</label>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="input-data">
                                        <input type="text" placeholder=''
                                            onChange={(e) => setImgPath(e.target.value)} />
                                        <div className="underline"></div>
                                        <label>Img Path</label>
                                    </div>
                                </div>
                                <div className='form-row'>
                                    <div className="input-data">
                                        <input type="text" placeholder=''
                                            onChange={(e) => setBlogPath(e.target.value)} />
                                        <div className="underline"></div>
                                        <label>Blog URL</label>
                                    </div>
                                </div>
                                <div className='submit-row'>
                                    <button className='login-btn' type='submit'>Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='admin-blogs-wrapper'>
                        {blogs ? blogs.map(blog =>
                            <div className='blogs-wrapper-item'>
                                <Blog key={blog.id} props={{
                                    id: blog.id,
                                    title: blog.title, author: blog.author,
                                    date: blog.date,
                                    admin: true,
                                    blogs: blogs,
                                    setBlogs: setBlogs
                                }}></Blog>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsAdmin


