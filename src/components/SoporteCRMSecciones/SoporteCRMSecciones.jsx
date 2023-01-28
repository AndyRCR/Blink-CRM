import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import classes from '../../theme/Styles'
import './SoporteCRMSecciones.css'

const sections = [
    {
        title: 'Mi perfil',
        about: 'tu perfil',
        icon: <PersonOutlinedIcon
        sx={{
            "&.MuiSvgIcon-root": {
                width: "auto",
                height: "80px",
            },
        }}/>
    },
    {
        title: 'Cotizador',
        about: 'el cotizador',
        icon: <QueryStatsOutlinedIcon
        sx={{
            "&.MuiSvgIcon-root": {
                width: "auto",
                height: "80px",
            },
        }}/>
    },
    {
        title: 'Ventas',
        about: 'tus cierres',
        icon: <AccountBalanceWalletOutlinedIcon
        sx={{
            "&.MuiSvgIcon-root": {
                width: "auto",
                height: "80px",
            },
        }}/>
    },
    { 
        title: 'Ejemplo',
        about: 'tu ejemplo',
        icon: <AutoAwesomeOutlinedIcon
        sx={{
            "&.MuiSvgIcon-root": {
                width: "auto",
                height: "56px",
            },
        }}/>
    }
]

const SoporteCRMSecciones = ({setPosition}) => {

    return (
        <div className='soporteCRMSecciones'>

            <div className='inputContainer'>
                <FormControl sx={{ width: '100%' }}>
                <OutlinedInput
                    placeholder='Buscar'
                    name='search'
                    sx={classes.searchBar}
                    startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                    }
                />
                </FormControl>
            </div>

            <div className="secciones">
                {sections.map( (section, i) => {
                    return (
                        <div
                        onClick={() => setPosition(1)}
                        className="seccion"
                        key={`seccion${i+1}`}>
                            {section.icon}
                            <div>
                                <div className="title">{section.title}</div>
                                <p>Todo lo que tenés que saber sobre {section.about}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default SoporteCRMSecciones