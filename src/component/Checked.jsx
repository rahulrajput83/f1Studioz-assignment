import React from 'react'
import { FaQuestionCircle } from 'react-icons/fa';
import CheckBox from './CheckBox';

function Checked(props) {

    return (
        <div className='d-flex flex-column gap-1 flex-md-row position-relative align-items-md-start'>
            <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span>{props.title}</span>
                {props.icon ? <FaQuestionCircle className='me-2 text-darkGray' /> : null}
            </span>
            <div className='d-flex mt-2 mt-md-0 flex-column gap-3 col col-md-7'>
                <CheckBox state='Extra' dispatch='Add_Extra' text='Extra Strut(s)' />
                <CheckBox state='Spade' dispatch='Add_Spade' text='Spade Strap Hinge(s)' />
                <CheckBox state='Quiet' dispatch='Add_Quiet' text='14 GA Quiet Hinge' />
                <CheckBox state='astragal' dispatch='Add_astragal' text='Less Bottom Astragal' />
                <CheckBox state='guarantee' dispatch='Add_guarantee' text='Gold Bar Guarantee ( Select Dealers )' />
                <CheckBox state='medallion' dispatch='Add_medallion' text='Medallion Hardware Upgrade' />
                <CheckBox state='seal' dispatch='Add_spear' text='Light Seal Kit' />
                <CheckBox state='mounted' dispatch='Add_mounted' text='Slide Lock Mounted at 54"' />
                <CheckBox state='spear' dispatch='' text='2 Spear Lift Handles' />
            </div>
        </div>
    )
}

export default Checked