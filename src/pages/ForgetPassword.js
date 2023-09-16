import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
const ForgetPassword = () => {
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
                            <div className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="text"
                                    name='email'
                                    placeholder='Email'
                                />
                            </div>
                            <div>
                                <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Submit</button>
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