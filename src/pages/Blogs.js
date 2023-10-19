import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs } from '../features/blogs/blogSlice'
import moment from 'moment';

const Blogs = () => {
    const dispatch = useDispatch()
    const blogState = useSelector((state) => state?.blog?.blog)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        let newCategories = [];
        for (let index = 0; index < blogState.length; index++) {
            const element = blogState[index];
            newCategories.push(element.category)
        }
        setCategories(newCategories)

    }, [blogState])
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        dispatch(getAllBlogs())
    }
    return (
        <>
            <Meta title={"Projects"} />
            <BreadCrumb title="Projects" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Find By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    {
                                        categories && [...new Set(categories)].map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    {item}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {
                                blogState && blogState.map((item, index) => {
                                    return (
                                        <div className="col-6 mb-3" key={index}>
                                            <BlogCard
                                                id={item?._id}
                                                title={item?.title}
                                                description={item?.description}
                                                image={item?.images[0]?.url}
                                                date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                            />
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default Blogs