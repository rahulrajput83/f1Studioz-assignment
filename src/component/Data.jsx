import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaUsers } from 'react-icons/fa'
import Add from './Add'
import { dateDiff } from './Date'

function Data(props) {
  return (
    <div className='d-flex flex-column gap-2 p-2'>
          

          {/* Cart Item visible for small Screen */}
          <div className='d-flex d-lg-none gap-2 d-xl-none d-xxl-none flex-column'>
            {props.filterData.map((e, i) => {
              return (
                <div key={`cartdata-${i}`} className='shadow-sm d-flex flex-column gap-2 px-3 py-2  bg-white rounded'>
                  <div className='d-flex flex-row align-items-center justify-content-between'>
                    <span className='d-flex flex-row sizeSmall gap-2'>Group Name <span className='weight'>#{e.name}</span></span>
                    {e.id ? <span className='d-flex flex-row sizeSmall gap-2'>Cart <span className='weight'>#{e.id}</span></span> : null}
                  </div>
                  <span className='text-gray weight'>{e.info}</span>
                  <div className='d-flex gap-2 flex-row align-items-center justify-content-between'>
                    <div className='d-flex flex-row align-items-center gap-2'>
                      <span className={`size weight ${dateDiff(e.expiry) < 10 ? 'text-orange' : 'text-darkGray'}`}>Expires in {dateDiff(e.expiry)} days</span>
                      {e.share ? <span className='d-flex flex-row align-items-center gap-1 size weight text-darkGray'>
                        <FaUsers />
                        <span>Shared</span>
                      </span> : null}
                    </div>
                    {dateDiff(e.expiry) < 10 ? <span className='py-1 size px-3 bg-lightGreen rounded-pill text-green fw-bold'>NEW</span> : null}
                  </div>

                </div>
              )
            })}
          </div>

          {/* Cart Item Visible for large Screen */}
          <div className='d-none d-lg-flex py-2 gap-0 px-3 flex-column'>
            <Row className='bg-white gap-0 rounded-top p-2'>
              <Col lg={4}>
                <span className='text-uppercase text-headCol weight w-100 size'>Product information</span>
              </Col>
              <Col lg={2}>
                <span className='text-uppercase text-headCol weight w-100 size'>Cart Name</span>
              </Col>
              <Col lg={2}>
                <span className='text-uppercase text-headCol weight w-100 size'>Shipping point</span>
              </Col>
              <Col lg={2}>
                <span className='text-uppercase text-headCol weight size w-100'>Created By</span>
              </Col>
              <Col lg={2}>
                <span className='text-uppercase text-headCol weight size w-100'>Expiry</span>
              </Col>
            </Row>
            {props.filterData.map((e, i) => {
              return (
                <Row key={`largeCart-${i}`} className={`p-2 ${i % 2 !== 0 ? 'bg-white' : 'bg-headBg'} ${i === props.filterData.length - 1 ? 'rounded-bottom' : ''}`}>
                  <Col lg={4}>
                    <span className='size weight'>{e.info}</span>
                  </Col>
                  <Col lg={2}>
                    <span className='size'>{e.name}</span>
                  </Col>
                  <Col lg={2}>
                    <span className='size w-100'>{e.shipping}</span>
                  </Col>
                  <Col lg={2}>
                    <span className='size w-100'>{e.created}</span>
                  </Col>
                  <Col lg={2} className='gap-1 d-flex '>
                    <span className={`size w-100 weight ${dateDiff(e.expiry) < 10 ? 'text-orange' : 'text-darkGray'}`}>Expires in {dateDiff(e.expiry)} days</span>
                    {dateDiff(e.expiry) < 10 ? <span className='py-1 sizeSmall px-2 bg-lightGreen rounded-pill text-green fw-bold'>NEW</span> : null}
                  </Col>
                </Row>
              )
            })}
          </div>
          <Add />
        </div>
  )
}

export default Data