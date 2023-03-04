import { Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useState } from 'react'
import classes from '../../theme/Styles'
import './Filters.css'

const Filters = ({ displayed }) => {

    const [initialDate, setInitialDate] = useState(new Date())
    const [finalDate, setFinalDate] = useState(new Date())

    return (
        <div className={displayed ? 'filters displayed' : 'filters'}>
            <div className='filtersContainer'>
                <div className="filterSection">
                    <div className="filterItem">
                        <label>Estado de venta</label>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox
                                // checked={benefitsFiltereds.indexOf('copay') > -1}
                                // onChange={(e) => handleBenefits(e, 'copay')}
                                />}
                                label='Ingresada' />
                            <FormControlLabel
                                control={<Checkbox />}
                                label='Procesada' />
                            <FormControlLabel
                                control={<Checkbox />}
                                label='A Liquidar' />
                            <FormControlLabel
                                control={<Checkbox />}
                                label='Observada' />
                            <FormControlLabel
                                control={<Checkbox />}
                                label='Rechazada' />
                        </FormGroup>
                    </div>
                </div>
                <div className="filterSection">
                    <div className="filterItem">
                        <label>Situación laboral</label>
                        <FormControl sx={{ width: '330px' }}>
                            <Select
                                name='situation'
                                defaultValue='Seleccionar...'
                                IconComponent={KeyboardArrowDownOutlinedIcon}
                                sx={classes.input}
                            >
                                <MenuItem value={'Seleccionar...'}>Seleccionar...</MenuItem>
                                <MenuItem value={'Monotributista'}>Monotributista</MenuItem>
                                <MenuItem value={'Particular'}>Particular</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="filterItem">
                        <label>Prepagas</label>
                        <FormControl sx={{ width: '330px' }}>
                            <Select
                                name='prepagas'
                                defaultValue='Seleccionar...'
                                IconComponent={KeyboardArrowDownOutlinedIcon}
                                sx={classes.input}
                            >
                                <MenuItem value={'Seleccionar...'}>Seleccionar...</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="filterItem">
                        <label>Lote</label>
                        <FormControl sx={{ width: '330px' }}>
                            <Select
                                name='lote'
                                defaultValue='Seleccionar...'
                                IconComponent={KeyboardArrowDownOutlinedIcon}
                                sx={classes.input}
                            >
                                <MenuItem value={'Seleccionar...'}>Seleccionar...</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="filterSection">
                    <div className="filterItem">
                        <label>Fecha de vigencia: Desde</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                IconComponent={KeyboardArrowDownOutlinedIcon}
                                inputFormat="DD/MM/YYYY"
                                value={initialDate}
                                onChange={setInitialDate}
                                renderInput={(params) => (
                                    <TextField sx={classes.input} {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="filterItem">
                        <label>Fecha de vigencia: Hasta</label>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                IconComponent={KeyboardArrowDownOutlinedIcon}
                                inputFormat="DD/MM/YYYY"
                                value={finalDate}
                                onChange={setFinalDate}
                                renderInput={(params) => (
                                    <TextField sx={classes.input} {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="filterItem">
                        <label>Cuota neta</label>
                        <div className='filterPrice'>
                            <TextField
                                sx={classes.input}
                                placeholder='Desde'
                                type='number'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                            <div className='divisor'>-</div>
                            <TextField
                                sx={classes.input}
                                placeholder='Hasta'
                                type='number'
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                        </div>
                    </div>
                    <div className="filterButtons">
                        <button className='cleanButton'>
                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.715 1.28466C23.5251 1.09548 23.268 0.989258 23 0.989258C22.732 0.989258 22.4749 1.09548 22.285 1.28466L17.521 6.04866L17.201 5.73566C16.3573 4.91161 15.2499 4.41174 14.0738 4.32412C12.8977 4.2365 11.7285 4.56673 10.772 5.25666C9.39154 6.29765 7.85708 7.11684 6.224 7.68465L4.15 8.29265C3.47605 8.49049 2.85093 8.82712 2.31482 9.28091C1.7787 9.73471 1.34344 10.2956 1.037 10.9276C0.735606 11.5511 0.567738 12.2306 0.544147 12.9227C0.520555 13.6148 0.64176 14.3041 0.9 14.9466C1.87878 17.3494 3.55671 19.4028 5.71632 20.8406C7.87593 22.2784 10.4176 23.0345 13.012 23.0106H13.936C14.1427 23.0105 14.3445 22.947 14.514 22.8286C16.2742 21.6797 17.7785 20.1801 18.9331 18.4235C20.0876 16.667 20.8675 14.6912 21.224 12.6196C21.348 11.8275 21.2808 11.0173 21.0281 10.2564C20.7753 9.49552 20.3443 8.80611 19.771 8.24565L18.971 7.46165L23.718 2.71466C23.9068 2.5244 24.0125 2.26707 24.0119 1.99904C24.0113 1.73101 23.9046 1.47413 23.715 1.28466ZM13.608 20.9846H13.008C11.5304 20.9867 10.0668 20.6989 8.7 20.1376L8.711 20.1316C10.4599 19.2541 11.9571 17.9465 13.062 16.3316L13.58 15.5706C13.7309 15.3492 13.7877 15.0769 13.7378 14.8136C13.6879 14.5503 13.5355 14.3176 13.314 14.1666C13.0925 14.0157 12.8202 13.959 12.5569 14.0089C12.2936 14.0588 12.0609 14.2112 11.91 14.4326L11.392 15.1936C10.4792 16.5252 9.24326 17.6032 7.8 18.3266L6.549 18.9566C5.54812 18.2531 4.67459 17.384 3.966 16.3866C5.60498 15.8352 7.1003 14.9251 8.343 13.7226C8.53475 13.5351 8.64416 13.2791 8.64716 13.011C8.65016 12.7428 8.54651 12.4844 8.359 12.2926C8.17149 12.1009 7.91549 11.9915 7.64731 11.9885C7.37914 11.9855 7.12075 12.0891 6.929 12.2766C5.80989 13.361 4.44403 14.1572 2.949 14.5966C2.888 14.4616 2.822 14.3296 2.767 14.1906C2.61212 13.8103 2.53962 13.4014 2.55427 12.991C2.56892 12.5806 2.6704 12.178 2.852 11.8096C3.03585 11.4314 3.29659 11.0957 3.61755 10.824C3.93851 10.5523 4.31263 10.3506 4.716 10.2316L6.789 9.62365C7.99195 9.2372 9.14264 8.70385 10.215 8.03565L18.13 15.7476C17.0784 17.8411 15.5248 19.6417 13.608 20.9886V20.9846ZM19.228 12.3016C19.1516 12.7695 19.0484 13.2326 18.919 13.6886L11.948 6.89965C12.4594 6.53209 13.0732 6.33414 13.703 6.33365C14.4821 6.33267 15.2304 6.63753 15.787 7.18265L18.356 9.69165C18.699 10.0265 18.957 10.4383 19.1087 10.893C19.2604 11.3477 19.3013 11.832 19.228 12.3056V12.3016Z" fill="#4744CC" />
                            </svg>
                            Limpiar
                        </button>
                        <button className='secondaryButton'>Aplicar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filters