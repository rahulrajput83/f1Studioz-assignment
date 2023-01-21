import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Radio(props) {
    const dispatch = useDispatch();
    const checked = useSelector((state) => state[props.state])
    const [change, setChange] = useState(checked);

    const handleSubmit = () => {
        setChange(true);
        let action = {
            type: props.dispatch,
            payload: change
        };
        dispatch(action);
    }

    return (
        <div className='d-flex flex-column gap-1 flex-md-row position-relative'>
            <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span>{props.title}</span>
            </span>
            <div className='d-flex flex-column col col-md-7 justify-content-start'>
                <label onClick={handleSubmit} className='d-flex flex-row gap-2 weight Cursor size '>
                <input onChange={() => setChange(true)} checked={checked} type='radio' value={props.text} className='' />
                <span>{props.text}</span>
                </label>
            </div>
        </div>
    )
}

export default Radio