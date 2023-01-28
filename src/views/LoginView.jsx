import React from 'react'
import { motion } from 'framer-motion'
import LoginViewContainer from '../components/LoginViewContainer/LoginViewContainer'

const LoginView = () => {
  return (
    <motion.div
    className='login'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <LoginViewContainer/>
    </motion.div>
  )
}

export default LoginView