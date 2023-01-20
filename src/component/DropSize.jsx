import React from 'react'
import DropOne from './DropOne'

function DropSize(props) {
    return (
        <div className='d-flex flex-row gap-4 col align-items-center position-relative'>
            <span className='size my-auto weight text-gray me-auto'>
                {props.title}
            </span>
            <div className='d-flex flex-row gap-3 col'>
                <DropOne data={props.one} />
                <DropOne data={props.two} />
                
            </div>
            
        </div>
    )
}

export default DropSize