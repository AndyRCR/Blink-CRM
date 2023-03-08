import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Background from '../Background/Background'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import './LoginViewContainer.css'

const LoginViewContainer = () => {

    const {windowHeight} = useContext(GlobalContext)

    const [position, setPosition] = useState(0)

    // const handleResize = () => {
    //     const width = document.querySelector('.loginViewContainer').clientWidth

    //     document.querySelectorAll('.loginViewContainer .section').forEach(el => {
    //         el.style.transform = `translateX(-${width * position}px)`
    //     })
    // }

    useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div style={{overflow: 'auto'}}>
        {/* <Background/> */}
        <div
        // style={{
        //     backgroundColor: position === 0 ? 'transparent' : 'var(--blink-main)'
        // }}
        className='loginViewContainer'>
            <AnimatePresence>
                <LoginForm position={position} setPosition={setPosition}/>
            </AnimatePresence>
            <AnimatePresence>
                <RegisterForm position={position} setPosition={setPosition}/>
            </AnimatePresence>
        </div>
    </div>
  )
}

export default LoginViewContainer