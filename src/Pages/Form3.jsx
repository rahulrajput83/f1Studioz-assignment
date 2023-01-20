import React from 'react'
import { FaArrowLeft, FaEllipsisV } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FormSubNav from '../component/FormSubNav';


function Form3() {
  return (
    <div className='d-flex flex-column bg-bG min-vh-100 position-relative'>
      <FormSubNav backlink='/form2' title='Configure a new door' sub='2 of 3' />
    </div>
  )
}

export default Form3;