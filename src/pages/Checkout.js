import React from 'react'
import { Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Container from '../components/Container'
const Checkout = () => {
    return (
        <>
            <Container class1="checkout-wrapper home-wrapper-2 py-5">
                
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">AleeZa Mart</h3>
                                <nav style={{ "--bs-breadcrumb-divider": '>' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/cart" className='text-dark total-price' >Cart</Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">Shipping</li>
                                        &nbsp; /
                                        <li className="breadcrumb-item total-price active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h4 className="title total">Contact Information</h4>
                                <p className="user-details total">Alee Baba (alee@gmail.com)</p>
                                <h4> Shipping Information</h4>
                                <form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
                                    <div className='w-100'>
                                        <select name="" id="" className='form-control form-select'>
                                            <option value="" selected disabled>Select Country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder="First Name" className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder="Last Name" className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder="Address" className='form-control' />
                                    </div>
                                    <div className='w-100'>
                                        <input type="text" placeholder="Apartment, Suite, Etc" className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder="City" className='form-control' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select name="" id="" className='form-control form-select'>

                                            <option value="" selected disabled>Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type="text" placeholder="Zip Code" className='form-control' />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to='/cart' className='text-dark'>
                                                <BiArrowBack /> Return to Cart
                                            </Link>
                                            <Link className='button'>Continue to Shopping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className='d-flex mb-2 align-item-center border-bottom py-4 gap-10' gap-10>
                                <div className='w-75 d-flex gap-10'>
                                    <div className='w-25 position-relative'>
                                        <span style={{ top:'-10px', right:'2px' }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                                        <img src="images/watch.jpg" alt="product" className='img-fluid' />
                                    </div>
                                    <div>
                                        <h5 className="title total-price"> ABCD</h5>
                                        <p className='total-price'> S/ #fassda</p>
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>$ 800</h5>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='mb-0  total'>Sub Total</p>
                                    <p className='mb-0 total-price'>$ 800</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 200</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                                <h4 className='total'>Total</h4>
                                <h5 className='total-price'>$ 1000</h5>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Checkout