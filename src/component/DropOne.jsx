import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';

function DropOne(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const StateValue = useSelector((state) => state[props.state]);

    const dispatchToRedux = (data) => {
        let action = {
            type: props.dispatch,
            payload: data
        };
        dispatch(action);
        setShow(false)
    }
    return (
        <div onClick={() => setShow(!show)} className='d-flex position-relative flex-row Cursor w-100 gap-3 rounded-1 p-2 border align-items-center justify-content-between'>
            <span className='size'>{StateValue ? StateValue : 'Select'}</span>
            <FaAngleDown className='text-brown' />
            {show ?
                <div className='d-flex flex-column bg-white shadow w-100 rounded end-0 z-index p-2 position-absolute top-100'>
                    {props.data.map((e, i) => {
                        return (
                            <span onClick={() => dispatchToRedux(e,)} className='size Cursor' key={`${props.state}-${i}`}>{e}</span>
                        )
                    })}
                </div> : null
            }
        </div>
    )
}

export default DropOne