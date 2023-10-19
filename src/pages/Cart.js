import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiFillDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, getCart, quantityCart } from '../features/users/userSlice'

const Cart = () => {
    const getTokenFromLocalStorage = localStorage.getItem("customer")
        ? JSON.parse(localStorage.getItem("customer"))
        : null;

    const config2 = {
        headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
                }`,
            Accept: "application/json",
        },
    };
    const dispatch = useDispatch()
    const [productUpdate, setProductUpdate] = useState(null);
    const [totalAmount, setTotalAmount] = useState(null);
    const data = useSelector((state) => state?.auth?.getCartDetails)
    useEffect(() => {
        dispatch(getCart(config2))
    }, [])
    const deleteData = (id) => {
        dispatch(deleteCart({id:id,config2:config2}))
        setTimeout(() => {
            dispatch(getCart(config2))
        }, 200)
    }

    useEffect(() => {
        dispatch(quantityCart({ id: productUpdate?.id, quantity: productUpdate?.quantity }))
        setTimeout(() => {
            dispatch(getCart(config2))
        }, 200)
    }, [productUpdate])

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < data?.length; index++) {
            sum = sum + (Number(data[index].quantity) * (data[index].price))
            setTotalAmount(sum)
        }
    }, [data])

    return (
        <>
            <Meta title={"Your shopping cart"} />
            <BreadCrumb title="Your shopping cart" />
            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        {
                            data && data?.map((item, index) => {
                                return (
                                    <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center" key={index}>
                                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                            <div className='w-25'>
                                                <img src={item?.productId?.images[0]?.url ? item?.productId?.images[0]?.url : "images/blog-1.jpg"}
                                                    alt="productimage"
                                                    className='img-fluid' />
                                            </div>
                                            <div className="w-75">
                                                <p >{item?.productId?.title}</p>
                                                {/* <p >Size : M</p> */}

                                                <p className='d-flex gap-3'>Color:
                                                    <ul className="colors ps-0">
                                                        <li style={{ backgroundColor: item?.color?.title }}>
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='cart-col-2'>
                                            <h5 className='price'>$ {(item?.price)?.toFixed(2)}</h5>
                                        </div>
                                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                                            <div>
                                                <input
                                                    type="number"
                                                    name=""
                                                    id=""
                                                    className='form-control'
                                                    min={1}
                                                    max={10}
                                                    onChange={(e) => { setProductUpdate({ id: item?._id, quantity: e.target.value }) }}
                                                    value={productUpdate?.id?.quantity ? productUpdate?.quantity : item?.quantity}

                                                />
                                            </div>
                                            <div>
                                                <AiFillDelete onClick={(e) => { deleteData(item?._id) }} className='text-danger fs-4' />
                                            </div>
                                        </div>
                                        <div className='cart-col-4'>
                                            <h5 className='price'>$ {(item?.price * item?.quantity)?.toFixed(2)}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className='col-12 py-2 mt-4'>
                            <div className="d-flex justify-content-between align-items-baseline ">
                                <div className="pt-5">
                                    <Link to='/product' className='button'>
                                        Continue To Shopping
                                    </Link>
                                </div>
                                {
                                    (totalAmount !== null || totalAmount !== 0) &&
                                    <div className='d-flex flex-column align-items-end'>
                                        <div>
                                            <h4>Subtotal: $ {totalAmount ? (totalAmount)?.toFixed(2) : 0.00}</h4>
                                            <p>Taxes and shipping calculate at checkout</p>
                                            <Link className='button' to='/checkout'>
                                                Checkout
                                            </Link>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart