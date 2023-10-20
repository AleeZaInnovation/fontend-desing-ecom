import React from 'react'
import ReactStars from "react-rating-stars-component";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addToWishList, getAProduct } from '../features/products/productSlice';
import compare from '../images/cross.svg'
import addcart from '../images/add-cart.svg'
import view from '../images/view.svg'
import wishlist from '../images/wish.svg'
import images from '../images/headphone.jpg'
const ProductCard = (props) => {
  const { id, title, brand, description, image, price, totalRating, gird } = props
  console.log(image)
  let location = useLocation()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToWish = ((id) => {
    dispatch(addToWishList(id))
  })
  const goToLink = () => {
    navigate('/product/' + id)
    dispatch(getAProduct(id))
  }

  return (
    <>
      <div
        className={`${location.pathname === "/product" ? `gr-${gird}` : "col-3"} mb-3`}>
        <div to='' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent' onClick={(e) => { addToWish(id) }}>
              <img src={wishlist} alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src={image[0]?.url ? image[0].url : images} className="img-fluid max-auto" width={320} alt="product" onClick={() => goToLink()} />
            <img onClick={() => goToLink()} src={image[1]?.url ? image[1].url : images} className="img-fluid max-auto" width={320} alt="product" />

          </div>
          <div className="product-details mt-3">
            <h6 className="brand">{brand}</h6>
            <h5 className="title" onClick={() => goToLink()}>{title.substr(0, 40) + "..."}
            </h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={totalRating}
              activeColor="#ffd700"
            />
            <p className={`description ${gird === 12 ? "d-block" : "d-none"}`}
              dangerouslySetInnerHTML={{ __html: description }}>
            </p>
            <p className="price">$ {price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className='border-0 bg-transparent'>
                <img src={compare} alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img onClick={() => goToLink()} src={view} alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src={addcart} alt="addcart" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard