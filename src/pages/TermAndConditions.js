import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const TermAndConditions = () => {
  return (
    <>
      <Meta title={"Terms & Conditions"} />
      <BreadCrumb title="Terms & Conditions" />
      <Container class1="policy-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="policy">

            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default TermAndConditions