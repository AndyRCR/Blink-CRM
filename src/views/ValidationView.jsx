import React from 'react'
import { motion } from 'framer-motion'
import ValidationViewContainer from '../components/ValidationViewContainer/ValidationViewContainer'

const ValidationView = () => {
  return (
    <motion.div
    className='validation'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <ValidationViewContainer/>
    </motion.div>
  )
}

export default ValidationView