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
            <Drop state='Assembly' dispatch={'Add_Assembly'} data={Assembly} title='Assembly Type' icon={false} />
            <div className='d-flex flex-column gap-1 flex-md-row position-relative'>
              <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                <span>Measure Size</span>
              </span>
              <div className='d-flex flex-column gap-4 w-100'>
                <DropSize state='WidthOne' stateTwo='WidthTwo' dispatch={'Add_WidthOne'} dispatchTwo={'Add_WidthTwo'} one={widthOne} two={widthTwo} title='Width' />
                <DropSize state='HeightOne' stateTwo='HeightTwo' dispatch={'Add_HeightOne'} dispatchTwo={'Add_HeightTwo'} one={heightOne} two={heightTwo} title='Height' />
              </div>
            </div>
            <Drop state='Windcode' dispatch={'Add_Windcode'} data={Windcode} title='Windcode' icon={true} />
            <Drop state='Design' dispatch={'Add_Design'} data={Design} title='Design' icon={true} />
            <Drop state='Color' dispatch={'Add_Color'} data={Color} title='Color' icon={true} />
          </div>
        </div>

        {/* Window Options */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Window Options</span>
          <div className='d-flex flex-column px-3 py-4 gap-3'>
            <Drop state='GlassType' dispatch={'Add_GlassType'} data={GlassType} title='Glass Type' icon={true} />
            <Drop state='Section' dispatch={'Add_Section'} data={SectionGlazed} title='Section(S) Glazed' icon={true} />
            <Drop state='Framing' dispatch={'Add_Framing'} data={Framing} title='Framing' icon={true} />
          </div>
        </div>

        {/* Track Options */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Track Options</span>
          <div className='d-flex flex-column px-3 py-4 gap-3'>
            <Drop state='Spring' dispatch={'Add_Spring'} data={Spring} title='Spring' icon={true} />
            <Drop state='TrackSize' dispatch={'Add_TrackSize'} data={TrackSize} title='Track Size' icon={true} />
            <Drop state='TrackMount' dispatch={'Add_TrackMount'} data={TrackMount} title='Track Mount' icon={true} />
            <Drop state='TrackLift' dispatch={'Add_TrackLift'} data={TrackLift} title='Track Lift' icon={true} />
            <Drop state='TrackRadius' dispatch={'Add_TrackRadius'} data={TrackRadius} title='Track Radius' icon={true} />
          </div>
        </div>

        {/* Other Options */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Other Options</span>
          <div className='d-flex flex-column px-3 py-4 gap-3'>
            <Drop state='Lock' dispatch={'Add_Lock'} data={Lock} title='Lock' icon={true} />
            <Drop state='Packaging' dispatch={'Add_Packaging'} data={Packaging} title='Packaging' icon={true} />
            
          </div>
        </div>
      </div>



    </div>
  )
}

export default Form3;