import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import classes from '../../theme/Styles';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalStateContext';
import { useContext } from 'react';
import './Menu.css'

const Menu = () => {

    const navigate = useNavigate()

    const {user, userStatuses, menuState} = useContext(GlobalContext)

    const handleNavigation = path => user.status === userStatuses['completo'] ? navigate(path) : false

  return (
    <div className={user.status === userStatuses['nuevo']
    ? `menu inactiveMenu ${menuState ? 'folded' : ''}`
    : user.status === userStatuses['aprobado']
    ? `menu semiActiveMenu ${menuState ? 'folded' : ''}`
    : `menu activeMenu ${menuState ? 'folded' : ''}`}>
        <div>
            <div
            onClick={() => navigate('/home')}
            className={window.location.pathname === '/home'
            ? `menuItem activeMenuItem`
            : 'menuItem'}>
                <HomeOutlinedIcon sx={classes.menuIcon}/>
                <p>Inicio</p>
            </div>
            <div
            onClick={() => handleNavigation('/cotizador')}
            className={window.location.pathname === '/cotizador' ? `menuItem activeMenuItem` : 'menuItem'}>
                <QueryStatsOutlinedIcon sx={classes.menuIcon}/>
                <p>Cotizador</p>
            </div>
            <div
            onClick={() => handleNavigation('/ventas')}
            className={window.location.pathname.includes('/ventas') ? `menuItem activeMenuItem` : 'menuItem'}>
                <AccountBalanceWalletOutlinedIcon sx={classes.menuIcon}/>
                <p>Ventas</p>
            </div>
            <div
            onClick={() => handleNavigation('/clientes')}
            className={window.location.pathname === '/clientes' ? `menuItem activeMenuItem` : 'menuItem'}>
                <AssignmentIndOutlinedIcon sx={classes.menuIcon}/>
                <p>Clientes</p>
            </div>
            <div
            onClick={() => handleNavigation('/prepagas')}
            className={window.location.pathname === '/prepagas' ? `menuItem activeMenuItem` : 'menuItem'}>
                <MedicalServicesOutlinedIcon sx={classes.menuIcon}/>
                <p>Prepagas</p>
            </div>
            <div
            onClick={() => handleNavigation('/escuelita')}
            className={window.location.pathname === '/escuelita' ? `menuItem activeMenuItem` : 'menuItem'}>
                <SchoolOutlinedIcon sx={classes.menuIcon}/>
                <p>Escuelita</p>
            </div>
            <div className='menuItem'>
                <CampaignOutlinedIcon sx={classes.menuIcon}/>
                <p>Marketing</p>
            </div>
            <div
            onClick={() => handleNavigation('/soporte')}
            className={window.location.pathname === '/soporte' ? `menuItem activeMenuItem` : 'menuItem'}>
                <HelpOutlineOutlinedIcon sx={classes.menuIcon}/>
                <p>Soporte</p>
            </div>
        </div>
        <div
        onClick={() => navigate('/')}
        className='menuItem active'>
            <ExitToAppIcon sx={classes.menuIcon}/>
            <p>Salir</p>
        </div>
    </div>
  )
}
export default Menu