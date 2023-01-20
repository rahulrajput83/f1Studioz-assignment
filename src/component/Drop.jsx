import React, { useState } from 'react'
import { FaAngleDown, FaQuestionCircle } from 'react-icons/fa'

function Drop(props) {
    const [show, setShow] = useState(false)
    return (
        <div className='d-flex flex-column gap-1 flex-md-row position-relative'>
            <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span>{props.title}</span>
                {props.icon ? <FaQuestionCircle className='me-2 text-darkGray' /> : null}
            </span>
            <div onClick={() => setShow(!show)} className='d-flex flex-row col col-md-7 Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                <span className='size'>Select</span>
                <FaAngleDown className='text-brown' />
            </div>
            {show ?
                <div className='d-flex flex-column bg-white shadow col-12 rounded col-md-7 end-0 z-index p-2 position-absolute top-100'>
                    {props.data.map((e, i) => {
                        return (
                            <span /* onClick={() => dispatchToRedux(e, 'Add_ShippingPoint')} */ className='size Cursor' key={`shipping-${i}`}>{e}</span>
                        )
                    })}
                </div> : null
            }
        </div>
    )
}

export default Drop