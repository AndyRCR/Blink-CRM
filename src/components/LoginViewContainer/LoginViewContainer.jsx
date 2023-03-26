import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import './LoginViewContainer.css'

const LoginViewContainer = () => {
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