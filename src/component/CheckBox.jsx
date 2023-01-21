import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CheckBox(props) {
    const dispatch = useDispatch();
    const [check, setCheck] = useState(useSelector((state) => state[props.state]))

    useEffect(() => {
        let action = {
            type: props.dispatch,
            payload: check
        };
        dispatch(action);
    }, [check])

    const dispatchToRedux = () => {
        setCheck(!check)
        
    }

    return (
        <div className='d-flex flex-column justify-content-start'>
            <label className='d-flex flex-row align-items-center gap-2 size weight Cursor size '>
                <input onChange={dispatchToRedux} checked={check} type='checkbox' className='' />
                <span className={props.state === 'Configuration' ? 'text-brown' : ''}>{props.text}</span>
            </label>
        </div>
    )
}

export default CheckBox