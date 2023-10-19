import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useLocation } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getABlog } from '../features/blogs/blogSlice'

const SingleBlog = () => {
    const location = useLocation();
    const getId = location.pathname.split("/")[2];
    const data = useSelector((state) => state?.blog?.singleBlog)
    const dispatch = useDispatch()
    useEffect(() => {
        getBlog();
    }, [])
    const getBlog = () => {
        dispatch(getABlog(getId))
    }
    return (
        <>
            <Meta title={data?.title} />
            <BreadCrumb title={data?.title} />
            <Container class1="blog-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="single-blog-card">
                            <Link to='/blogs' className='d-flex align-items-center gap-10'><FiArrowLeft className='fs-4' /> Go back to all blogs</Link>
                            <h3 className="title">
                                {data?.title}
                            </h3>
                            <img src={data?.images[0]?.url ? data?.images[0]?.url : "images/blog-1.jpg"} className='img-fluid w-100 my-4' alt="blog" />
                            <p dangerouslySetInnerHTML={{ __html: data?.description }}></p>
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default SingleBlog