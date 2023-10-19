import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { getProductWishList } from '../features/users/userSlice'
import { addToWishList } from '../features/products/productSlice'
import { useNavigate } from 'react-router-dom'

const Wishlist = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist)

    // console.log(wishlistState);
    useEffect(() => {
        getWishListFromDb();
    }, [])
    const getWishListFromDb = () => {
        dispatch(getProductWishList())
    }
    const removeFromWish = ((id) => {
        dispatch(addToWishList(id));
        setTimeout(() => {
            dispatch(getProductWishList())
        }, 300)
    })

    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper py-5 home-wrapper-2">
                <div className="row">
                    {
                        (() => {
                            if (wishlistState?.length !== 0) {
                                return (
                                    wishlistState?.map((item, index) => {
                                        return (
                                            <div className="col-3" key={index}>
                                                <div className="wishlist-card position-relative">
                                                    <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' onClick={(e) => { removeFromWish(item?._id) }} />
                                                    <div className="product-card-image">
                                                        <img src={item?.images[0]?.url ? item?.images[0]?.url : "images/watch.jpg"} className="img-fluid max-auto" width={320} alt="product"
                                                            onClick={() => navigate('/product/' + item?._id)}
                                                        />
                                                    </div>
                                                    <div className=' px-3 py-3'>
                                                        <h5 className='title'>
                                                            {item?.title}
                                                        </h5>
                                                        <h6 className="price mb-3 mt-3">
                                                            $ {item?.price}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                )
                            } else {
                                return (
                                    <p className='text-center fs-5'>Your wishlist is empty</p>
                                )
                            }
                        })()
                    }
                </div>
            </Container>
        </>
    )
}

export default Wishlist