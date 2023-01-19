import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Input(props) {
    return (
        <div className='d-flex border bg-white align-items-center justify-content-center py-2 px-3 border-1 border-borderColor text-brown flex-row gap-2'>
            {props.placeholder === 'Search' ?
                <input onChange={(e) => props.setFilter(e.target.value)} className='border-0 form-control p-0 shadow-none bg-none' type='text' placeholder={props.placeholder} />
                : null}
            {props.placeholder === 'Filter' ? <div className='d-flex  align-items-center fs-2 justify-content-center gap-1 flex-column'>
                <span className='w-1 h-1 bg-brown'></span>
                <span className='w-2 h-1 bg-brown'></span>
                <span className='w-3 h-1 bg-brown'></span>
            </div> : <FaSearch />}
            {props.placeholder === 'Filter' ? <span>Filter</span> : null}
        </div>
    )
}

export default Input