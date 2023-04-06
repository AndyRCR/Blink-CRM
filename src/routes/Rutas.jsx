import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from '../tools/ScrollToTop'
import AnimatedRoutes from './AnimatedRoutes'

const Rutas = () => {
  
  return (  
    <BrowserRouter>
        <ScrollToTop>
            <AnimatedRoutes/>
        </ScrollToTop>
    </BrowserRouter>
  )
}

export default Rutas