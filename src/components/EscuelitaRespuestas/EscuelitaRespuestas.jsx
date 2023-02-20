import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import './EscuelitaRespuestas.css'

const EscuelitaRespuestas = ({ questions, answers }) => {

    return (
        <div className="escuelitaRespuestas">
            {questions.map((question, i) => {
                return (
                    <div key={`question${i + 1}`}>
                        <div className='questionTitle'>
                            {i + 1}. {question.question}
                        </div>
                        <div className='questionAnswers'>
                            <FormControl>
                                <RadioGroup value={answers[i]} sx={{ gap: '16px' }}>
                                    {question.options.map((option, j) => {
                                        return (
                                            <FormControlLabel
                                                sx={{
                                                    '& .MuiTypography-root': {
                                                        fontSize: '15px',
                                                        fontWeight: '500'
                                                    },
                                                    '& .Mui-checked': {
                                                        color: question.answer === answers[i] ? 'var(--blink-main)' : 'red !important'
                                                    }
                                                }}
                                                key={`answer${j + 1}`}
                                                value={j + 1}
                                                control={<Radio />}
                                                label={option} />
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className='correctAnswer' style={{
                            backgroundColor: question.answer === answers[i] ? 'rgba(52, 232, 202, 0.15)' : 'rgba(179, 38, 30, 0.15)'
                        }}>
                            Respuesta correcta: {question.options[question.answer - 1]}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default EscuelitaRespuestas