import { useState } from 'react'
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import IosShareIcon from '@mui/icons-material/IosShare'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import classes from '../../theme/Styles'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import './ClientesFilter.css'

const ClientesFilter = ({ handleFilter, filterValue, setFiltersDisplayed, filtersDisplayed }) => {

    const [mouseOn, setMouseOn] = useState(false)

    return (
        <div className='clientesFilter'>
            <div className="filterItem">
                <FormControl>
                    <Select
                        name='perPage'
                        value={filterValue.perPage}
                        onChange={handleFilter}
                        IconComponent={KeyboardArrowDownOutlinedIcon}
                        sx={{
                            ...classes.input,
                            width: 'fit-content'
                        }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                    </Select>
                </FormControl>
                <p>{window.location.pathname === '/clientes' ? 'Clientes' : 'Ventas'} por página</p>
            </div>
            <div className="filterItem" style={{width: '30%'}}>
                <FormControl sx={{ width: '100%'}}>
                    <OutlinedInput
                        placeholder='Buscar'
                        name='client'
                        value={filterValue.client}
                        onChange={handleFilter}
                        sx={classes.searchBar}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>

            <div className='filterButtons'>
                {window.location.pathname === '/clientes' ? (
                    <div className="filterItem">
                        <FormControl sx={{ width: '330px' }}>
                            <InputLabel id="situationLabel">Estado del cliente</InputLabel>
                            <Select
                                labelId='situationLabel'
                                label='Estado del cliente'
                                name='situation'
                                IconComponent={KeyboardArrowDownOutlinedIcon}
                                value={filterValue.situation}
                                onChange={handleFilter}
                                sx={classes.input}
                            >
                                <MenuItem value={''}>Todos</MenuItem>
                                <MenuItem value={'Monotributista'}>Monotributista</MenuItem>
                                <MenuItem value={'Particular'}>Particular</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                ) : false}

                <div className="filterItem">
                    <button className='buttonVariant' style={{ maxWidth: '168px' }}>
                        <IosShareIcon />
                        Exportar
                    </button>
                </div>

                {window.location.pathname === '/cotizador' || window.location.pathname === '/ventas' ? (
                    <div className="filterItem">
                        <button onClick={() => setFiltersDisplayed(!filtersDisplayed)} className='buttonVariant' style={{ maxWidth: '168px' }}>
                            <TuneOutlinedIcon />
                            Filtros
                        </button>
                    </div>
                ) : false}

                {window.location.pathname === '/ventas' ? (
                    <div className="filterItem">
                        <button
                            onMouseEnter={() => setMouseOn(true)}
                            onMouseLeave={() => setMouseOn(false)}
                            className='secondaryButton'>
                            <svg style={{ fill: mouseOn ? '#fff' : '#383838' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.8533 0C9.50897 0 7.21725 0.703788 5.26798 2.02236C3.31871 3.34094 1.79944 5.21509 0.902286 7.4078C0.00513588 9.60051 -0.2296 12.0133 0.227764 14.3411C0.685127 16.6689 1.81405 18.8071 3.47177 20.4853C5.12948 22.1635 7.24155 23.3064 9.54087 23.7694C11.8402 24.2324 14.2235 23.9948 16.3894 23.0866C18.5553 22.1783 20.4066 20.6402 21.709 18.6668C23.0115 16.6935 23.7067 14.3734 23.7067 12C23.7033 8.81846 22.4533 5.76821 20.2312 3.51852C18.009 1.26883 14.996 0.00344108 11.8533 0V0ZM11.8533 22C9.8997 22 7.98993 21.4135 6.36554 20.3147C4.74115 19.2159 3.47509 17.6541 2.72746 15.8268C1.97984 13.9996 1.78422 11.9889 2.16536 10.0491C2.5465 8.10929 3.48726 6.32746 4.86869 4.92893C6.25013 3.53041 8.01018 2.578 9.92628 2.19215C11.8424 1.8063 13.8285 2.00433 15.6334 2.76121C17.4383 3.51808 18.981 4.79981 20.0664 6.4443C21.1518 8.08879 21.7311 10.0222 21.7311 12C21.7282 14.6513 20.6866 17.1931 18.8348 19.0679C16.983 20.9426 14.4722 21.9971 11.8533 22V22ZM16.7922 12C16.7922 12.2652 16.6882 12.5196 16.5029 12.7071C16.3177 12.8946 16.0664 13 15.8044 13H12.8411V16C12.8411 16.2652 12.737 16.5196 12.5518 16.7071C12.3666 16.8946 12.1153 17 11.8533 17C11.5914 17 11.3401 16.8946 11.1549 16.7071C10.9696 16.5196 10.8656 16.2652 10.8656 16V13H7.90223C7.64025 13 7.38901 12.8946 7.20376 12.7071C7.01852 12.5196 6.91445 12.2652 6.91445 12C6.91445 11.7348 7.01852 11.4804 7.20376 11.2929C7.38901 11.1054 7.64025 11 7.90223 11H10.8656V8C10.8656 7.73478 10.9696 7.48043 11.1549 7.29289C11.3401 7.10536 11.5914 7 11.8533 7C12.1153 7 12.3666 7.10536 12.5518 7.29289C12.737 7.48043 12.8411 7.73478 12.8411 8V11H15.8044C16.0664 11 16.3177 11.1054 16.5029 11.2929C16.6882 11.4804 16.7922 11.7348 16.7922 12Z" />
                            </svg>
                            Nueva cotización
                        </button>
                    </div>
                ) : false}
            </div>
        </div>
    )
}
export default ClientesFilter