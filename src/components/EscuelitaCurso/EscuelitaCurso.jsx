import { useEffect, useState } from 'react'
import EscuelitaApuntes from '../EscuelitaApuntes/EscuelitaApuntes'
import EscuelitaModulos from '../EscuelitaModulos/EscuelitaModulos'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import './EscuelitaCurso.css'

const EscuelitaCurso = ({position, setPosition}) => {

    const [subPosition, setSubPosition] = useState(0)
    const [selectedClass, setSelectedClass] = useState([0,0])
    const [videoSource, setVideoSource] = useState('https://bucket-si.s3.amazonaws.com/videoTest.mp4')

    const handleResize = () => {
        const width = document.querySelector(".escuelitaCurso .sliderContainer").clientWidth

        document
            .querySelectorAll(".escuelitaCurso .sliderContainer > .sliderItem")
            .forEach((el) => {
                el.style.transform = `translateX(-${width * subPosition}px)`
            })
    }

    useEffect(() => {
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [subPosition, videoSource])

    return (
        <div className="escuelitaCurso">
            <button
            onClick={() => setPosition(0)}
            className='secondaryButton'
            style={{
                display: position === 0 ? 'none' : 'flex'
            }}>
                <ReplyOutlinedIcon/>
                Volver
            </button>

            <div className='videoContainer'>
                <video key={videoSource} controls>
                    <source src={videoSource} type='video/mp4' />
                </video>
            </div>

            <div className='videoMenu'>
                <div className="menuHeader">
                    <div
                    onClick={() => setSubPosition(0)}
                    className={subPosition === 0 ? "menuHeaderItem active" : "menuHeaderItem"}
                    id='border1'>
                        <p>Módulos</p>
                        <div className="animatedBorder"></div>
                    </div>
                    <div
                    onClick={() => setSubPosition(1)}
                    className={subPosition === 1 ? "menuHeaderItem active" : "menuHeaderItem"}>
                        <p>Apuntes</p>
                        <div className="animatedBorder"></div>
                    </div>
                </div>

                <div className="sliderContainer" style={{ height: '100%' }}>
                    <div className="sliderItem" style={{ margin: 0 }}>
                        <EscuelitaModulos selectedClass={selectedClass} setSelectedClass={setSelectedClass} setVideoSource={setVideoSource}/>
                    </div>
                    <div className="sliderItem" style={{ margin: 0 }}>
                        <EscuelitaApuntes/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default EscuelitaCurso