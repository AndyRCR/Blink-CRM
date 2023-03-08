import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './ResponsiveMenu.css'

const ResponsiveMenu = () => {

    const navigate = useNavigate()

    const { responsiveMenuDisplayed, setResponsiveMenuDisplayed, user, userStatuses } = useContext(GlobalContext)

    const handleNavigation = path => {
        setResponsiveMenuDisplayed(false)
        if(user.status === userStatuses['completo']) navigate(path)
    }

    return (
        <div className={responsiveMenuDisplayed ? 'responsiveMenu extended' : 'responsiveMenu'}>
            <div className="menuOptions">
                <div
                onClick={() => handleNavigation('/home')}
                className={window.location.pathname === '/home'
                    ? `responsiveMenuItem active`
                    : 'responsiveMenuItem'}>
                    Inicio
                </div>
                <div
                onClick={() => handleNavigation('/cotizador')}
                className={window.location.pathname === '/cotizador'
                    ? `responsiveMenuItem active`
                    : 'responsiveMenuItem'}>
                    Cotizador
                </div>
                <div
                onClick={() => handleNavigation('/ventas')}
                className={window.location.pathname === '/ventas'
                    ? `responsiveMenuItem active`
                    : 'responsiveMenuItem'}>
                    Ventas
                </div>
                <div
                onClick={() => handleNavigation('/clientes')}
                className={window.location.pathname === '/clientes'
                    ? `responsiveMenuItem active`
                    : 'responsiveMenuItem'}>
                    Clientes
                </div>
                <div
                onClick={() => handleNavigation('/prepagas')}
                className={window.location.pathname === '/prepagas'
                    ? `responsiveMenuItem active`
                    : 'responsiveMenuItem'}>
                    Prepagas
                </div>
                <div
                onClick={() => handleNavigation('/escuelita')}
                className={window.location.pathname === '/escuelita'
                    ? `responsiveMenuItem active`
                    : 'responsiveMenuItem'}>
                    Escuelita
                </div>
                <div className="responsiveMenuItem">
                    Marketing
                </div>
                <div
                onClick={() => handleNavigation('/soporte')}
                className={window.location.pathname === '/soporte'
                    ? `responsiveMenuItem active`
                    : 'responsiveMenuItem'}>
                    Soporte
                </div>
            </div>

            <div
            onClick={() => {
                navigate('/')
                setResponsiveMenuDisplayed(false)
            }}
            className="responsiveMenuItem">
                Salir
            </div>
        </div>
    )
}
export default ResponsiveMenu