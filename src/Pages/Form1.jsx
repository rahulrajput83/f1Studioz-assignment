import React from 'react'
import Navbar from '../component/Navbar'
import { FaArrowLeft, FaEllipsisV } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Form1() {
  return (
    <div className='d-flex flex-column'>
      <div className='d-none d-lg-block'>
        <Navbar />
      </div>
      <div className='d-flex text-white p-3 bg-gray flex-row align-items-center justify-content-between gap-2'>
        <div className='d-flex gap-3 justify-content-center align-items-center flex-row'>
          <Link to='/' className='text-decoration-none'>
            <FaArrowLeft className='fs-5 text-white m-0 text-decoration-none p-0' />
          </Link>
          <span className=''>Create a new door</span>
        </div>
        <FaEllipsisV className='fs-5' />
      </div>
    </div>
  )
}

export default Form1