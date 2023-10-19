import React from 'react'
import { Link } from 'react-router-dom'
import blogs from '../images/headphone.jpg'

const BlogCard = (props) => {
  const { id, title, description, image, date } = props
  return (
    <div>
      <div>
        <div className="blog-card " >
          <div className="card-image">
            <img src={image ? image : blogs} alt="blog" className='img-fluid max-auto' width={400} />
          </div>
          <div className="blog-content">
            <p className="date">{date}</p>
            <h5 className="title">{title}</h5>
            <p className="desc" dangerouslySetInnerHTML={{ __html: description?.substr(0, 70) + "..." }}></p>
            <Link to={'/blog/' + id} className='button'>Read More</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BlogCard