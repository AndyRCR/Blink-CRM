import { AnimatePresence } from 'framer-motion'
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Background from '../Background/Background'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import './LoginViewContainer.css'

const LoginViewContainer = () => {

    const {windowHeight} = useContext(GlobalContext)

    const [position, setPosition] = useState(0)

  return (
    <div style={{overflow: 'auto', height: '100vh'}}>
        {/* <Background/> */}
        <div className='loginViewContainer'>
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