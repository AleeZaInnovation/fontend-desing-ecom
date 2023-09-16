import React, { useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { FiHeart } from 'react-icons/fi'
import { DiGitCompare } from 'react-icons/di'
import Container from '../components/Container';

const SingleProduct = () => {
    const [orderProdct, setorderProduct] = useState(true);
    const props = { width: '', height: '', zoomWidth: '', img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" };

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <Container class1="main-product-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="product-other-images d-flex flex-wrap gap-15">
                            <div><img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&w=1000&q=80" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&w=1000&q=80" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&w=1000&q=80" className='img-fluid' alt="" /></div>
                            <div><img src="https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&w=1000&q=80" className='img-fluid' alt="" /></div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className='title'>
                                    Best watch for kids and everywhere and flexible to use
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        edit={false}
                                        value={3}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 Reviews)</p>
                                </div>
                                <a href="#review" className='review'>Write a Review</a>
                            </div>
                            <div className=" py-3">
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className='product-head' >Type :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className='product-head' >Brand :</h3>
                                    <p className='product-data'>Havels</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className='product-head' >Category :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className='product-head' >Tags :</h3>
                                    <p className='product-data'>Watch</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className='product-head' >Availability :</h3>
                                    <p className='product-data'>In Stock</p>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                                    <h3 className='product-head' >Size :</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column mt-2 mb-3 ">
                                    <h3 className='product-head' >Color :</h3>
                                    <Color />
                                </div>
                                <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3 ">
                                    <h3 className='product-head' >Quantity :</h3>
                                    <div>
                                        <input
                                            type="number"
                                            name=""
                                            className='form-control'
                                            min={1}
                                            max={10}
                                            style={{ width: '70px' }}
                                            id=' ' />
                                    </div>
                                    <div className='gap-30 d-flex ms-5'>
                                        <button className='button border-0' type='submit'>Add to Cart</button>
                                        <button className='button singup'>Buy It Now</button>
                                    </div>
                                </div>
                                <div className="d-flex gap-15 align-items-center">
                                    <div>
                                        <a href="/"><FiHeart className='fs-5 me-2' /> Add to wishlist</a>
                                    </div>
                                    <div>
                                        <a href="/"><DiGitCompare className='fs-5 me-2' /> Add to compare</a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column my-3">
                                    <h3 className='product-head' >Shipping & Return :</h3>
                                    <p className='product-data'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex, exercitationem perspiciatis sapiente alias explicabo dolor, non officiis cupiditate iure ducimus reiciendis totam laboriosam veniam porro sed. Sequi, quidem itaque?</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-3">
                                    <h3 className='product-head' >Product Link :</h3>
                                    <a
                                        href='javascript:void(0);'
                                        onClick={() => {
                                            copyToClipboard("https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")
                                        }}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3>Description</h3>
                        <div className='bg-white p-3'>

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium beatae, facilis est ipsum nisi voluptatem sunt necessitatibus possimus cumque! Repellendus deleniti illum suscipit libero eius? Atque ducimus iusto nostrum doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident in sed facilis temporibus quam minus eaque dolorem, inventore blanditiis, eveniet corporis ipsam quae laboriosam harum, earum a impedit. Tempora, dolores.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="reviews-wrapper home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 id='review'>Reviews</h3>
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-end">
                                <div>
                                    <h4 className="mb-2">Customer Reviews</h4>

                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={false}
                                            value={3}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 Reviews</p>
                                    </div>
                                </div>
                                <div>
                                    {orderProdct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href="/">Write a Review</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='review-form py-4'>
                                <h4>Write a Review</h4>
                                <form action="" className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={true}
                                            value={0}
                                            activeColor="#ffd700"
                                        />
                                    </div>

                                    <div>
                                        <textarea name=""
                                            className="w-100 form-control"
                                            id=""
                                            cols="30"
                                            rows="4"
                                            placeholder='Comment'>
                                        </textarea>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <button className="button border-0">Submit Review</button>
                                    </div>
                                </form>

                            </div>
                            <div className="reviews py-4">
                                <div className="review">
                                    <div className="d-flex gap-10 align-items-center">
                                        <h6 className='mb-0'>Alee Baba</h6>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={false}
                                            value={3}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit soluta, alias nobis, ipsum laborum voluptas voluptates modi velit nisi reiciendis, facilis quos sapiente! Accusamus iusto veniam beatae! Neque, dolores ducimus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Here also you desire products</h3>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                </div>
            </Container>
        </>
    )
}

export default SingleProduct