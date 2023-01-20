import React from 'react'
import Drop from '../component/Drop';
import DropSize from '../component/DropSize';
import FormSubNav from '../component/FormSubNav';


function Form3() {
  return (
    <div className='d-flex flex-column bg-bG min-vh-100 position-relative'>
      <FormSubNav backlink='/form2' title='Configure a new door' sub='2 of 3' />

      {/* Progress Bar */}
      <div className='bg-borderColor rounded-pill col-10 mt-4 mx-auto Progress'>
        <div className='col-6 Progress rounded-pill bg-green'></div>
      </div>

      {/* Progress Percentage Text */}
      <div className='d-flex size text-gray my-2 gap-2 mx-auto'>
        <span className='weight'>47%</span>
        <span>Completed</span>
      </div>


      <div className='d-flex flex-column px-3 py-2 justify-content-center '>

        {/* Layout Options Card */}
        <div className='d-flex shadow bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded fw-bold text-gray'>Layout Options</span>
          <div className='d-flex gap-3 flex-column px-3 py-4'>
            <Drop title='Assembly Type' icon={false} />
            <div className='d-flex flex-column gap-1 flex-md-row position-relative'>
              <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span>Measure</span>
              </span>
              <div className='d-flex flex-column gap-4'>
                <DropSize title='Width' />
                <DropSize title='Height' />
              </div>
            </div>
            <Drop title='Windcode' icon={true} />

            <Drop title='Design' icon={true} />
            <Drop title='Color' icon={true} />
          </div>
        </div>
      </div>



    </div>
  )
}

export default Form3;