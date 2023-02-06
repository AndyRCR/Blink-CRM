import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import ClientesView from '../views/ClientesView'
import CotizadorView from '../views/CotizadorView'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import PerfilView from '../views/PerfilView'
import PrepagasView from '../views/PrepagasView'
import SoporteView from '../views/SoporteView'
import ValidationView from '../views/ValidationView'
import VentasLiquidacionView from '../views/VentasLiquidacionView'
import VentasVentaView from '../views/VentasVentaView'
import VentasView from '../views/VentasView'

const AnimatedRoutes = () => {

    const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Layout/>}>
                <Route index element={<LoginView/>} />
                <Route path='/validation' element={<ValidationView/>} />
                <Route path='/home' element={<HomeView/>} />
                <Route path='/perfil' element={<PerfilView/>} />
                <Route path='/clientes' element={<ClientesView/>} />
                <Route path='/prepagas' element={<PrepagasView/>} />
                <Route path='/soporte' element={<SoporteView/>} />
                <Route path='/cotizador' element={<CotizadorView/>} />
                <Route path='/ventas'>
                    <Route exact path='/ventas' element={<VentasView/>}/>
                    <Route path='/ventas/liquidacion/:id' element={<VentasLiquidacionView/>}/>
                    <Route path='/ventas/venta/:id' element={<VentasVentaView/>}/>
                </Route>
            </Route>
        </Routes>
    </AnimatePresence>
)
}

export default AnimatedRoutes