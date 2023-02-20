import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { useEffect, useState } from 'react'
import './EscuelitaPregunta.css'

const EscuelitaPregunta = ({questionLength, question, position, setPosition, setAnswers, answers, checkAnswers }) => {

    const [value, setValue] = useState(answers[question.number])

    const markAnswer = (numberQuestion, answer) => {
        const newArr = answers
        newArr[numberQuestion] = parseInt(answer)
        setAnswers(newArr)
        setValue(answer)
    }

    useEffect(() => {
        setValue(answers[question.number])

        // eslint-disable-next-line
    }, [answers])
    
    return (
        <div className='escuelitaPregunta'>
            <div className='questionTitle'>
                {position + 1}. {question.question}
            </div>
            <div className='questionAnswers'>
                <FormControl>
                    <RadioGroup value={value} sx={{gap: '16px'}} onChange={(evt, value) => markAnswer(question.number, value)}>
                        {question.options.map((option, i) => {
                            return (
                                <FormControlLabel
                                sx={{
                                    '& .MuiTypography-root': {
                                        fontSize: '15px',
                                        fontWeight: '500'
                                    }
                                }}
                                key={`answer${i + 1}`} 
                                value={i + 1}
                                control={<Radio/>}
                                label={option} />
                            )
                        })}
                    </RadioGroup>
                </FormControl>
            </div>

            <div className='nextButton'>
                <button
                    onClick={() => {
                        setPosition(position + 1)
                        checkAnswers()
                    }}
                    className='secondaryButton'>
                    {question.number === questionLength - 1 ? 'Finalizar' : 'Siguiente'}
                </button>
            </div>

        </div>
    )
}
export default EscuelitaPregunta