import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

function DropSize(props) {
    return (
        <div className='d-flex flex-row gap-4 justify-content-between col col-md-10 align-items-center position-relative'>
            <span className='size my-auto weight text-gray mx-auto'>
                {props.title}
            </span>
            <div className='d-flex flex-row justify-content-md-between col col-md-11 gap-3 ms-auto me-0'>
                <div className='d-flex flex-row Cursor gap-3 col col-md-8 rounded-1 p-2 border align-items-center justify-content-between'>
                    <span className='size'>Select</span>
                    <FaAngleDown className='text-brown' />
                </div>
                <div className='d-flex flex-row Cursor gap-3 col col-md-8 rounded-1 p-2 border align-items-center justify-content-between'>
                    <span className='size'>Select</span>
                    <FaAngleDown className='text-brown' />
                </div>
            </div>
            {/* {showShipping ?
                            <div className='d-flex flex-column bg-white shadow col-12 rounded col-md-7 end-0 z-index p-2 position-absolute top-100'>
                                {ShippingPoint.map((e, i) => {
                                    return (
                                        <span onClick={() => dispatchToRedux(e, 'Add_ShippingPoint')} className='size Cursor' key={`shipping-${i}`}>{e}</span>
                                    )
                                })}
                            </div> : null
                        } */}
        </div>
    )
}

export default DropSize