import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import EscuelitaPregunta from '../EscuelitaPregunta/EscuelitaPregunta'
import EscuelitaRespuestas from '../EscuelitaRespuestas/EscuelitaRespuestas'
import EscuelitaTimer from '../EscuelitaTimer/EscuelitaTimer'
import './EscuelitaExamen.css'

const questions = [
    {
        question: '¿Cuál es la diferencia entre Prepaga y Obra Social?',
        options: [
            'La prepaga es una empresa privada que comercializa planes superadores, mientras la obra social es una entidad pública que comercializa principalmente planes PMO.',
            'La prepaga es una entidad pública que comercializa planes superadores, mientras que la obra social es una obligación patronal.',
            'La prepaga y la obra social son lo mismo.',
            'Ninguna de las anteriores.'
        ],
        answer: 1
    },
    {
        question: '¿Cuál es la diferencia entre Prepaga y Obra Social?',
        options: [
            'La prepaga es una empresa privada que comercializa planes superadores, mientras la obra social es una entidad pública que comercializa principalmente planes PMO.',
            'La prepaga es una entidad pública que comercializa planes superadores, mientras que la obra social es una obligación patronal.',
            'La prepaga y la obra social son lo mismo.',
            'Ninguna de las anteriores.'
        ],
        answer: 3
    },
    {
        question: '¿Cuál es la diferencia entre Prepaga y Obra Social?',
        options: [
            'La prepaga es una empresa privada que comercializa planes superadores, mientras la obra social es una entidad pública que comercializa principalmente planes PMO.',
            'La prepaga es una entidad pública que comercializa planes superadores, mientras que la obra social es una obligación patronal.',
            'La prepaga y la obra social son lo mismo.',
            'Ninguna de las anteriores.'
        ],
        answer: 2
    },
    {
        question: '¿Cuál es la diferencia entre Prepaga y Obra Social?',
        options: [
            'La prepaga es una empresa privada que comercializa planes superadores, mientras la obra social es una entidad pública que comercializa principalmente planes PMO.',
            'La prepaga es una entidad pública que comercializa planes superadores, mientras que la obra social es una obligación patronal.',
            'La prepaga y la obra social son lo mismo.',
            'Ninguna de las anteriores.'
        ],
        answer: 4
    },
    {
        question: '¿Cuál es la diferencia entre Prepaga y Obra Social?',
        options: [
            'La prepaga es una empresa privada que comercializa planes superadores, mientras la obra social es una entidad pública que comercializa principalmente planes PMO.',
            'La prepaga es una entidad pública que comercializa planes superadores, mientras que la obra social es una obligación patronal.',
            'La prepaga y la obra social son lo mismo.',
            'Ninguna de las anteriores.'
        ],
        answer: 1
    }
]

