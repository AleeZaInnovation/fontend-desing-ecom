import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container class1="wishlist-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className=' px-3 py-3'>
                                <h5 className='title'>
                                    Honor Best selling with ram and rom best products for ever
                                </h5>
                                <h6 className="price mb-3 mt-3">
                                    $ 100
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src="images/cross.svg" alt="cross" className='position-absolute cross img-fluid' />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" className='img-fluid w-100' alt="watch" />
                            </div>
                            <div className=' px-3 py-3'>
                                <h5 className='title'>
                                    Honor Best selling with ram and rom best products for ever
                                </h5>
                                <h6 className="price mb-3 mt-3">
                                    $ 100
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Wishlist