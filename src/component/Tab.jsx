import React from 'react'

function Tab(props) {
    return (
        <div className='p-3 position-relative bg-gray d-flex flex-row align-items-center gap-5 justify-content-between justify-content-md-center'>
            {props.data.map((e, i) => {
                return (
                    <span onClick={() => props.setClicked(e)} className={`text-uppercase Item text-white text-center ${e === props.clicked ? 'fw-bold' : ''}`} key={`tab-${i}`}>{e}</span>
                )
            })}
            <span className={`position-absolute bottom-0 Tab  bg-yellow ${props.clicked  ? 'd-block': 'd-none'} ${props.clicked === 'Carts' ? 'CartPosition' : props.clicked === 'favorites' ? 'FavPosition' : ''}`}> </span>
        </div>
    )
}

export default Tab;