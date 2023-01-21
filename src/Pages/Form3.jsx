import React, { useEffect, useState } from 'react'
import { FaAngleRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckBox from '../component/CheckBox';
import Checked from '../component/Checked';
import Drop from '../component/Drop';
import DropSize from '../component/DropSize';
import FormSubNav from '../component/FormSubNav';
import Radio from '../component/Radio';


/* Dummy Data */
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
  const state = useSelector((state) => state)
  const [layoutOptions, setLayoutOptions] = useState([]);
  const [windowOptions, setWindowOptions] = useState([]);
  const [trackOptions, setTrackOptions] = useState([])
  const [otherOptions, setOtherOptions] = useState([]);
  const [stepCompleted, setStepCompleted] = useState(0);


  useEffect(() => {
    setLayoutOptions([state.Assembly, state.WidthOne, state.WidthTwo, state.HeightOne, state.HeightTwo, state.Windcode, state.Design, state.Color])
    setWindowOptions([state.GlassType, state.Section, state.Framing]);
    setTrackOptions([state.Spring, state.TrackSize, state.TrackMount, state.TrackLift, state.TrackRadius])
    setOtherOptions([state.Lock, state.Packaging, state.MICS, state.Extra, state.Spade, state.Quiet, state.astragal, state.guarantee, state.medallion, state.seal, state.mounted, state.spear])
  }, [state])


  /* Check Steps Completed */
  useEffect(() => {
    if(layoutOptions[0] && layoutOptions.every((e) => {return e ? true : false}) &&
    windowOptions[0] && windowOptions.every((e) => {return e ? true : false}) &&
    trackOptions[0] && trackOptions.every((e) => {return e ? true : false}) &&
    otherOptions[0] && otherOptions.every((e) => {return e ? true : false})) {
        setStepCompleted(4)
    }
    else if((layoutOptions[0] && layoutOptions.every((e) => {return e ? true : false}) &&  windowOptions[0] && windowOptions.every((e) => {return e ? true : false}) && trackOptions[0] && trackOptions.every((e) => {return e ? true : false}))
     || 
     (windowOptions[0] && windowOptions.every((e) => {return e ? true : false}) && trackOptions[0] && trackOptions.every((e) => {return e ? true : false}) && otherOptions[0] && otherOptions.every((e) => {return e ? true : false}))
      ||
       (otherOptions[0] && otherOptions.every((e) => {return e ? true : false}) && layoutOptions[0] && layoutOptions.every((e) => {return e ? true : false}) && windowOptions[0] && windowOptions.every((e) => {return e ? true : false}))) {
        setStepCompleted(3)
    }
    else if((layoutOptions[0] && layoutOptions.every((e) => {return e ? true : false}) && windowOptions[0] && windowOptions.every((e) => {return e ? true : false})) 
    || 
    (windowOptions[0] && windowOptions.every((e) => {return e ? true : false}) && trackOptions[0] && trackOptions.every((e) => {return e ? true : false})) 
    || 
    (trackOptions[0] && trackOptions.every((e) => {return e ? true : false}) && otherOptions[0] && otherOptions.every((e) => {return e ? true : false})) 
    || 
    (otherOptions[0] && otherOptions.every((e) => {return e ? true : false}) && layoutOptions[0] && layoutOptions.every((e) => {return e ? true : false}))) {
      setStepCompleted(2)
    }
    else if((layoutOptions[0] && layoutOptions.every((e) => {return e ? true : false})) || 
    (windowOptions[0] && windowOptions.every((e) => {return e ? true : false})) || 
    (trackOptions[0] && trackOptions.every((e) => {return e ? true : false})) ||
    (otherOptions[0] && otherOptions.every((e) => {return e ? true : false}))) {
      setStepCompleted(1)
    } 
    
  }, [state, layoutOptions, windowOptions, trackOptions, otherOptions])

  return (
    <div className='d-flex flex-column bg-bG min-vh-100 position-relative'>
      <FormSubNav backlink='/form2' title='Configure a new door' sub='2 of 3' />

      {/* Progress Bar */}
      <div className='bg-borderColor rounded-pill col-9 col-md-6 col-lg-4 mt-4 mx-auto Progress'>
        <div className={`Progress rounded-pill ${stepCompleted === 4 ? 'd-flex col' : stepCompleted === 3 ? 'd-flex col-9' : stepCompleted === 2 ? 'd-flex col-6' : stepCompleted === 1 ? 'd-flex col-3' : 'd-none'} bg-green`}></div>
      </div>

      {/* Progress Percentage Text */}
      <div className='d-flex size text-gray my-2 gap-2 mx-auto'>
        <span className='weight'>{stepCompleted * 100 / 4}%</span>
        <span>Completed</span>
      </div>


      <div className='d-flex flex-column gap-4 px-3 py-2 col-lg-9 mx-lg-auto justify-content-center '>

        {/* Layout Options Card */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Layout Options</span>
          <div className='d-flex gap-3 flex-column px-5 py-4'>
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
          <div className='d-flex flex-column px-5 py-4 gap-3'>
            <Drop state='GlassType' dispatch={'Add_GlassType'} data={GlassType} title='Glass Type' icon={true} />
            <Drop state='Section' dispatch={'Add_Section'} data={SectionGlazed} title='Section(S) Glazed' icon={true} />
            <Drop state='Framing' dispatch={'Add_Framing'} data={Framing} title='Framing' icon={true} />
          </div>
        </div>

        {/* Track Options */}
        <div className='d-flex shadow rounded bg-white Rounded flex-column'>
          <span className='px-3 bg-CardBg py-2 Rounded weight text-gray'>Track Options</span>
          <div className='d-flex flex-column px-5 py-4 gap-3'>
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
          <div className='d-flex flex-column px-5 py-4 gap-3'>
            <Drop state='Lock' dispatch={'Add_Lock'} data={Lock} title='Lock' icon={true} />
            <Radio title='MISC Lock Options' text='No Lock Hole' state='MICS' dispatch='Add_MICS' />
            <Drop state='Packaging' dispatch={'Add_Packaging'} data={Packaging} title='Packaging' icon={true} />
            <Checked icon={true} title='Select Additional Options' />
          </div>
        </div>

        <div className='d-flex p-3 shadow d-lg-none rounded bg-white Rounded'>
        <CheckBox state='Configuration' dispatch='Add_Configuration' text='Special Configuration Request' />
        </div>
        <div className='d-flex p-3 flex-row size shadow d-lg-none text-brown align-items-center justify-content-between rounded bg-white Rounded'>
          <span className='weight'>Torsion Spring Inquiry</span>
          <FaAngleRight />
        </div>
        <div className='d-flex p-3 flex-row shadow text-brown size d-lg-none align-items-center justify-content-between rounded bg-white Rounded'>
          <span className='weight'>Additional Information</span>
          <FaAngleRight />
        </div>
      </div>

      <div className='p-3 w-100 mt-5 d-flex flex-row justify-content-center justify-content-md-end align-items-center gap-4 border-bottom-0 border-left-0 border-right-0 bg-white border'>
        <Link to='/preview' aria-disabled="true" className='col-5 col-md-3 col-lg-2 Cursor p-2 btn rounded bg-white fw-bold border border-2 border-brown text-brown'>
          PREVIEW
        </Link>
        <button disabled aria-disabled="true" className='col-5 col-md-3 col-lg-2 Cursor btn p-2 fw-bold disabled rounded bg-brown weight border border-2 border-brown text-white'>
          ADD TO CART
        </button>
      </div>


    </div>
  )
}

export default Form3;