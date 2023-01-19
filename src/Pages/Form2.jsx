import React from 'react'
import { FaAngleDown, FaArrowLeft, FaEllipsisV, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar';

const Category = ["Residential Door", "Not Available", "Other"];
const Style = ["Canyon Ridge® Collection", "Not Available", "Other"];
const Type = ["CAN 212", "CAN 200", "CAN 100"];
const ShippingPoint = ["Russia Plant-ABC", "Russia Plant", "Other"];

function Form2() {
    return (
        <div className='d-flex flex-column bg-bG min-vh-100'>
            <div className='d-none d-lg-block'>
                <Navbar />
            </div>
            <div className='d-flex text-white p-3 bg-gray flex-row align-items-center justify-content-between gap-2'>
                <div className='d-flex gap-3 justify-content-center align-items-center flex-row'>
                    <Link to='/form1' className='text-decoration-none'>
                        <FaArrowLeft className='fs-5 text-white m-0 text-decoration-none p-0' />
                    </Link>
                    <span className=''>Configure a new door</span>
                </div>
                <FaEllipsisV className='fs-5' />
            </div>
            <div className='d-flex flex-column p-3 gap-3 justify-content-center mt-0'>
                <div className='d-flex flex-column gap-3 p-3 shadow rounded-1 bg-white col mx-lg-auto col-lg-6'>
                    {/* Category */}
                    <div className='d-flex flex-column flex-md-row gap-1'>
                        <span className='size weight text-gray col col-md-5 d-block d-md-none'>Category</span>
                        <span className='size weight text-gray col col-md-5 d-none my-auto d-md-block'>Select Category</span>
                        <div className='d-flex flex-row col col-md-7 Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>Residential Door</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                    </div>

                    {/* Door Style */}
                    <div className='d-flex flex-column flex-md-row gap-1'>
                        <span className='size weight col col-md-5 justify-content-md-start d-flex gap-3 flex-row align-items-center justify-content-between text-gray'>
                            <span className='size weight text-gray d-block d-md-none'>Door Style</span>
                            <span className='size weight text-gray d-none d-md-block'>Select Series</span>
                            <FaQuestionCircle className='me-2 text-darkGray' />
                        </span>
                        <div className='d-flex flex-row col col-md-7 Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>Residential Door</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                    </div>

                    {/* Door Type */}
                    <div className='d-flex flex-column flex-md-row gap-1'>
                        <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                            <span>Door Type</span>
                            <FaQuestionCircle className='me-2 text-darkGray' />
                        </span>
                        <div className='d-flex flex-row Cursor col col-md-7 rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>Residential Door</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                    </div>

                    {/* Shipping Point */}
                    <div className='d-flex d-md-none flex-column gap-1 flex-md-row'>
                        <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                            <span>Shipping Point</span>
                            <FaQuestionCircle className='me-2 text-darkGray' />
                        </span>
                        <div className='d-flex flex-row col col-md-7 Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>Residential Door</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form2;