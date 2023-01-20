import React from 'react'
import { FaArrowLeft, FaEllipsisV } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function FormSubNav(props) {
  return (
    <>
        <div className='d-none d-lg-block'>
        <Navbar />
      </div>
      <div className='d-flex text-white p-3 bg-gray flex-row align-items-center justify-content-between gap-2'>
        <div className='d-flex gap-3 justify-content-center align-items-center flex-row'>
          <Link to={props.backlink} className='text-decoration-none d-flex justify-content-center align-items-center'>
            <FaArrowLeft className='fs-5 text-white m-0 text-decoration-none p-0' />
          </Link>
          <div className='d-flex size flex-column flex-md-row'>
            <span className=''>{props.title}</span>
            {props.sub ? <span className='ms-lg-4 text-headCol'>{props.sub}</span> : null}
          </div>
        </div>
        <FaEllipsisV className='fs-5' />
      </div>
    </>
  )
}

export default FormSubNav