const EscuelitaExamen = ({ position, setPosition, setOpen }) => {

    const { questionTimer, setQuestionTimer, currentLevel, secondsForTest, tests, setTests, user, setUser } = useContext(GlobalContext)

    const [subPosition, setSubPosition] = useState(0)
    const [accerts, setAccerts] = useState(0)
    const [answers, setAnswers] = useState([...Array(questions.length).fill(null)])

    const handleResize = () => {
        const width = document.querySelector(".escuelitaExamen .sliderContainer").clientWidth

        document
            .querySelectorAll(".escuelitaExamen .sliderContainer > .sliderItem")
            .forEach((el) => {
                el.style.transform = `translateX(-${width * subPosition}px)`
            })
    }

    const checkAnswers = () => {
        let newAccerts = 0
        for (let i in questions) {
            if (answers[i] === questions[i].answer) {
                newAccerts += 1
            }
        }

        if(subPosition === questions.length){
            const newTests = tests
            if(newAccerts/questions.length >= 0.9){
                newTests[currentLevel] = {
                    ...newTests[currentLevel],
                    approbed: true,
                    date: new Date()
                }
                setUser({
                    ...user,
                    level: currentLevel + 1
                })
            } else{
                newTests[currentLevel] = {
                    ...newTests[currentLevel],
                    attempts: newTests[currentLevel].attempts + 1
                }
            }
            setTests(newTests)
        }

        setAccerts(newAccerts)
    }

    const restartTest = () => {
        setPosition(0)
        setSubPosition(0)
        setQuestionTimer(false)
        setAnswers([...Array(questions.length).fill(null)])
    }

    const handleScroll = (e) => {
        if(e !== undefined){
          const height = e.target.scrollTop
          document.querySelector('.escuelitaExamen .secondaryButton').style.top = `${window.innerHeight - 341 + height}px`
        }
      }
    
    useEffect(() => {
        checkAnswers()
        handleResize()
        window.addEventListener("resize", handleResize)

        let interval = setInterval(() => { }, (secondsForTest + 1) * 1000)

        if (subPosition >= questions.length) {
            return
        } else {
            if (questionTimer) {
                interval = setInterval(() => setSubPosition(count => count + 1), (secondsForTest + 1) * 1000)
            }
        }

        document.querySelector('.escuelitaView .secondaryButton').style.top = `${window.innerHeight - 341}px`
      
        document.querySelector('.escuelitaView').addEventListener('scroll', handleScroll)
    
        return () => {
            window.removeEventListener("resize", handleResize)
            clearInterval(interval)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subPosition, position, answers, accerts])

    return (
        <div className='escuelitaExamen'>
            <button
                onClick={restartTest}
                className='secondaryButton'
                style={{
                    display: position === 0 ? 'none' : 'flex'
                }}>
                <ReplyOutlinedIcon />
                Volver
            </button>

            <div className='levelInfo'>
                <div className="level">
                    Nivel {currentLevel}
                </div>
                {subPosition < questions.length && <EscuelitaTimer numberQuestion={subPosition} />}
            </div>

            <div className="sliderContainer" style={{ height: '100%' }}>
                {questions.map((question, i) => {
                    return (
                        <div className="sliderItem" key={`question${i + 1}`} style={{ margin: 0 }}>
                            <EscuelitaPregunta
                                questionLength={questions.length}
                                question={{ ...question, number: i }}
                                position={subPosition}
                                setPosition={setSubPosition}
                                setAnswers={setAnswers}
                                answers={answers}
                                checkAnswers={checkAnswers} />
                        </div>
                    )
                })}

                <div className='sliderItem' style={{ margin: 0 }}>
                    <div className='escuelitaPregunta resultCard'>
                        <img
                            src={
                                accerts / questions.length >= 0.9
                                    ? 'https://i.ibb.co/XL0pTZk/felicitaciones.png'
                                    : 'https://i.ibb.co/HgYyHHL/desaprobado.png'
                            }
                            alt="test result" />

                        <div>
                            <div className='resultTitle'>
                                {accerts / questions.length >= 0.9
                                    ? '¡Felicitaciones!'
                                    : 'Volvé a repasar'}
                            </div>

                            <p>
                                Respondiste bien {accerts} de {questions.length} preguntas,
                                {accerts / questions.length >= 0.9
                                    ? ` aprobaste el nivel ${currentLevel}`
                                    : ` te quedan ${3 - tests[currentLevel]?.attempts - 1} intentos para aprobar el nivel ${currentLevel}.`}
                            </p>
                        </div>

                        <div className='resultButtons' style={{ justifyContent: accerts / questions.length >= 0.9 ? 'center' : 'flex-end' }}>
                            {accerts / questions.length >= 0.9 ? (
                                <>
                                    <button className="buttonVariant" onClick={() => setSubPosition(subPosition + 1)}>Mostrar respuestas</button>
                                    <button className="secondaryButton" onClick={() => setOpen(true)}>Mostrar certificado</button>
                                </>
                            ) : (
                                <button className="secondaryButton" onClick={restartTest}>Volver a mis cursos</button>
                            )}
                        </div>
                    </div>
                </div>

                <div className='sliderItem'>
                    <div style={{display: subPosition === questions.length + 1 ? 'block' : 'none'}}>
                        <EscuelitaRespuestas questions={questions} answers={answers}/>
                    </div>
                </div>
            </div>

            {subPosition < questions.length && (
                <p className='questionCount'>
                    {subPosition + 1} de {questions.length}
                </p>
            )}

        </div>
    )
}
export default EscuelitaExamen