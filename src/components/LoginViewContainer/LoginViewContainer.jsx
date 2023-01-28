import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Background from '../Background/Background'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import './LoginViewContainer.css'

const LoginViewContainer = () => {

    const {loginState} = useContext(GlobalContext)

    const handleResize = () => {
        const width = document.querySelector('.loginViewContainer').clientWidth

        document.querySelectorAll('.loginViewContainer .section').forEach(el => {
            el.style.transform = `translateX(-${width * loginState}px)`
        })
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginState])

  return (
    <div style={{overflow: 'hidden', loginState: 'relative'}}>
        <Background/>
        <div className='loginViewContainer'>
            <LoginForm/>
            <RegisterForm/>
        </div>
    </div>
  )
}

export default LoginViewContainer