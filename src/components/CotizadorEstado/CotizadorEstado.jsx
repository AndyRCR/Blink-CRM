import { Calendar } from "react-calendar"
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined'
import './CotizadorEstado.css'
import { Checkbox, OutlinedInput } from "@mui/material"
import classes from "../../theme/Styles"
import { useState } from "react"

const days = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa']
const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic']

const dateRanges = (year, sum = 0) => {
    return  Math.floor(parseInt(year) / 10) * 10 + sum + 1
}

const CotizadorEstado = ({setOpen}) => {

    const [state, setState] = useState('am')

    const formatDate = (date, view) => {
        const dateArray = date.toLocaleDateString(
        'es-PE', 
        {
            month: "long",
            year: "numeric"
        }).replace('.','').split(' ')

        if(view === 'decade') return `${dateRanges(dateArray[2])} - ${dateRanges(dateArray[2], 9)}`
        if(view === 'year') return dateArray[2]
        return `${dateArray[0][0].toUpperCase() + dateArray[0].slice(1,3)} ${dateArray[2]}`
    }

    return (
        <div className="cotizadorEstado">
            <div className="checkboxContainer">
                <div className="checkboxInput">
                    <Checkbox/>
                    <p>No respondió</p>
                </div>

                <div className="checkboxInput">
                    <Checkbox/>
                    <p>Reagendar llamada</p>
                </div>

                <div className="checkboxInput">
                    <Checkbox/>
                    <p>Decidió no contratar</p>
                </div>

                <div className="checkboxInput">
                    <Checkbox/>
                    <p>Contactado por WhatsApp</p>
                </div>

                <div className="checkboxInput">
                    <Checkbox/>
                    <p>Pidió reveer la cotización el mes que viene</p>
                </div>
            </div>

            <div className="dateContainer">
                <Calendar
                className='customCalendar'
                minDetail="decade"
                formatShortWeekday={(locale, date) => days[date.getDay()]}
                formatMonth={(locale,date) => months[date.getMonth()]}
                navigationLabel={({date, view}) => formatDate(date, view)}
                nextLabel={<NavigateNextOutlinedIcon sx={{cursor: 'pointer'}}/>}
                prevLabel={<NavigateBeforeOutlinedIcon sx={{cursor: 'pointer'}}/>}
                minDate={new Date()}
                defaultValue={new Date()} />

                <div className="dateInput">
                    <div className="hourInput">
                        <div className="header">Hora</div>
                        <div className="body">
                            <div className="input">
                                <OutlinedInput
                                    type="text"
                                    name="hour"
                                    defaultValue={'10'}
                                    sx={{
                                        ...classes.input,
                                        height: '40px',
                                        width: '42px',
                                        padding: '10px',
                                        '& .MuiInputBase-input': {
                                            padding: '0'
                                        }
                                    }}
                                />
                                <p style={{width: '15px'}}>:</p>
                                <OutlinedInput
                                    type="text"
                                    name="minute"
                                    defaultValue={'00'}
                                    sx={{
                                        ...classes.input,
                                        width: '42px',
                                        height: '40px',
                                        padding: '10px',
                                        '& .MuiInputBase-input': {
                                            padding: '0'
                                        }
                                    }}
                                />
                            </div>
                            <div className="hourSwitch">
                                <div
                                onClick={() => setState('am')}
                                className={state === 'am' ? 'enabled' : ''}>AM</div>
                                <div
                                onClick={() => setState('pm')}
                                className={state === 'pm' ? 'enabled' : ''}>PM</div>
                            </div>
                        </div>
                    </div>

                    <div className="buttonContainer">
                        <button
                        onClick={() => setOpen(false)}
                        className="secondaryButton">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CotizadorEstado