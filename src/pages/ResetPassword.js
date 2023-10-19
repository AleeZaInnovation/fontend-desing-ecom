import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { resetPassword } from '../features/users/userSlice'
import { useLocation, useNavigate } from 'react-router-dom'
let schema = yup.object().shape({
    password: yup
        .string()
        .required('Please enter your password.')
        .min(6, 'Your password is too short.'),
    retypePassword: yup
        .string()
        .required('Please retype your password.')
        .oneOf([yup.ref('password')], 'Your passwords do not match.')
});

const ResetPassword = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const getToken = location.pathname.split("/")[2];
    const formik = useFormik({
        initialValues: {
            password: '',
            retypePassword: '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(resetPassword({ token: getToken, password: values?.password }))
            navigate('/login');
        },
    });
    return (
        <>
            <Meta title={"Reset  Password"} />
            <BreadCrumb title="Reset  Password" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action="" onSubmit={formik.handleSubmit}>
                                <div className='d-flex flex-column gap-15'>
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
                                    <CustomInput
                                        className=' mb-2'
                                        type="password"
                                        label="Enter Password Confirmation"
                                        name="retypePassword"
                                        i_id="retypePassword"
                                        val={formik.values.retypePassword}
                                        onCh={formik.handleChange('retypePassword')}

                                    />
                                    <div className="error">
                                        {formik.touched.retypePassword && formik.errors.retypePassword ? (
                                            <div>{formik.errors.retypePassword}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Password is ok</button>
                                </div>
                            </form>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword