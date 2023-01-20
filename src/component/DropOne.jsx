import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

function DropOne(props) {
    const [show, setShow] = useState(false);
    return (
        <div onClick={() => setShow(!show)} className='d-flex position-relative flex-row Cursor col gap-3 rounded-1 p-2 border align-items-center justify-content-between'>
            <span className='size'>Select</span>
            <FaAngleDown className='text-brown' />
            {show ?
                <div className='d-flex flex-column bg-white shadow col-12 rounded end-0 z-index p-2 position-absolute top-100'>
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

export default DropOne