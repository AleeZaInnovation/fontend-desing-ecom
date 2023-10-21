import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard"
import ProductCard from "../components/ProductCard"
import SpecialProduct from "../components/SpecialProduct.js"
import Container from '../components/Container';
import { services } from '../utils/Data';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import moment from 'moment';
import { getAllProducts } from '../features/products/productSlice';
import Meta from '../components/Meta';
import banner1 from "../images/main-banner-1.jpg"
import catbanner1 from "../images/catbanner-01.jpg"
import catbanner2 from "../images/catbanner-02.jpg"
import catbanner3 from "../images/catbanner-03.jpg"
import catbanner4 from "../images/catbanner-04.jpg"

const Home = () => {
  const dispatch = useDispatch()
  const blogState = useSelector((state) => state?.blog?.blog)
  const productState = useSelector((state) => state?.product?.product)

  useEffect(() => {
    getBlog();
    getProduct();
  }, [])
  const getBlog = () => {
    dispatch(getAllBlogs())
  }
  const getProduct = () => {
    dispatch(getAllProducts())
  }

  return (
    <>

      <Meta title={"Awesome E-commerce"} />
      <Container class1='home-wrapper-1 py-5'>
        <div className="row">
          <div className="col-6">
            {
              <div className="main-banner position-relative">
                <img src={blogState[0]?.images[0]?.url} alt="main banner" className='img-fluid rounded-3' style={{ width: 600, height: 400 }} />
                <div className='main-banner-content position-absolute'>
                  <h4>{blogState[0]?.title}</h4>
                  <h5>{blogState[0]?.category}</h5>
                  <p>{moment(blogState[0]?.createdAt).format('MMMM Do')}</p>
                  <Link to={'/blog/' + blogState[0]?._id} className='button'>Read More</Link>
                </div>
              </div>
            }
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              {
                blogState && blogState.map((item, index) => {
                  if (index > 0 && index < 5) {
                    return (
                      <div className="small-banner position-relative" key={index}>
                        <img src={item?.images[0]?.url} alt="small banner" className='img-fluid rounded-3' style={{ width: 300, height: 200 }} />
                        <div className='small-banner-content position-absolute'>
                          <h4>{item.title}</h4>
                          <h5>{item?.category}</h5>
                          <p>{moment(item?.createdAt).format('MMMM Do')}</p>
                        </div>
                      </div>

                    )
                  }
                })
              }
            </div>
          </div>
        </div>
      </Container>
      <Container class1='home-wrapper-2 py-5'>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className='d-flex align-items-center gap-15'>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <div className="categories d-flex  justify-content-between flex-wrap align-items-center">
              {
                productState && productState.map((item, index) => {
                  if (index <8) {
                    return (

                      <div className="d-flex gap align-items-center">
                        <div>
                          <h6>{item?.category}</h6>
                          <p>{item?.quantity} Items</p>
                        </div>
                        <img src={item?.images[0]?.url} style={{ width: 250, height: 130 }} />
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
        </div>

      </Container>
      <Container class1="featured-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {
            productState && productState?.map((item, index) => {
              if (item.tags === 'featured') {
                return (
                  <ProductCard
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    brand={item?.brand}
                    price={item?.price}
                    totalRating={item?.totalRating}
                    description={item?.description}
                    image={item?.images}
                  />
                )
              }
            })
          }
        </div>

      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">

        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {
            productState && productState?.map((item, index) => {
              if (item.tags === 'special') {
                return (
                  <SpecialProduct
                    key={index}
                    title={item?.title}
                    id={item?._id}
                    brand={item?.brand}
                    price={item?.price}
                    totalRating={item?.totalRating}
                    sold={item?.sold}
                    quantity={item?.quantity}
                    image={item?.images[0]?.url}
                  />
                )
              }
            })
          }

        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">

        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/500.png" className='img-fluid' alt="watch" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62 for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/5001.png" className='img-fluid' alt="watch" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Smart Watch Series 7</h6>
                <p className='text-dark'>From $399 or $16.62 for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/5001.png" className='img-fluid' alt="watch" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Smart Watch Series 7</h6>
                <p className='text-dark'>From $399 or $16.62 for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/5001.png" className='img-fluid' alt="watch" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Big Screen</h5>
                <h6 className='text-dark'>Smart Watch Series 7</h6>
                <p className='text-dark'>From $399 or $16.62 for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>

      </Container>
      <Container class1="popular-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12 ">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {
            productState && productState?.map((item, index) => {
              if (item.tags === 'popular') {
                return (
                  <ProductCard
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    brand={item?.brand}
                    price={item?.price}
                    totalRating={item?.totalRating}
                    description={item?.description}
                    image={item?.images}
                  />
                )
              }
            })
          }
        </div>

      </Container>
      <Container class1="marque-wrapper py-5">

        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>


      </Container>
      <Container class1="blog-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Projects</h3>
          </div>
          <div className="row" >
            {
              blogState && blogState.map((item, index) => {
                if (index < 4) {
                  return (
                    <div className="col-3 mb-3"  key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images[0]?.url}
                        date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                      />
                    </div>

                  )
                }
              })
            }
          </div>
        </div>

      </Container>
    </>
  )
}

export default Home

