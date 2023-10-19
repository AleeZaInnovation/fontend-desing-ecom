import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { createAnOrder, emptyCart, getCart } from '../features/users/userSlice';
import * as yup from "yup";
import { useFormik } from "formik";
import axios from 'axios';
import { config } from "../utils/axiosconfig";


let schema = yup.object().shape({
    country: yup.string().required("Country is Required"),
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is Required"),
    address: yup.string().required("Address is Required"),
    other: yup.string().required("Other is Required"),
    city: yup.string().required("City is Required"),
    state: yup.string().required("State is Required"),
    pincode: yup.string().required("Zip Code is Required"),
});

const Checkout = () => {
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
    const cartState = useSelector((state) => state?.auth?.getCartDetails)
    const authState = useSelector((state) => state?.auth)
    const userDetails = useSelector((state) => state?.auth?.user)
    const [totalAmount, setTotalAmount] = useState(null);
    const [infoShipping, setShippingInfo] = useState(null);
    const [cartProduct, setCartProduct] = useState([]);
    const navigate = useNavigate()
    // console.log(shippingInfo, paymentInfo)
    useEffect(() => {
        dispatch(getCart(config2))
    }, [])
    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + (Number(cartState[index].quantity) * (cartState[index].price))
            setTotalAmount(sum)
        }
    }, [cartState])
    // useEffect(() => {
    //     if (authState.order !== null) {
    //         window.location.reload()
    //         navigate('/my-orders')
    //     }
    // }, [authState])
    const formik = useFormik({
        initialValues: {
            country: '',
            firstname: '',
            lastname: '',
            address: '',
            other: '',
            city: '',
            state: '',
            pincode: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            setShippingInfo(values)
            localStorage.setItem("address", JSON.stringify(values))
            setTimeout(() => {
                checkOutHandler();
            }, 500)
        },
    });

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            }
            script.onerror = () => {
                resolve(false);
            }
            document.body.appendChild(script)
        })
    }

    useEffect(() => {
        let items = []
        for (let index = 0; index < cartState?.length; index++) {
            items.push({ product: cartState[index].productId._id, quantity: cartState[index].quantity, color: cartState[index].color._id, price: cartState[index].price, })
        }
        setCartProduct(items)
    }, [])
    console.log(totalAmount, infoShipping, cartProduct)


    const checkOutHandler = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
        if (!res) {
            alert("Razorpay SKD failed to load !")
            return;
        }
        const result = await axios.post("http://localhost:5000/api/v1/user/order/checkout", { amount: totalAmount + 80 }, config)
        if (!result) {
            alert("Something went wrong")
            return;
        }
        const { amount, id: order_id, currency } = result.data.order
        // console.log(result)
        const options = {
            key: "rzp_test_Q3jFiZt3WXqt48", // Enter the Key ID generated from the Dashboard
            amount: amount?.toString(),
            currency: currency,
            name: "AleeZa Mart.",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                };

                const result = await axios.post("http://localhost:5000/api/v1/user/order/payment-verification", data, config);


                console.log(infoShipping);
                dispatch(createAnOrder({ totalPrice: totalAmount, totalPriceAfterDiscount: totalAmount, orderItems: cartProduct, paymentInfo: result.data, shippingInfo: JSON.parse(localStorage.getItem('address')) }, 3000)
                );
                localStorage.removeItem('address');
                dispatch(emptyCart());
                navigate('/my-orders');
            },
            prefill: {
                name: "AleeZa Mart",
                email: "aleeza@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "AleeZa Mart Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

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
                            <p className="user-details total">{userDetails?.firstname} {userDetails?.lastname} ({userDetails?.email})</p>
                            <h4> Shipping Information</h4>
                            <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-wrap gap-15 justify-content-between'>
                                <div className='w-100'>
                                    <select
                                        name="country"
                                        id="country"
                                        className='form-control form-select'
                                        onChange={formik.handleChange('country')}
                                        onBlur={formik.handleBlur('country')}
                                        value={formik.values.country}>
                                        <option value="" selected disabled>Select Country</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="india">India</option>
                                        <option value="pakistan">Pakistan</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <div className="error">
                                        {formik.touched.country && formik.errors.country ? (
                                            <div>{formik.errors.country}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className='form-control'
                                        name="firstname"
                                        id="firstname"
                                        onChange={formik.handleChange('firstname')}
                                        onBlur={formik.handleBlur('firstname')}
                                        value={formik.values.firstname}
                                    />
                                    <div className="error">
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div>{formik.errors.firstname}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className='form-control'
                                        name="lastname"
                                        id="lastname"
                                        onChange={formik.handleChange('lastname')}
                                        onBlur={formik.handleBlur('lastname')}
                                        value={formik.values.lastname}
                                    />
                                    <div className="error">
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div>{formik.errors.lastname}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        className='form-control'
                                        name="address"
                                        id="address"
                                        onChange={formik.handleChange('address')}
                                        onBlur={formik.handleBlur('address')}
                                        value={formik.values.address}
                                    />
                                    <div className="error">
                                        {formik.touched.address && formik.errors.address ? (
                                            <div>{formik.errors.address}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='w-100'>
                                    <input
                                        type="text"
                                        placeholder="Apartment, Suite, Etc"
                                        className='form-control'
                                        name="other"
                                        id="other"
                                        onChange={formik.handleChange('other')}
                                        onBlur={formik.handleBlur('other')}
                                        value={formik.values.other}
                                    />
                                    <div className="error">
                                        {formik.touched.other && formik.errors.other ? (
                                            <div>{formik.errors.other}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className='form-control'
                                        name="city"
                                        id="city"
                                        onChange={formik.handleChange('city')}
                                        onBlur={formik.handleBlur('city')}
                                        value={formik.values.city}
                                    />
                                    <div className="error">
                                        {formik.touched.city && formik.errors.city ? (
                                            <div>{formik.errors.city}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <select
                                        name="state"
                                        id="state"
                                        className='form-control form-select'
                                        onChange={formik.handleChange('state')}
                                        onBlur={formik.handleBlur('state')}
                                        value={formik.values.state}
                                    >
                                        <option value="" selected disabled>Select State</option>
                                        <option value="lamabazar">Lamabazar</option>
                                        <option value="zindabazar">Zindabazar</option>
                                        <option value="bondor">Bondor</option>
                                        <option value="ambarkhana">Ambarkhana</option>
                                        <option value="modina">Modina</option>
                                    </select>
                                    <div className="error">
                                        {formik.touched.state && formik.errors.state ? (
                                            <div>{formik.errors.state}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='flex-grow-1'>
                                    <input
                                        type="text"
                                        placeholder="Zip Code"
                                        className='form-control'
                                        name="pincode"
                                        id="pincode"
                                        onChange={formik.handleChange('pincode')}
                                        onBlur={formik.handleBlur('pincode')}
                                        value={formik.values.pincode}
                                    />
                                    <div className="error">
                                        {formik.touched.pincode && formik.errors.pincode ? (
                                            <div>{formik.errors.pincode}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to='/cart' className='text-dark'>
                                            <BiArrowBack /> Return to Cart
                                        </Link>
                                        <Link to='/product' className='button singup' type='submit'>Continue to Shopping</Link>
                                        <button className='button' type='submit'  >Place Order</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-5">
                        {
                            cartState && cartState?.map((item, index) => {
                                return (
                                    <div key={index} className='d-flex mb-2  justify-content-between align-items-center border-bottom py-4 gap-10' >
                                        <div className='w-75 d-flex gap-10'>
                                            <div className='w-25 position-relative'>
                                                <span style={{ top: '-10px', right: '2px' }} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">{item?.quantity}</span>
                                                <img src={item?.productId?.images[0]?.url ? item?.productId?.images[0]?.url : "images/blog-1.jpg"} alt="product" className='img-fluid' />
                                            </div>
                                            <div>
                                                <h5 className="title total-price"> {item?.productId?.title}</h5>
                                                <p className='d-flex gap-3'>Color:
                                                    <ul className="colors ps-0">
                                                        <li style={{ backgroundColor: item?.color?.title }}>
                                                        </li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex-wrap-1'>
                                            <h5 className='total'>$ {(item?.price * item?.quantity).toFixed(2)}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='border-bottom py-4'>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='mb-0  total'>Sub Total</p>
                                <p className='mb-0 total-price'>$ {totalAmount ? totalAmount.toFixed(2) : 0}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='mb-0 total'>Shipping</p>
                                <p className='mb-0 total-price'>$ {(0 + 80).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                            <h4 className='total'>Total</h4>
                            <h5 className='total-price'>$ {totalAmount ? (totalAmount + 80).toFixed(2) : 0}</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

// nullnavdeep@axl

export default Checkout