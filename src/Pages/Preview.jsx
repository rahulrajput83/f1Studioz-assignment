import React, { useEffect, useState } from 'react'
import FormSubNav from '../component/FormSubNav'
import IconPreview from '../component/IconPreview'
import { MdAddBox, MdDelete, MdModeEditOutline, MdOutlineFavoriteBorder } from 'react-icons/md'
import { TbCopy } from 'react-icons/tb'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function Preview() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (count <= 1) {
            setCount(1)
        }
    }, [count])

    const handleAdd = () => {
    
        let action  = {
            type: "DELETE"
        }
        dispatch(action);
        navigate('/form1')
    }

    return (
        <div className='d-flex flex-column bg-bG min-vh-100 position-relative'>
            <FormSubNav backlink='/form3' title='Classic_John45012' sub='Cart #123456723' />
            <div className='d-flex mt-2 bg-white shadow px-3 col-lg-8 mx-lg-auto flex-column pt-3 gap-2 position-relative'>
                <span className='weight text-gray'>10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE OBSCURE, 5TH GENERATION FINISH WALDER DOOR</span>
                <div className='d-flex text-darkGray size flex-column'>
                    <span>Job Name: Front door with glass  <span className='text-brown weight'>Change</span></span>
                    <span>Product #CWD &#x2022; Garage Door</span>
                    <span>Availability: <span className='fw-bold text-green'>IN STOCK</span> <span className='text-gray'>(Available for Pickup)</span></span>
                </div>
                <Row xs={2} md={3} className='d-flex flex-row mb-5 pb-2 pb-lg-4 justify-content-between'>
                    <Col xs={{ order: 1, span: 6 }} md={{ order: 2, span: 4 }} className='d-flex align-items-md-center size text-green flex-column'>
                        <span>Standard Multipliew: 432</span>
                        <span>Secondary Multipliers Applied</span>
                        <span className='weight size text-brown'>Apply MPQ</span>
                    </Col>
                    <Col xs={{ order: 2, span: 6 }} md={{ order: 3, span: 4 }} className='d-flex size justify-content-end align-items-md-center align-items-end flex-column'>
                        <span>Net Price: <span className='fw-bold fs-6'>$2400.00</span></span>
                        <span>Unit Price: $1200.00</span>
                        <span className='text-brown weight'>View Price Details</span>
                    </Col>
                    <Col xs={{ order: 3, span: 6 }} md={{ order: 1, span: 4 }} className='d-flex mt-3 mt-md-0 gap-3 align-items-md-start justify-content-start justify-content-md-center flex-row'>
                        <span onClick={() => setCount(count - 1)} className='p-3 d-flex align-items-center justify-content-center Cursor text-black border widthH rounded bg-bG'>-</span>
                        <span className='p-3 widthShow d-flex bg-white border align-items-center justify-content-center rounded'>{count}</span>
                        <span onClick={() => setCount(count + 1)} className='p-3 d-flex Cursor text-black align-items-center justify-content-center border widthH rounded bg-bG'>+</span>
                    </Col>

                </Row>
                <div className='d-flex flex-row w-100 position-absolute position-lg-relative p-lg-3 pt-lg-4 bottom-0 start-0 align-items-center'>
                    <IconPreview title='Favorite' icon={MdOutlineFavoriteBorder} />
                    <IconPreview title='Edit' link='/form3' icon={MdModeEditOutline} />
                    <IconPreview title='Copy' icon={TbCopy} />
                    <IconPreview title='Delete' icon={MdDelete} />

                </div>
            </div>


            <div className='d-flex flex-column flex-lg-row col mt-3 col-lg-8 mx-lg-auto justify-content-lg-between align-items-lg-stretch gap-2'>
                {/* Delivery Date */}
                <div className='col d-flex flex-column gap-2'>
                    <div className='d-flex bg-white flex-column shadow p-3 flex-column'>
                        <span className='size weight'>Change Delivery Date</span>
                        <div className='d-flex mt-2 flex-column flex-md-row flex-lg-column gap-2 col h-auto align-items-md-center'>
                            <input type='date' placeholder='Example 01-Jan-2023' className='form-control' />
                            <span className='size weight col-md-4  col-lg-12'>Standard Delivery Date: Jan 26, 2023</span>
                        </div>
                    </div>
                    <div className='d-flex bg-white flex-column shadow p-3 flex-column'>
                        <span className='size weight'>Purchase Order Number</span>
                        <div className='d-flex mt-2 flex-column flex-md-row flex-lg-column gap-2 col align-items-md-center'>
                            <input type='text' placeholder='Enter PO Number' className='form-control' />
                            <span className='size weight col-md-4 col-lg-12'>This PO# can be used to track this order</span>
                        </div>
                    </div>

                </div>

                {/* Bill Summary */}
                <div className='d-flex bg-white col flex-column p-3 shadow flex-column gap-2'>
                    <span className='size weight'>Bill Summary</span>
                    <div className='d-flex size weight flex-row justify-content-between'>
                        <span>Sub Total</span>
                        <span>$ {count * 4500.00}</span>
                    </div>
                    <div className='d-flex size weight flex-row justify-content-between'>
                        <span>Energy Surcharge</span>
                        <span>$ {count * 70.18}</span>
                    </div>
                    <div className='d-flex size weight flex-row justify-content-between'>
                        <span>Sales Tax</span>
                        <span>$ {count * 490.93}</span>
                    </div>
                    <div className='d-flex fs-6 fw-bold weight flex-row justify-content-between'>
                        <span>Total</span>
                        <span>$ {count * 5061.11}</span>
                    </div>
                    <div className='line'></div>
                    <label className='d-flex fs-6 weight flex-row gap-2'>
                        <input defaultChecked type='checkbox' />
                        <span>Apply Tax</span>
                    </label>
                    <span className='size text-headCol mb-4'>(The 1% iStore discount is calculated into the total price for all doors and door parts. Please refer to the quote or order acknowledgment for details.)</span>
                </div>
            </div>

            {/* Shipping To */}
            <div className='d-flex bg-white flex-column flex-lg-row mt-3 shadow p-3 col-lg-8 mx-lg-auto flex-column pt-3 gap-2'>
                <div className='d-flex flex-column'>
                    <span className='size weight'>Shipping To</span>
                    <div className='d-flex size weight flex-row justify-content-between'>
                        <div className='d-flex text-black flex-column'>
                            <span className='fs-6 weight'>Bement Jared</span>
                            <span className=''>144 Curt Shores, 50, Madison Avenue Hixson - 42040</span>
                            <span>Contact: (123) 456 7890</span>
                        </div>
                        <span className='text-uppercase text-brown weight'>Change</span>
                    </div>
                </div>
                <div className='lineAddress'></div>
                <div className='d-flex flex-column'>
                    <span className='size weight'>Billing To</span>
                    <div className='d-flex size weight flex-row justify-content-between'>
                        <div className='d-flex text-black flex-column'>
                            <span className='fs-6 weight'>Bement Jared</span>
                            <span className=''>144 Curt Shores, 50, Madison Avenue Hixson - 42040</span>
                            <span>Contact: (123) 456 7890</span>
                        </div>
                        <span className='text-uppercase text-brown weight'>Change</span>
                    </div>
                </div>
            </div>

            <div className='d-flex bg-white flex-column flex-md-row justify-content-md-between mt-3 shadow p-3 col-lg-8 mx-lg-auto pt-3 gap-2'>
                <div className='d-flex flex-column'>
                    <span>{count} ITEM</span>
                    <span className='fs-5 fw-bold'>${5061.11 * count}</span>
                </div>
                <div className='col d-flex flex-row justify-content-center justify-content-md-end align-items-center gap-4'>
                    <button onClick={handleAdd} aria-disabled="true" className='col-5 d-flex justify-content-center align-items-center gap-2 col-md-3 Cursor p-2 btn rounded bg-white fw-bold border border-2 border-brown text-brown'>
                        <MdAddBox />
                        <span>ADD MORE</span>
                    </button>
                    <Link to='/' aria-disabled="true" className='col-5 d-flex bg-brown justify-content-center align-items-center gap-2 col-md-3 Cursor p-2 btn rounded fw-bold border border-2 border-brown text-white'>
                        <span>PLACE ORDER</span>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Preview