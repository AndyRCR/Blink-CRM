import { AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from '../components/Layout'
import ClientesView from '../views/ClientesView'
import CotizadorView from '../views/CotizadorView'
import EscuelitaView from '../views/EscuelitaView'
import HomeView from '../views/HomeView'
import LoginView from '../views/LoginView'
import PerfilView from '../views/PerfilView'
import PrepagasView from '../views/PrepagasView'
import SoporteView from '../views/SoporteView'
import ValidationView from '../views/ValidationView'
import VentasLiquidacionView from '../views/VentasLiquidacionView'
import VentasVentaView from '../views/VentasVentaView'
import VentasView from '../views/VentasView'
import { UserGlobalContext } from '../context/UserContex'

const AnimatedRoutes = () => {

    const location = useLocation()

    const { user } = useContext(UserGlobalContext)

    const redirect = ({component: Component}) => user === null ? <Navigate to='/' /> : <Component/>

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Layout/>}>
                    <Route index element={user === null ? <LoginView/> : <Navigate to='/home' />} />
                    <Route path='/validation' element={<ValidationView/>} />
                    <Route path='/home' element={redirect({component: HomeView})} />
                    <Route path='/perfil' element={redirect({component: PerfilView})} />
                    <Route path='/clientes' element={redirect({component: ClientesView})} />
                    <Route path='/prepagas' element={redirect({component: PrepagasView})} />
                    <Route path='/soporte' element={redirect({component: SoporteView})} />
                    <Route path='/cotizador' element={redirect({component: CotizadorView})} />
                    <Route path='/ventas'>
                        <Route exact path='/ventas' element={redirect({component: VentasView})}/>
                        <Route path='/ventas/liquidacion/:id' element={redirect({component: VentasLiquidacionView})}/>
                        <Route path='/ventas/venta/:id' element={redirect({component: VentasVentaView})}/>
                    </Route>
                    <Route path='/escuelita' element={redirect({component: EscuelitaView})} />
                </Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes