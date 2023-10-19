import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from '../features/users/userSlice'


let schema = yup.object().shape({
    firstname: yup.string().required("First name is Required"),
    lastname: yup.string().required("Last name is Required"),
    email: yup.string().email("Email should be valid !").required("Email is Required"),
    mobile: yup.string().required("Mobile is Required"),
    password: yup.string().required("Password is Required"),
});

const Singup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(registerUser(values))
            navigate('/login')
        },
    });


    return (
        <>
            <Meta title={"Sing Up"} />
            <BreadCrumb title="Sing Up" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Sing Up</h3>
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className='d-flex flex-column gap-15'>
                                    <CustomInput
                                        type="text"
                                        label="Enter First Name"
                                        name="firstname"
                                        i_id="firstname"
                                        val={formik.values.firstname}
                                        onCh={formik.handleChange('firstname')}

                                    />
                                    <div className="error">
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div>{formik.errors.firstname}</div>
                                        ) : null}
                                    </div>
                                    <CustomInput
                                        type="text"
                                        label="Enter Last Name"
                                        name="lastname"
                                        i_id="lastname"
                                        val={formik.values.lastname}
                                        onCh={formik.handleChange('lastname')}

                                    />
                                    <div className="error">
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div>{formik.errors.lastname}</div>
                                        ) : null}
                                    </div>
                                    <CustomInput
                                        type="email"
                                        label="Enter Email Address"
                                        name="email"
                                        i_id="email"
                                        val={formik.values.email}
                                        onCh={formik.handleChange('email')}

                                    />
                                    <div className="error">
                                        {formik.touched.email && formik.errors.email ? (
                                            <div>{formik.errors.email}</div>
                                        ) : null}
                                    </div>
                                    <CustomInput
                                        type="text"
                                        label="Enter Mobile Number"
                                        name="mobile"
                                        i_id="mobile"
                                        val={formik.values.mobile}
                                        onCh={formik.handleChange('mobile')}

                                    />
                                    <div className="error">
                                        {formik.touched.mobile && formik.errors.mobile ? (
                                            <div>{formik.errors.mobile}</div>
                                        ) : null}
                                    </div>
                                    <CustomInput
                                        className=' mb-2'
                                        type="password"
                                        label="Enter Password"
                                        name="password"
                                        i_id="password"
                                        val={formik.values.password}
                                        onCh={formik.handleChange('password')}

                                    />
                                    <div className="error">
                                        {formik.touched.password && formik.errors.password ? (
                                            <div>{formik.errors.password}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Sing Up</button>
                                </div>
                            </form>
                            <div>
                                <Link to="/login">Already have an account ?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Singup