import React from 'react'

function CheckBox(props) {
    return (
        <div className='d-flex flex-column justify-content-start'>
            <label className='d-flex flex-row gap-2 size text-uppercase weight Cursor size '>
                <input type='checkbox' className='' />
                <span>{props.text}</span>
            </label>
        </div>
    )
}

export default CheckBox