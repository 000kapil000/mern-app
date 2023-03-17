import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Register from './pages/Auth/Register'
import Contect from './pages/Contect'
import HomePage from './pages/HomePage'
import Pagenotfound from './pages/Pagenotfound'
import Policy from './pages/Policy'
import Login from './pages/Auth/Login'
import Dashboard from './pages/user/Dashboard'
import PrivateRoute from './components/Routes/Private'
const App = () => {
  return (
<>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/dashboard' element={<PrivateRoute/>}>
<Route path='' element={<Dashboard/>}/>
</Route>

<Route path='/contact' element={<Contect/>}/>
<Route path='/policy' element={<Policy/>}/>
<Route path='*' element={<Pagenotfound/>}/>
<Route path='/register' element={<Register/>}/>
</Routes>
</>
  )
}

export default App