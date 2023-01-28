import { Person2Outlined } from '@mui/icons-material'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import classes from '../../theme/Styles'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import './DashboardNavbar.css'

const DashboardNavbar = () => {

    const navigate = useNavigate()

    const { user, menuState, setMenuState } = useContext(GlobalContext)

    return (
        <div className='dashboardNavbar'>
            <div className='logoContainer'>
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={() => setMenuState(!menuState)}
                    >
                        <MenuIcon
                        sx={ !menuState
                            ? classes.menuButtonIconOpen
                            : classes.menuButtonIconClosed
                        }
                        />
                    </IconButton>
                </div>
                <div className='logo'>blink</div>
            </div>
            <div className='navbarOptions'>
                <div className='user'>
                    <div className='userInfo'>
                        <div className="userName">Hola, {user.firstname}</div>
                        <div className="userLevel">Nivel {user.level}</div>
                    </div>
                    <div
                        onClick={() => navigate('/perfil')}
                        className='userIcon'>
                        <Person2Outlined fontSize='large' />
                    </div>
                </div>
                <NotificationsOutlinedIcon sx={classes.icon} />
            </div>
        </div>
    )
}
export default DashboardNavbar