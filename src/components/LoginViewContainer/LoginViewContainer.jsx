import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Background from '../Background/Background'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import './LoginViewContainer.css'

const LoginViewContainer = () => {

    const [position, setPosition] = useState(0)

    // const handleResize = () => {
    //     const width = document.querySelector('.loginViewContainer').clientWidth

    //     document.querySelectorAll('.loginViewContainer .section').forEach(el => {
    //         el.style.transform = `translateX(-${width * position}px)`
    //     })
    // }

    useEffect(() => {
        if(position === 0){
            window.scrollTo({top: 0, behavior: 'smooth'})
            document.body.style.overflowY = 'hidden'
        } else{
            document.body.style.overflowY = 'visible'
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

  return (
    <div style={{overflow: 'hidden'}}>
        <Background/>
        <div
        style={{
            backgroundColor: position === 0 ? 'transparent' : 'var(--blink-main)'
        }}
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