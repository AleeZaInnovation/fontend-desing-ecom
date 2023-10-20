import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color'
import { FiHeart } from 'react-icons/fi'
import { DiGitCompare } from 'react-icons/di'
import Container from '../components/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addRating, getAProduct, getAllProducts } from '../features/products/productSlice';
import { toast } from 'react-toastify';
import { addToCart, getCart } from '../features/users/userSlice';


const SingleProduct = () => {
    const [color, setColor] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [alreadyAdded, setAlreadyAdded] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const getId = location.pathname.split("/")[2];
    const data = useSelector((state) => state?.product?.singleProduct)
    const productState = useSelector((state) => state?.product?.product)
    const addStat = useSelector((state) => state?.auth)
    const cartData = useSelector((state) => state?.auth?.getCartDetails)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAProduct(getId))
        dispatch(getCart())
        dispatch(getAllProducts())
    }, [])

    useEffect(() => {
        for (let index = 0; index < cartData?.length; index++) {
            if (getId === cartData[index]?.productId?._id)
                setAlreadyAdded(true)
        }
    }, [])

    const addedProToCart = () => {
        if (color === null) {
            toast.error("Please select color")
            return false;
        } else {
            dispatch(addToCart({ productId: data?._id, quantity, color, price: data?.price }));
            navigate("/cart")
        }
    }
    const [orderProdct, setorderProduct] = useState(true);
    const props = { width: '', height: '', zoomWidth: '', img: data?.images[0]?.url ? data?.images[0]?.url : "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGNofGVufDB8fDB8fHww&w=1000&q=80" };

    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }

    const [star, setStar] = useState(null)
    const [comment, setComment] = useState(null)

    const getTokenFromLocalStorage = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer"))
        : null;
    const addRatingToProduct = () => {
        if (getTokenFromLocalStorage?.token === undefined) {
            navigate('/login')
        } else {
            if (star === null) {
                toast.error("Please add star rating!")
                return false
            } else if (comment === null) {
                toast.error("Please write a review of this product!")
                return false
            } else {
                dispatch(addRating({ star: star, comment: comment, proId: getId }))
                setTimeout(() => {
                    dispatch(getAProduct(getId))
                }, 100);
                return false
            }
        }
    }
    return (
        <>
            <Meta title={data?.title} />
            <BreadCrumb title={data?.title} />
            <Container class1="main-product-wrapper home-wrapper-2 py-5"  >
                <div className="row">
                    <div className="col-6" >
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="product-other-images d-flex flex-wrap gap-15">
                            {
                                data?.images?.map((item, index) => {
                                    return (
                                        <div>
                                            <img src={item?.url} className='img-fluid' alt="" />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className='title'>
                                    {data?.title}
                                </h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">$ {data?.price}</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        edit={false}
                                        value={(data?.totalRating)}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>({data?.ratings?.length} Reviews)</p>
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
                                    <p className='product-data'>{data?.brand}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className='product-head' >Category :</h3>
                                    <p className='product-data'>{data?.category}</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center py-2">
                                    <h3 className='product-head' >Tags :</h3>
                                    <p className='product-data'>{data?.tags}</p>
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
                                    {
                                        alreadyAdded === false &&
                                        <>
                                            <h3 className='product-head' >Color :</h3>
                                            <Color setColor={setColor} colorData={data?.color} />
                                        </>
                                    }
                                </div>
                                <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3 ">
                                    {
                                        alreadyAdded === false &&
                                        <>
                                            <h3 className='product-head' >Quantity :</h3>
                                            <div>
                                                <input
                                                    type="number"
                                                    name=""
                                                    className='form-control'
                                                    min={1}
                                                    max={10}
                                                    onChange={(e) => { setQuantity(e.target.value) }}
                                                    value={quantity}
                                                    style={{ width: '70px' }}
                                                    id=' ' />
                                            </div>
                                        </>
                                    }
                                    <div className={alreadyAdded ? "ms-0" : "ms-5" + 'gap-30 d-flex align-items-center'}>
                                        <button className='button border-0' onClick={() => {
                                            alreadyAdded ? navigate("/cart") : addedProToCart()
                                        }}>
                                            {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                                        </button>
                                        {/* <button className='button singup'>Buy It Now</button> */}
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
                                    <a href='javascript:void(0);'
                                        onClick={() => {
                                            copyToClipboard(window.location.href)
                                        }}>
                                        Copy Product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
            <Container class1="description-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <h3>Description</h3>
                        <div className='bg-white p-3'>

                            <p dangerouslySetInnerHTML={{ __html: data?.description }}>
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
                                            value={data?.totalRating}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on {data?.ratings?.length} Reviews</p>
                                    </div>
                                </div>
                                <div>
                                    {orderProdct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href="#write-review">Write a Review</a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='review-form py-4' id="write-review">
                                <h4>Write a Review</h4>
                                <div>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        edit={true}
                                        value={0}
                                        activeColor="#ffd700"
                                        onChange={(e) => {
                                            setStar(e)
                                        }}
                                    />
                                </div>

                                <div>
                                    <textarea name=""
                                        className="w-100 form-control"
                                        id=""
                                        cols="30"
                                        rows="4"
                                        placeholder='Comment'
                                        onChange={(e) => {
                                            setComment(e.target.value)
                                        }}
                                    >

                                    </textarea>
                                </div>
                                <div className='d-flex justify-content-end mt-3'>
                                    <button onClick={addRatingToProduct} className="button border-0" type='button'>Submit Review</button>
                                </div>
                            </div>
                            <div className="reviews py-4">
                                {
                                    data && data?.ratings?.map((item, index) => {
                                        return (
                                            <div key={index} className="review">
                                                <div className="d-flex gap-10 align-items-center">
                                                    <h6 className='mb-0'>{item?.commentBy}</h6>
                                                    <ReactStars
                                                        count={5}
                                                        size={24}
                                                        edit={false}
                                                        value={item?.star}
                                                        activeColor="#ffd700"
                                                    />
                                                </div>
                                                <p className='mt-3'>
                                                    {item?.comment}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="popular-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
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
        </>
    )
}

export default SingleProduct