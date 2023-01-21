import React from 'react'
import DropOne from './DropOne'

function DropSize(props) {
    return (
        <div className='d-flex flex-row gap-4 w-100 align-items-center position-relative'>
            <span className='size my-auto weight text-gray me-auto'>
                {props.title}
            </span>
            <div className='d-flex flex-row gap-3 w-100 col justify-content-end'>
                <DropOne data={props.one} state={props.state} dispatch={props.dispatch} />
                <DropOne data={props.two} state={props.stateTwo} dispatch={props.dispatchTwo} />
                
            </div>
            
        </div>
    )
}

export default DropSize