
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Form1 from './Pages/Form1'
import Form2 from './Pages/Form2'
import Home from './Pages/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/form1' element={<Form1 />} />
      <Route path='/form2' element={<Form2 />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App