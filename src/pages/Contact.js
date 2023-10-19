import React, { useEffect } from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BsInfoCircle, BsTelephoneInbound } from 'react-icons/bs'
import Container from '../components/Container'
  ; import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createContact, resetState } from '../features/contact/contactSlice'
let schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  email: yup.string().email("Email should be valid !").required("Email is Required"),
  mobile: yup.number().required("Mobile is Required"),
  comment: yup.string().required("Comment is Required"),

});
const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createContact(values))
      window.location.reload();
      // alert(JSON.stringify(values));
    },
  });
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">

        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1809.5549766322615!2d91.85833769323165!3d24.894230843907682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1694489042023!5m2!1sen!2sbd"
              width="600"
              height="450"
              className='broder-0 w-100'
              allowFullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className="contact-inner-wrapper justify-content-between d-flex">
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action="" onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Name'
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange('name')}
                      onBlur={formik.handleBlur('name')}

                    />
                    <div className="error">
                      {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder='Email'
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange('email')}
                      onBlur={formik.handleBlur('email')}

                    />
                    <div className="error">
                      {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder='Mobile Number'
                      name="mobile"
                      id=''
                      onChange={formik.handleChange('mobile')}
                      onBlur={formik.handleBlur('mobile')}
                      value={formik.values.mobile}

                    />
                    <div className="error">
                      {formik.touched.mobile && formik.errors.mobile ? (
                        <div>{formik.errors.mobile}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <textarea
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder='Comment'
                      name="comment"
                      value={formik.values.comment}
                      onChange={formik.handleChange('comment')}
                      onBlur={formik.handleBlur('comment')}
                    >
                    </textarea>
                    <div className="error">
                      {formik.touched.comment && formik.errors.comment ? (
                        <div>{formik.errors.comment}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title mb-4">Get in touch with us</h3>
                <div>
                  <ul className="ps-0" style={{ "list-style-type": "none" }}>
                    <li className='mb-3 d-flex gap-15  align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>
                        Hno: 34(c) Beside Lavista Hotel, shekpara,Lamabazar,Sylhet PinCode: 3100
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsTelephoneInbound className='fs-5' />
                      <a href="tel:+8801719-948515">+880 1719 948515</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href="mailto:aleezainnovation@gmail.com" >aleezainnovation@gmail.com</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday-Friday 10AM-8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact