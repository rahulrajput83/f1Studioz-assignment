import React from 'react'
import Drop from '../component/Drop';
import DropSize from '../component/DropSize';
import FormSubNav from '../component/FormSubNav';

const Assembly = ["Complete Door", "Partial Door", "Other"];
const widthOne = ['7 ft.', '8 ft.', '9 ft.'];
const widthTwo = ['7 in', '8 in.', '9 in'];
const heightOne = ['7 ft.', '8 ft.', '9 ft.'];
const heightTwo = ['7 in', '8 in.', '9 in'];
const Windcode = ['Windcode W1', 'Windcode W2', 'Windcode W3'];
const Design = ['CC', 'AA', 'DD'];
const Color = ['Dark Finish', 'Dark Red', 'Dark Gray'];
const GlassType = ['Solid (No Windows)', 'Solid'];
const SectionGlazed = ['Section 4', 'Section 3', 'Section 5'];
const Framing = ['Arch 1 Design', 'Arch 2 Design', 'Arch 3 Design'];
const Spring = ['Galvanized Torsion', 'Other'];
const TrackSize = ['2" Flag & Jamb Brackets Loose', '1" Frag & Jamb Brackets Loose'];
const TrackMount = ['Bracket', 'Other'];
const TrackLift = ['Standard', 'Normal'];
const TrackRadius = ['12" Radius', '11" Radius', '13" Radius'];
const Lock = ['Inside Slide Lock (#2)', 'Inside Slide Lock (#3)'];
const Packaging = ['[x] Distributor', '[y] Distributor']


function Form3() {
  return (
    <div className='d-flex flex-column bg-bG min-vh-100 position-relative pb-5'>
      <FormSubNav backlink='/form2' title='Configure a new door' sub='2 of 3' />

      {/* Progress Bar */}
      <div className='bg-borderColor rounded-pill col-9 mt-4 mx-auto Progress'>
        <div className='col-6 Progress rounded-pill bg-green'></div>
      </div>

      {/* Progress Percentage Text */}
      <div className='d-flex size text-gray my-2 gap-2 mx-auto'>
        <span className='weight'>47%</span>
        <span>Completed</span>
      </div>


      <div className='d-flex flex-column gap-4 px-3 py-2 col-lg-7 mx-lg-auto justify-content-center '>

        {/* Layout Options Card */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Layout Options</span>
          <div className='d-flex gap-3 flex-column px-3 py-4'>
            <Drop data={Assembly} title='Assembly Type' icon={false} />
            <div className='d-flex flex-column gap-1 flex-md-row position-relative'>
              <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span>Measure Size</span>
              </span>
              <div className='d-flex flex-column gap-4'>
                <DropSize one={widthOne} two={widthTwo} title='Width' />
                <DropSize one={heightOne} two={heightTwo} title='Height' />
              </div>
            </div>
            <Drop data={Windcode} title='Windcode' icon={true} />
            <Drop data={Design} title='Design' icon={true} />
            <Drop data={Color} title='Color' icon={true} />
          </div>
        </div>

        {/* Window Options */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Window Options</span>
          <div className='d-flex flex-column px-3 py-4 gap-3'>
            <Drop data={GlassType} title='Glass Type' icon={true} />
            <Drop data={SectionGlazed} title='Section(S) Glazed' icon={true} />
            <Drop data={Framing} title='Framing' icon={true} />
          </div>
        </div>

        {/* Track Options */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Track Options</span>
          <div className='d-flex flex-column px-3 py-4 gap-3'>
            <Drop data={Spring} title='Spring' icon={true} />
            <Drop data={TrackSize} title='Track Size' icon={true} />
            <Drop data={TrackMount} title='Track Mount' icon={true} />
            <Drop data={TrackLift} title='Track Lift' icon={true} />
            <Drop data={TrackRadius} title='Track Radius' icon={true} />
          </div>
        </div>

        {/* Other Options */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Other Options</span>
          <div className='d-flex flex-column px-3 py-4 gap-3'>
            <Drop data={Lock} title='Lock' icon={true} />
            <Drop data={Packaging} title='Packaging' icon={true} />
            
          </div>
        </div>
      </div>



    </div>
  )
}

export default Form3;