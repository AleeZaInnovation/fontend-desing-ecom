import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../features/users/userSlice'
let schema = yup.object().shape({
    email: yup.string().email("Email should be valid !").required("Email is Required"),
    password: yup.string().required("Password is Required"),
});


const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const authState = useSelector((state) => state?.auth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
        },
    });

    useEffect(() => {
        if (authState.user !== null && authState.isError === false) {
            navigate('/')
        }
    }, [authState])
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
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
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link to='/singup' className='button singup'>SingUp</Link>
                                </div>
                            </form>
                            <div>
                                <Link to="/forget-password">Forget Password ?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login