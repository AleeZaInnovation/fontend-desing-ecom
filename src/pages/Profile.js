import React, { useEffect, useState } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from '../features/users/userSlice'
import { FiEdit } from 'react-icons/fi'


let schema = yup.object().shape({
    firstname: yup.string().required("First name is Required"),
    lastname: yup.string().required("Last name is Required"),
    email: yup.string().email("Email should be valid !").required("Email is Required"),
    mobile: yup.string().required("Mobile is Required"),
});

const Profile = () => {
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
    const dispatch = useDispatch();
    const authState = useSelector((state) => state?.auth?.user);
    const [edit, setEdit] = useState(true)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstname: authState?.firstname || '',
            lastname: authState?.lastname || '',
            email: authState?.email || '',
            mobile: authState?.mobile || '',
        },
        validationSchema: schema,
        onSubmit: (values) => {
            dispatch(updateProfile({ data: values, config2: config2 }))
            setEdit(true);
        },
    });


    return (
        <>
            <Meta title={"My Profile"} />
            <BreadCrumb title="My Profile" />
            <Container class1="login-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='text-center mb-3'>Update Profile</h3>
                            <FiEdit className='fs-3' onClick={() => setEdit(false)} />
                        </div>
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div className='d-flex flex-column gap-15'>
                                <CustomInput
                                    type="text"
                                    label="First Name"
                                    name="firstname"
                                    i_id="firstname"
                                    val={formik.values.firstname}
                                    onCh={formik.handleChange('firstname')}
                                    dis={edit}
                                />
                                <div className="error">
                                    {formik.touched.firstname && formik.errors.firstname ? (
                                        <div>{formik.errors.firstname}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    type="text"
                                    label="Last Name"
                                    name="lastname"
                                    i_id="lastname"
                                    val={formik.values.lastname}
                                    onCh={formik.handleChange('lastname')}
                                    dis={edit}

                                />
                                <div className="error">
                                    {formik.touched.lastname && formik.errors.lastname ? (
                                        <div>{formik.errors.lastname}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    type="email"
                                    label="Email Address"
                                    name="email"
                                    i_id="email"
                                    val={formik.values.email}
                                    onCh={formik.handleChange('email')}
                                    dis={edit}
                                />
                                <div className="error">
                                    {formik.touched.email && formik.errors.email ? (
                                        <div>{formik.errors.email}</div>
                                    ) : null}
                                </div>
                                <CustomInput
                                    type="text"
                                    label="Mobile Number"
                                    name="mobile"
                                    i_id="mobile"
                                    val={formik.values.mobile}
                                    onCh={formik.handleChange('mobile')}
                                    dis={edit}
                                />
                                <div className="error">
                                    {formik.touched.mobile && formik.errors.mobile ? (
                                        <div>{formik.errors.mobile}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='mt-3 d-flex  align-items-start gap-15'>
                                {
                                    edit === false && <button className='button border-0' type='submit'>Update Profile</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Profile