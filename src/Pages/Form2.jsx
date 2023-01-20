import React, { useState } from 'react'
import { FaAngleDown, FaQuestionCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import FormSubNav from '../component/FormSubNav';
import LinkRed from '../component/LinkRed';

const Category = ["Residential Door", "Not Available", "Other"];
const Style = ["Canyon Ridge® Collection", "Not Available", "Other"];
const Type = ["CAN 212", "CAN 200", "CAN 100"];
const ShippingPoint = ["Russia Plant-ABC", "Russia Plant", "Other"];

function Form2() {
    const dispatch = useDispatch();
    const CategoryValue = useSelector((state) => state.Category);
    const [showCategory, setShowCategory] = useState(false);
    const [showStyle, setShowStyle] = useState(false);
    const StyleValue = useSelector((state) => state.DoorStyle);
    const [showType, setShowType] = useState(false);
    const TypeValue = useSelector((state) => state.DoorType)
    const [showShipping, setShowShipping] = useState(false)
    const shippingValue = useSelector((state) => state.ShippingPoint)

    const dispatchToRedux = (data, type) => {
        let action = {
            type: type,
            payload: data
        };
        dispatch(action);
        setShowCategory(false);
        setShowStyle(false);
        setShowType(false);
        setShowShipping(false);
    }

    return (
        <div className='d-flex flex-column bg-bG min-vh-100 position-relative'>
            <FormSubNav backlink='/form1' title='Configure a new door' sub='1 of 3' />
            <div className='d-flex flex-column p-3 gap-3 justify-content-center mt-0'>
                <div className='d-flex flex-column gap-3 p-3 respCardHeight shadow rounded-1 bg-white col mx-lg-auto px-lg-5 col-lg-8'>
                    {/* Category */}
                    <div className='d-flex flex-column flex-md-row gap-1 position-relative'>
                        <span className='size weight text-gray col col-md-5 d-block d-md-none'>Category</span>
                        <span className='size weight text-gray col col-md-5 d-none my-auto d-md-block'>Select Category</span>
                        <div onClick={() => setShowCategory(!showCategory)} className='d-flex flex-row col col-md-7 Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>{CategoryValue ? CategoryValue : 'Select'}</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                        {showCategory ?
                            <div className='d-flex flex-column bg-white shadow col-12 rounded col-md-7 end-0 z-index p-2 position-absolute top-100'>
                                {Category.map((e, i) => {
                                    return (
                                        <span onClick={() => dispatchToRedux(e, 'Add_Category')} className='size Cursor' key={`cate-${i}`}>{e}</span>
                                    )
                                })}
                            </div> : null
                        }
                    </div>

                    {/* Door Style */}
                    <div className='d-flex flex-column flex-md-row gap-1 position-relative'>
                        <span className='size weight col col-md-5 justify-content-md-start d-flex gap-3 flex-row align-items-center justify-content-between text-gray'>
                            <span className='size weight text-gray d-block d-md-none'>Door Style</span>
                            <span className='size weight text-gray d-none d-md-block'>Select Series</span>
                            <FaQuestionCircle className='me-2 text-darkGray' />
                        </span>
                        <div onClick={() => setShowStyle(!showStyle)} className='d-flex flex-row col col-md-7 Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>{StyleValue ? StyleValue : 'Select'}</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                        {showStyle ?
                            <div className='d-flex flex-column bg-white shadow col-12 rounded col-md-7 end-0 z-index p-2 position-absolute top-100'>
                                {Style.map((e, i) => {
                                    return (
                                        <span onClick={() => dispatchToRedux(e, 'Add_DoorStyle')} className='size Cursor' key={`style-${i}`}>{e}</span>
                                    )
                                })}
                            </div> : null
                        }
                    </div>

                    {/* Door Type */}
                    <div className='d-flex flex-column flex-md-row gap-1 position-relative'>
                        <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                            <span>Door Type</span>
                            <FaQuestionCircle className='me-2 text-darkGray' />
                        </span>
                        <div onClick={() => setShowType(!showType)} className='d-flex flex-row Cursor col col-md-7 rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>{TypeValue ? TypeValue : 'Select'}</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                        {showType ?
                            <div className='d-flex flex-column bg-white shadow col-12 rounded col-md-7 end-0 z-index p-2 position-absolute top-100'>
                                {Type.map((e, i) => {
                                    return (
                                        <span onClick={() => dispatchToRedux(e, 'Add_DoorType')} className='size Cursor' key={`type-${i}`}>{e}</span>
                                    )
                                })}
                            </div> : null
                        }
                    </div>

                    {/* Shipping Point */}
                    <div className='d-flex d-md-none flex-column gap-1 flex-md-row position-relative'>
                        <span className='size weight gap-3 col col-md-5 justify-content-md-start d-flex flex-row align-items-center justify-content-between text-gray'>
                            <span>Shipping Point</span>
                            <FaQuestionCircle className='me-2 text-darkGray' />
                        </span>
                        <div onClick={() => setShowShipping(!showShipping)} className='d-flex flex-row col col-md-7 Cursor rounded-1 p-2 border align-items-center justify-content-between'>
                            <span className='size'>{shippingValue ? shippingValue : 'Select'}</span>
                            <FaAngleDown className='text-brown' />
                        </div>
                        {showShipping ?
                            <div className='d-flex flex-column bg-white shadow col-12 rounded col-md-7 end-0 z-index p-2 position-absolute top-100'>
                                {ShippingPoint.map((e, i) => {
                                    return (
                                        <span onClick={() => dispatchToRedux(e, 'Add_ShippingPoint')} className='size Cursor' key={`shipping-${i}`}>{e}</span>
                                    )
                                })}
                            </div> : null
                        }
                    </div>

                    <div className='d-none d-lg-block'>
                        <LinkRed />
                    </div>
                </div>

            </div>
            <div className='d-block d-lg-none'>
                <LinkRed />
            </div>
        </div>

    )
}

export default Form2;