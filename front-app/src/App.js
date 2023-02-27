import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contect from './pages/Contect'
import HomePage from './pages/HomePage'
import Pagenotfound from './pages/Pagenotfound'
import Policy from './pages/Policy'

const App = () => {
  return (
<>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contect' element={<Contect/>}/>
<Route path='/policy' element={<Policy/>}/>
<Route path='*' element={<Pagenotfound/>}/>

</Routes>
</>
  )
}

export default App