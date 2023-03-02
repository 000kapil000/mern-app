import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Register from './pages/Auth/Register'
import Contect from './pages/Contect'
import HomePage from './pages/HomePage'
import Pagenotfound from './pages/Pagenotfound'
import Policy from './pages/Policy'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
<>
<Routes>
<Route path='/register' element={<Register/>}/>
<Route path='/' element={<HomePage/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contect/>}/>
<Route path='/policy' element={<Policy/>}/>
<Route path='*' element={<Pagenotfound/>}/>

</Routes>
</>
  )
}

export default App