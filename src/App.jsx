import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Pricing_Table from './Component/Pricing_Table'

function App() {
  return (
   <Routes>
   
    <Route path='' element = {<Pricing_Table/>}/>
   
   </Routes>
  )
}

export default App