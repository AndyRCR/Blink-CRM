import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const [scroll, setScroll] = useState(0)

  const navigate = useNavigate()

  const handleScroll = () => setScroll(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () =>{
        window.removeEventListener('scroll', handleScroll)
    }
}, [scroll])

  return (
    <div className={scroll < 10 ? 'navbar' : 'navbar navbarTransparent'}>
        <div className='logo'>blink</div>
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