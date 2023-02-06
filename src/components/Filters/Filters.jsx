import { Checkbox, FormControl, FormControlLabel, FormGroup, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
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
                                inputFormat="MM/DD/YYYY"
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
                                inputFormat="MM/DD/YYYY"
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
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                            <div className='divisor'>-</div>
                            <TextField
                                sx={classes.input}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                            />
                        </div>
                    </div>
                    <div className="filterButtons">
                        {/* <button className='secondaryButton'>Aplicar</button> */}
                        <button className='secondaryButton'>Aplicar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filters