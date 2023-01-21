import React, { useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import CheckBox from './CheckBox';

function Checked(props) {
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
        <div className='d-flex flex-column w-100 align-items-start gap-1 flex-md-row position-relative'>
            <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span className='me-auto me-md-0'>{props.title}</span>
                <FaQuestionCircle className='me-2 text-darkGray' />
            </span>
            <div className='d-flex flex-column gap-2 col col-md-7'>
                <CheckBox text='Extra Strut(S)' />
                <CheckBox text='Spade strap hinge(s)' />
                <CheckBox text='14 GA Quiet hinge' />
                <CheckBox text='less bottom astragal' />
                <CheckBox text='gold bar guarantee (select dealers)' />
                <CheckBox text='medallion hardware upgrade' />
                <CheckBox text='light seal kit' />
                <CheckBox text='Slide lock mounted at 54"' />
                <CheckBox text='2 spear lift handles' />
            </div>
        </div>
    )
}

export default Checked