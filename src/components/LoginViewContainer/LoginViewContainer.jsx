import React, { useEffect, useState } from 'react'
import Background from '../Background/Background'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import './LoginViewContainer.css'

const LoginViewContainer = () => {

    const [position, setPosition] = useState(0)

    const handleResize = () => {
        const width = document.querySelector('.loginViewContainer').clientWidth

        document.querySelectorAll('.loginViewContainer .section').forEach(el => {
            el.style.transform = `translateX(-${width * position}px)`
        })
    }

    useEffect(() => {
        if(position === 0){
            window.scrollTo({top: 0, behavior: 'smooth'})
            document.body.style.overflowY = 'hidden'
        } else{
            document.body.style.overflowY = 'visible'
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

  return (
    <div style={{overflow: 'hidden'}}>
        <Background/>
        <div className='loginViewContainer'>
            <LoginForm setPosition={setPosition}/>
            <RegisterForm setPosition={setPosition}/>
        </div>
    </div>
  )
}

export default LoginViewContainer