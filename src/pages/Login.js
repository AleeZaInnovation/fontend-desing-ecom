import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <div className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="text"
                                    name='email'
                                    placeholder='Email'
                                />
                                <CustomInput
                                    className='mb-2'
                                    type="password"
                                    name='password'
                                    placeholder='Password'
                                />
                            </div>
                            <div>
                                <Link to="/forget-password">Forget Password ?</Link>
                                <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                    <button className='button border-0' type='submit'>Login</button>
                                    <Link to='/singup' className='button singup'>SingUp</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login