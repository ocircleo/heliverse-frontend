
import { Outlet } from 'react-router-dom'
import './App.css'
import SideBar from './components/sidebar/SideBar'
import Navbar from './components/navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { autoLogin, logout } from './features/dataSlice/userSlice'
import { getGroup } from './features/dataSlice/groupSlice'

function App() {
  const dispatch = useDispatch()
  const { user_data } = useSelector(state => state.userReducer)
  useEffect(() => {
    let token = localStorage.getItem('acces-token');
    let email = localStorage.getItem("acces-email");
    if (token && email) {
      const headers = { authorization: `bearer ${token}` }
      const data = { email: email }
      dispatch(autoLogin({ headers, data }))
    } else if (!user_data?.email) {
      dispatch(logout())
    }

  }, [])
  useEffect(() => {
    if (user_data.email) {
      let email = user_data.email;
      try {
        fetch("https://heliverse-omega.vercel.app/jwt", {
          method: 'POST',
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: email })
        }).then(res => res.json()).then(data => {
          localStorage.setItem("acces-token", data.token)
          localStorage.setItem("acces-email", user_data.email)
        })
      } catch (error) {

      } finally {
        dispatch(getGroup(user_data.email))
      }
    }
  }, [user_data.email])

  return (
    <div>
      <SideBar>
      </SideBar>
      <div className='h-screen w-auto bg-slate-200 overflow-y-scroll'>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
