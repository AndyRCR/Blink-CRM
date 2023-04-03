import React, { useContext } from 'react'
import { Person2Outlined } from '@mui/icons-material'
import { Outlet, useNavigate } from 'react-router-dom'
import DashboardNavbar from './DashboardNavbar/DashboardNavbar'
import Menu from './Menu/Menu'
import Navbar from './Navbar/Navbar'
import Swal from 'sweetalert2'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ResponsiveMenu from './ResponsiveMenu/ResponsiveMenu'
import { UserGlobalContext } from '../context/UserContex'

const Layout = () => {

  const navigate = useNavigate()

  const { user } = useContext(UserGlobalContext)

  return (
    window.location.pathname === '/' || window.location.pathname === '/validation' ? (
      <>
        <Navbar />
        <Outlet />
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
            <div className="userName">Hola, {user?.name.split(' ')[0]}</div>
            <div className="userLevel">Nivel {user?.level}</div>
          </div>
          <div className='userIcon'>
            <Person2Outlined fontSize='large' />
          </div>
        </div>
        <DashboardNavbar />
        <ResponsiveMenu />
        <div className='panelContainer'>
          <Menu />
          <Outlet />
          <ToastContainer
            position="bottom-center"
            autoClose={2000}
            limit={3}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
            theme="colored"
          />
        </div>
      </>
    )
  )
}

export default Layout