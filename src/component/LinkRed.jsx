import React from 'react'
import { Link } from 'react-router-dom'

function LinkRed() {
    return (
        <Link to='/form3' className='text-decoration-none position-absolute border bottom-0 p-2 d-flex justify-content-center justify-content-md-end align-items-center w-100 start-0 bg-white'>
            <button className='text-uppercase bg-brown border-0 col-11 col-md-2 size weight Cursor rounded text-white p-2'>Configure</button>
        </Link>
    )
}

export default LinkRed