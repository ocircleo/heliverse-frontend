
import { Outlet } from 'react-router-dom'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import Navbar from './components/navbar/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

function App() {
  
  return (
    <div>
      <SideBar>
      </SideBar>
      <div className='h-screen w-auto bg-slate-100 overflow-y-scroll'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
