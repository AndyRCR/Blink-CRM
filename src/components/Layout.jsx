import React, { useContext } from 'react'
import { Person2Outlined } from '@mui/icons-material'
import { Outlet, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalStateContext'
import DashboardNavbar from './DashboardNavbar/DashboardNavbar'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'
import Swal from 'sweetalert2'

const Layout = () => {

  const navigate = useNavigate()

  const {user} = useContext(GlobalContext)

  return (
    window.location.pathname === '/' || window.location.pathname === '/validation' ? (
      <>
        <Navbar/>
        <Outlet/>
      </>
    ) : (
      <>
        <div
        onClick={() => {
          Swal.close()
          document.querySelector('.userStep').style.display = 'none'
          navigate('/perfil')
        }}
        className='userStep'>
            <div className='userInfo'>
                <div className="userName">Hola, {user.firstname}</div>
                <div className="userLevel">Nivel {user.level}</div>
            </div>
            <div className='userIcon'>
              <Person2Outlined fontSize='large'/>
            </div>
        </div>
        <DashboardNavbar/>
        <div className='panelContainer'>
          <Menu/>
          <Outlet/>
        </div>
      </>
    )   
  )
}

export default Layout