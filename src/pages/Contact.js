import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { BsInfoCircle, BsTelephoneInbound } from 'react-icons/bs'
import Container from '../components/Container'

const Contact = () => {
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
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control" placeholder='Mobile Number' />
                    </div>
                    <div>
                      <textarea name=""
                        className="w-100 form-control"
                        id=""
                        cols="30"
                        rows="4"
                        placeholder='Comment'>
                      </textarea>
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