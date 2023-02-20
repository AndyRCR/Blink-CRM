import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded'
import './EscuelitaTimer.css'

const EscuelitaTimer = ({numberQuestion}) => {

    const {questionTimer, currentLevel, secondsForTest} = useContext(GlobalContext)

    const [timeLeft, setTimeLeft] = useState(secondsForTest * 1000)

    useEffect(() => {
        let interval = setInterval(() => {}, secondsForTest * 1000)

        if(timeLeft <= 0){
            return
        } else{
            if(questionTimer){
                interval = setInterval(() => {
                    setTimeLeft(timeLeft => timeLeft - 1000)
                }, 1000)
            }
        }

        return () => clearInterval(interval)
    }, [timeLeft, questionTimer])
    
    useEffect(() => setTimeLeft(secondsForTest * 1000), [numberQuestion])

    const minutes = Math.floor(timeLeft / 600000)
    const seconds = ((timeLeft % 60000) / 1000).toFixed(0)

    return (
        <div className='escuelitaTimer' style={{color: seconds <= 9 ? 'red' : 'var(--blink-main'}}>
            <AccessTimeRoundedIcon sx={{
                width: '40px',
                height: 'auto'
            }}/>
            <p>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
        </div>
    )
}
export default EscuelitaTimer