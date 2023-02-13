import { useEffect, useState } from 'react'
import EscuelitaApuntes from '../EscuelitaApuntes/EscuelitaApuntes'
import EscuelitaModulos from '../EscuelitaModulos/EscuelitaModulos'
import './EscuelitaCurso.css'

const EscuelitaCurso = () => {

    const [position, setPosition] = useState(0)

    const handleResize = () => {
        const width = document.querySelector(".escuelitaCurso .sliderContainer").clientWidth

        document
            .querySelectorAll(".escuelitaCurso .sliderContainer > .sliderItem")
            .forEach((el) => {
                el.style.transform = `translateX(-${width * position}px)`
            })
    }

    useEffect(() => {
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

    return (
        <div className="escuelitaCurso">
            <div className='videoContainer'>
                <video controls>
                    <source src='https://blinkfiles.s3.amazonaws.com/videoTest.mp4' type='video/mp4' />
                </video>
            </div>

            <div className='videoMenu'>
                <div className="menuHeader">
                    <div
                    onClick={() => setPosition(0)}
                    className={position === 0 ? "menuHeaderItem active" : "menuHeaderItem"}
                    id='border1'>
                        <p>Módulos</p>
                        <div className="animatedBorder"></div>
                    </div>
                    <div
                    onClick={() => setPosition(1)}
                    className={position === 1 ? "menuHeaderItem active" : "menuHeaderItem"}>
                        <p>Apuntes</p>
                        <div className="animatedBorder"></div>
                    </div>
                </div>

                <div className="sliderContainer" style={{ height: '100%' }}>
                    <div className="sliderItem" style={{ margin: 0 }}>
                        <EscuelitaModulos/>
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