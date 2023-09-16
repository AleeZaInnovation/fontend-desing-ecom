import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Container from '../components/Container'

const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to='/blogs' className='d-flex align-items-center gap-10'><FiArrowLeft className='fs-4' /> Go back to all blogs</Link>
                            <h3 className="title">
                                All the best for ever in Sylhet
                            </h3>
                            <img src="images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia labore perspiciatis dolore voluptate in optio, atque molestiae non deleniti consectetur culpa? Accusamus officia distinctio quod harum placeat facilis vitae aliquid. Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, aliquid similique omnis suscipit error consequatur animi optio possimus fugiat porro. In rem eligendi ducimus ipsa reiciendis magnam inventore vitae explicabo.</p>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default SingleBlog