import './Blog.css'
import blogImg from '../../Assets/images/default-blog.png'
import blogService from '../blogService'

const Blog = (props) => {

    const data = props.props
    const handleDelete = () => {
        blogService.remove(data.id)
        data.setBlogs(data.blogs.filter(
            blog => blog.id !== data.id
        ))
    }

    return (
        <div className='blog'>
            <img className='img-placeholder' alt='blog-img'
                src={data.imgPath ? data.imgPath : blogImg}></img>
            <a href={data.blogPath}>
                <h1 className='blog-title'>{data.title}</h1>
                {data.admin ? <button className='icons-alt' style={{ display: 'inline' }}
                    onClick={handleDelete}>X</button> : null}
            </a>
            <p style={{ fontWeight: 500 }}> {data.author} | {data.date} </p>
            <br />
            <p>
                {data.description}
            </p>
            <br></br>
            {data.blogPath ? <a href={data.blogPath}>Continue Reading...</a> : null}
        </div>
    )
}

export default Blog