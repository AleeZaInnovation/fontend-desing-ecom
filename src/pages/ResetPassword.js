import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset  Password"} />
            <BreadCrumb title="Reset  Password" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <div className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                />
                                <CustomInput
                                    className='mt-1 mb-2'
                                    type="password"
                                    name='confirmPassword'
                                    placeholder='Confirm Password'
                                />
                            </div>
                            <div>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ResetPassword