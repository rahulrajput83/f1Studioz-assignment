import React from 'react';
import { TbGridDots } from 'react-icons/tb'
import { MdNotifications, MdMenu } from 'react-icons/md'
import {AiFillQuestionCircle} from 'react-icons/ai'
import profile from '../Image/Profile.svg'

function Navbar() {
    return (
        <div className='p-3 bg-dark d-flex flex-row align-items-center justify-content-between'>
            <div className='gap-1 d-flex flex-row align-items-center'>
                <span className='bg-pink rounded-circle px-2 py-1 fs-6 text-white'>f1</span>
                <span className='text-white fw-bolder fs-6'>studioz</span>
            </div>
            <div className='d-flex fs-4 text-icon flex-row align-items-center justify-content-center gap-3'>
                <TbGridDots />
                <div className='position-relative d-flex'>
                    <MdNotifications />
                    <span className='position-absolute rounded-circle bottom-0 end-0 p-1 bg-red'></span>
                </div>
                <MdMenu className='d-md-none' />
                <AiFillQuestionCircle className='d-none d-md-block' />
                <img className='d-none d-md-block' src={profile} alt='' />
            </div>
        </div>
    )
}

export default Navbar;