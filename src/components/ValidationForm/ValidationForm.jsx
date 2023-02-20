import React, { useEffect, useState } from "react"
import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import classes from "../../theme/Styles"
import ValidationSuccess from "../ValidationSuccess/ValidationSuccess"
import './ValidationForm.css'

const questions = [
    {
        question: '¿Tenés experiencia en ventas?', answer: null, options: [
            'Sí',
            'No'
        ]
    },
    {
        question: '¿Tenés experiencia en comercialización de Medicina Privada u Obras Sociales?', answer: null, options: [
            'Sí',
            'No'
        ]
    },
    {
        question: '¿Te encontrás actualmente comercializando Medicina Privada u Obra Social?', answer: null, options: [
            'Sí',
            'No'
        ]
    },
    {
        question: '¿Trabajas en relación de dependencia en alguna compañía o como intermediario a través de un Broker?', answer: null, options: [
            'En relación de dependencia',
            'Como intermediario o a través de un broker'
        ]
    }
]

const ValidationForm = () => {

    const [position, setPosition] = useState(0)
    const [answers, setAnswers] = useState([...Array(4).fill(null)])

    const markAnswer = (numberQuestion, answer) => {
        const newArr = answers
        newArr[numberQuestion] = parseInt(answer)
        setAnswers(newArr)
    }

    useEffect(() => {
        const handleResize = () => {
            const width = document.querySelector(".validationForm > .sliderContainer").clientWidth
        
            document
              .querySelectorAll(".validationForm > .sliderContainer .sliderItem")
              .forEach((el) => {
                el.style.transform = `translateX(-${width * position}px)`
              })
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [position])

    return (
        <div className="validationForm">
            <div className="sliderContainer" style={{ flexGrow: '1' }}>
                {questions.map((question, i) => {
                    return (
                        <div className="sliderItem" key={`question${i + 1}`}>
                            <div className="validationItem">
                                <p>{i + 1}. {question.question}</p>
                                <RadioGroup sx={classes.radioGroup} onChange={(evt, value) => markAnswer(i, value)}>
                                    {question.options.map((option, j) => {
                                        return <FormControlLabel key={`option${j + 1}`} value={j + 1} control={<Radio />} label={option} />
                                    })}
                                </RadioGroup>

                                <div className="validationButton">
                                    <button
                                        onClick={() => {
                                            window.scrollTo({ top: 0, behavior: 'smooth' })
                                            setPosition(position + 1)
                                        }}
                                        className="secondaryButton">
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}

                <ValidationSuccess answers={answers}/>
            </div>
        </div>
    )
}
export default ValidationForm