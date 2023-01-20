import React from 'react'
import Navbar from '../component/Navbar'
import { FaAngleRight, FaArrowLeft, FaEllipsisV } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import FormSubNav from '../component/FormSubNav'

const Data = [
  {
    title: 'Configure your door from scratch',
    desc: 'Residential, Commerical, Entry doors'
  },
  {
    title: 'Parts / Openers',
    desc: 'Order Parts and Openers'
  },
  {
    title: 'Direct Item Entry',
    desc: 'Order Parts / Openers using a Product ID'
  },
  {
    title: 'Choose from favourites',
    desc: 'Re-order door from your favourites'
  }
]

function Form1() {
  return (
    <div className='d-flex flex-column bg-bG min-vh-100'>
      <FormSubNav backlink='/' title='Configure a new order' sub='' />
      <div className='d-flex flex-column p-3 gap-3 justify-content-center mt-0'>
        {Data.map((e, i) => {
          return (
            <Link to='/form2' key={`form1-${i}`} className='text-decoration-none px-3 py-2 d-flex flex-row align-items-center justify-content-between gap-2 col mx-lg-auto col-lg-6 shadow p-3 bg-white rounded-1'>
              <div className='d-flex w-100 flex-column'>
                <span className='text-textDarkGray weight fs-6'>{e.title}</span>
                <span className='text-darkGray size'>{e.desc}</span>
              </div>
              <FaAngleRight className='text-brown' />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Form1;