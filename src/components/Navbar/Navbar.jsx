import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Navbar.css'

const Navbar = () => {

  const {windowHeight} = useContext(GlobalContext)

  const [scroll, setScroll] = useState(0)

  const navigate = useNavigate()

  const handleScroll = () => setScroll(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () =>{
        window.removeEventListener('scroll', handleScroll)
    }

    // eslint-disable-next-line
}, [scroll])

  return (
    <div className={scroll < 10 ? 'navbar' : 'navbar navbarTransparent'}>
        <div className='logo'>
          {windowHeight < 500 ? 'b' : 'blink'}
        </div>
        <button
        onClick={() => {
          document.body.style.overflowY = 'auto'
          navigate('/')}}
        className='secondaryButton'>
          Asesores
        </button>
    </div>
  )
}

export default Navbar