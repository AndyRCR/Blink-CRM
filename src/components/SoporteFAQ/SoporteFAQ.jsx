import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect } from 'react'
import classes from '../../theme/Styles'
import './SoporteFAQ.css'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et ultricies sagittis eget nulla laoreet. Sagittis, purus dictum enim interdum id velit. Orci, magna ultricies est sit euismod. Cras volutpat id elementum aenean netus. Justo, ut arcu tempor sodales porttitor. Dui sapien enim pharetra lacus. Tempor diam integer lacus imperdiet felis ut. Sed tempor, morbi vitae lacinia varius risus ut sociis. Viverra imperdiet porttitor ipsum, feugiat quis erat. Sollicitudin sit cras.'
const faq = [
    '¿Cómo cambio mi foto de perfil?',
    '¿Cómo subo mi constancia de AFIP?',
    'Pregunta 3'
]

const SoporteFAQ = ({ setPosition }) => {

    const handleScroll = (e) => {
        if (e !== undefined) {
            const height = e.target.scrollTop

            document.querySelector('.soporteFAQ .secondaryButton').style.top = `${window.innerHeight - 341 + height}px`
        }
    }

    useEffect(() => {
        document.querySelector('.soporteFAQ .secondaryButton').style.top = `${window.innerHeight - 341}px`

        document.querySelector('.soporte').addEventListener('scroll', handleScroll)

        return () => document.querySelector('.soporte')?.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='soporteFAQ'>
            <div
                className="secondaryButton"
                onClick={() => {
                    document.querySelector('.soporte').scrollTo({ top: 0, behavior: 'smooth' })
                    setPosition(0)
                }}>
                <ReplyOutlinedIcon />
                Volver
            </div>

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

            <div className='accordionContainer'>
                {faq.map( (faq, i) => {
                    return (
                        <Accordion className='withoutLine' sx={classes.accordion} key={`faq${i+1}`}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                {faq}
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="text">
                                    {text}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        </div>
    )
}
export default SoporteFAQ