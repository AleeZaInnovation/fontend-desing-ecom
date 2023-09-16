import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
  const { gird } = props
  let location = useLocation()
  return (
    <>
      <div className={`${location.pathname === "/product" ? `gr-${gird}` : "col-3"}`}>
        <Link to='/product/:id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/speaker.jpg" className="img-fluid" alt="product" />

          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="title">Kids headphones for very usefull for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={3}
              activeColor="#ffd700"
            />
            <p className={`description ${gird === 12 ? "d-block" : "d-none"}`}> watch, Portable timepiece designed to be worn on the wrist or carried in the pocket. The first watches appeared shortly after 1500, when the mainspring (see spring) was invented as a replacement for weights in driving clocks. </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className='border-0 bg-transparent'>
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/view.svg" alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="addcart" />
              </button>

            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/product" ? `gr-${gird}` : "col-3"}`}>
        <Link to='/product/:id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className='border-0 bg-transparent'>
              <img src="images/wish.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            <img src="images/speaker.jpg" className="img-fluid" alt="product" />

          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="title">Kids headphones for very usefull for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={3}
              activeColor="#ffd700"
            />
            <p className={`description ${gird === 12 ? "d-block" : "d-none"}`}> watch, Portable timepiece designed to be worn on the wrist or carried in the pocket. The first watches appeared shortly after 1500, when the mainspring (see spring) was invented as a replacement for weights in driving clocks. </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <button className='border-0 bg-transparent'>
                <img src="images/prodcompare.svg" alt="compare" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/view.svg" alt="view" />
              </button>
              <button className='border-0 bg-transparent'>
                <img src="images/add-cart.svg" alt="addcart" />
              </button>

            </div>
          </div>
        </Link>
      </div>

    </>
  )
}

export default ProductCard