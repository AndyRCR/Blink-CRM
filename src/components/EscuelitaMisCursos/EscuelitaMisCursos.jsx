import { useEffect, useState } from 'react'
import EscuelitaCurso from '../EscuelitaCurso/EscuelitaCurso'
import EscuelitaListaCursos from '../EscuelitaListaCursos/EscuelitaListaCursos'
import './EscuelitaMisCursos.css'

const EscuelitaMisCursos = () => {

    const [position, setPosition] = useState(0)

    const handleResize2 = () => {
        const width = document.querySelector(".escuelitaMisCursos > .sliderContainer").clientWidth

        document
            .querySelectorAll(".escuelitaMisCursos > .sliderContainer > .sliderItem")
            .forEach((el) => {
                el.style.transform = `translateX(-${width * position}px)`
            })
    }

    useEffect(() => {
        handleResize2()

        window.addEventListener("resize", handleResize2)

        return () => window.removeEventListener("resize", handleResize2)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

    return (
        <div className="escuelitaMisCursos">
            <div className="sliderContainer" style={{ height: '100%' }}>
                <div className="sliderItem" style={{ margin: 0 }}>
                    <EscuelitaListaCursos setPosition={setPosition} />
                </div>
                <div className="sliderItem" style={{ margin: 0 }}>
                    <EscuelitaCurso setPosition={setPosition} />
                </div>
            </div>
        </div>
    )
}
export default EscuelitaMisCursos