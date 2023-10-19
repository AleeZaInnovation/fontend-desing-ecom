import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { forgetPassword } from '../features/users/userSlice'
let schema = yup.object().shape({
    email: yup.string().email("Email should be valid !").required("Email is Required"),
});


const ForgetPassword = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(forgetPassword(values))

        },
    });
    return (
        <>
            <Meta title={"Forget Password"} />
            <BreadCrumb title="Forget Password" />
            <Container class1="login-wrapper home-wrapper-2 py-5">

                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Forget Password</h3>
                            <p className="text-center mt-2 mb-2">
                                We will send you an email to reset your password
                            </p>
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className='d-flex flex-column gap-15'>
                                    <CustomInput
                                        type="text"
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
                                </div>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Send Email</button>
                                </div>
                            </form>
                            <div>
                                <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                                    <Link to='/login'>Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ForgetPassword