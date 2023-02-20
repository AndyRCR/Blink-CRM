import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import './EscuelitaModulos.css'
import classes from '../../theme/Styles'

const courses = [
    {
        title: 'Introducción',
        content: [
            { title: '¿Qué son las prepagas?', duration: '8m 52s', source: 'https://bucket-si.s3.amazonaws.com/videoTest.mp4'}
        ]
    },
    {
        title: 'Prepagas',
        content: [
            { title: '¿Qué son las prepagas?', duration: '8m 52s', source: 'https://bucket-si.s3.amazonaws.com/videoTest.mp4'},
            { title: '¿Son lo mismo las obras sociales?', duration: '5m 31s', source: 'https://bucket-si.s3.amazonaws.com/Que+son+las+prepagas.mp4'},
        ]
    },
    {
        title: 'Título',
        content: [
            { title: '¿Son lo mismo las obras sociales?', duration: '5m 31s', source: 'https://bucket-si.s3.amazonaws.com/Que+son+las+prepagas.mp4'},
        ]
    }
]

const EscuelitaModulos = ({setSelectedClass, selectedClass, setVideoSource}) => {

    return (
        <div className="escuelitaModulos">
            {courses.map((course, i) => {
                return (
                    <Accordion key={`course${i + 1}`} sx={classes.miniAccordion}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <div className='mainContent'>
                                <div className='circleContent'>
                                    <div className='circleIndicator'></div>
                                </div>
                                <div className='textContent'>
                                    <p className='title'>{i + 1}. {course.title}</p>
                                    <p className='subtitle'>{course.content.length} {course.content.length === 1 ? 'clase' : 'clases'}</p>
                                </div>
                            </div>
                        </AccordionSummary>
                        {course.content.map((content, j) => {
                            return (
                                <AccordionDetails
                                    sx={{
                                        backgroundColor: selectedClass[0] === i && selectedClass[1] === j ? 'var(--blink-main)' : '#fff',
                                        '& .mainContent': {
                                            color: selectedClass[0] === i && selectedClass[1] === j ? '#fff' : 'var(--blink-main)'
                                        },
                                        '& .circleIndicator': {
                                            backgroundColor: selectedClass[0] === i && selectedClass[1] === j ? 'var(--blink-main)' : '#fff',
                                            border: selectedClass[0] === i && selectedClass[1] === j ? '2px solid #fff' : '2px solid var(--blink-main)'
                                        }
                                    }}
                                    onClick={() => {
                                        setSelectedClass([i,j])
                                        setVideoSource(content.source)
                                    }}
                                    key={`content${j + 1}`}>
                                    <div className='mainContent'>
                                        <div className='circleContent' style={{height: '52px'}}>
                                            <div className='circleIndicator'></div>
                                        </div>
                                        <div className="textContent" style={{padding: '8px 0'}}>
                                            <p className='subtitle' style={{fontSize: '13px'}}>{content.title}</p>
                                            <p className='subtitle'>{content.duration}</p>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            )
                        })}
                    </Accordion>
                )
            })}
        </div>
    )
}
export default EscuelitaModulos