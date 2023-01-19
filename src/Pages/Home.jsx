import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../component/Navbar'
import Tab from '../component/Tab'
import NoData from '../component/NoData'
import Data from '../component/Data'
import { Col, Row } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import Input from '../component/Input'

const data = ['Carts', 'favorites'];
const SubData = ['Active Carts', 'Archived Carts']

function Home() {
  const [clicked, setClicked] = useState('Carts')
  const [filter, setFilter] = useState('');
  const [filterData, setFilterData] = useState(useSelector((state) => state.Cart))
  const cartData = useSelector((state) => state.Cart);
  const [subNav, setSubNav] = useState('Active Carts')
  
  useEffect(() => {
    if(filter) {
      const filteredPersons = filterData.filter(
        person => {
          return (
            person
            .info
            .toLowerCase()
            .includes(filter.toLowerCase()))
        }
      );
      setFilterData(filteredPersons)
    }
    else {
      setFilterData(cartData)
    }
  }, [filter, cartData])

  return (
    <div className='bg-bG min-vh-100 d-flex flex-column'>
      <Navbar />
      <Tab setClicked={setClicked} clicked={clicked} data={data} />
      <div className='d-flex flex-column gap-2 p-2'>
      <div className='p-2'>
            <Row className='d-flex flex-row align-items-center justify-content-between'>
              <Col xs={6} md={4}>
                <span className='text-gray d-flex d-lg-none weight py-2'>Carts</span>
                <div className='d-none d-lg-flex gap-4 flex-row'>
                    {SubData.map((e, i) => {
                        return (
                            <span className={`px-4 pb-3 fw-bold Cursor ${subNav === e ? 'border-top-0 border-gray border-bottom border-3' : 'text-headCol'} `} onClick={() => setSubNav(e)} key={`subNav-${i}`}>{e}</span>
                        )
                    })}
                </div>
              </Col>
              <Col xs={{ order: 2, span: 6 }} md={{ span: 4, order: 3 }} className='d-flex d-lg-none'>
                <div className='d-flex d-lg-none fs-5 ms-auto text-brown me-2 flex-row justify-content-end gap-3'>
                  <FaSearch />
                  <div className='d-flex  align-items-center fs-2 justify-content-center gap-1 flex-column'>
                    <span className='w-1 h-1 bg-brown'></span>
                    <span className='w-2 h-1 bg-brown'></span>
                    <span className='w-3 h-1 bg-brown'></span>
                  </div>
                </div>
              </Col>
              <Col className='d-none d-lg-flex gap-3 d-lg-flex d-xl-flex justify-content-end' xs={{ order: 2, span: 6 }} md={{ span: 4, order: 3 }}>
                <Input filter={filter} setFilter={setFilter} placeholder='Search' />
                <Input placeholder='Filter' />
              </Col>
              <Col className='' xs={{ order: 3, span: 12 }} md={{ order: 2, span: 4 }}>
                <div className='d-flex mt-2 mt-md-0 bg-white flex-row align-items-center d-lg-none justify-content-center gap-2 rounded border border-1 border-borderColor'>
                  <span className='w-100 p-2 text-center size weight text-gray bg-activeBg'>Active ({filterData.length})</span>
                  <span className='w-100 p-2 text-center size weight text-darkGray'>Archive 0</span>
                </div>
              </Col>

            </Row>

          </div>
      {clicked === 'favorites' || subNav === 'Archived Carts' ?
        <NoData />
        :
        <Data subNav={subNav} setSubNav={setSubNav} SubData={SubData} filter={filter} setFilter={setFilter} filterData={filterData} />
      }
      </div>
    </div>
  )
}

export default Home