import React, { useState } from 'react'
import { FaAngleDown, FaQuestionCircle } from 'react-icons/fa'
import { MdOutlineInfo } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'

function Drop(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
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
        <div className='d-flex flex-column gap-1 flex-md-row position-relative'>
            <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span>{props.title}</span>
                {props.icon ? <FaQuestionCircle className='me-2 text-darkGray' /> : null}
            </span>
            <div className='d-flex flex-column col col-md-7'>
                <div onClick={() => setShow(!show)} className='d-flex flex-row Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                    <span className='size'>{StateValue ? StateValue : 'Select'}</span>
                    <FaAngleDown className='text-brown' />
                </div>
                {props.state === 'Packaging' ?
                    <span className='d-flex p-1 size text-warning flex-row gap-1 weight align-items-center'>
                        <MdOutlineInfo />
                        <span>Clopay CWD Model Excludes Packaging Options</span>
                    </span> : null}
            </div>
            {show ?
                <div className='d-flex flex-column bg-white shadow col-12 rounded col-md-7 end-0 z-index p-2 position-absolute top-100'>
                    {props.data.map((e, i) => {
                        return (
                            <span onClick={() => dispatchToRedux(e)} className='size Cursor' key={`${props.state}-${i}`}>{e}</span>
                        )
                    })}
                </div> : null
            }
        </div>
    )
}

export default Drop