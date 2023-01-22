import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function IconPreview(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteData = () => {
        let action  = {
            type: "DELETE"
        }
        dispatch(action);
        navigate('/')
    }

    return props.title === 'Delete' ? <button onClick={deleteData} className='d-flex bg-white text-uppercase weight p-2 border col-3 justify-content-center text-decoration-none text-brown align-items-center flex-row gap-2'>
        <props.icon />
        <span>{props.title}</span>
    </button> :
        <Link to={props.link} className='d-flex text-uppercase weight p-2 border col-3 justify-content-center text-decoration-none text-brown align-items-center flex-row gap-2'>
            <props.icon />
            <span>{props.title}</span>
        </Link>
}

export default IconPreview