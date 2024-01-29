import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='img-placeholder'></div>
            <a href="https://medium.com">
                <h1 className='blog-title'>Blog Title</h1>
            </a>
            <p style={{ fontWeight: 500 }}> ABC | Jan 20, 2024</p>
            <br />
            <p>
                This is a blog written by members of HCI. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Odit iure ratione rerum quae animi quis earum error ex dolor, id eveniet maxime,
                totam tempora dicta doloremque. Tenetur perferendis sapiente suscipit!
            </p>
            <br></br>
            <a href="https://medium.com/">Continue Reading...</a>
        </div>
    )
}

export default Blog