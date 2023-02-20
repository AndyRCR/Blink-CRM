import { useEffect, useState } from 'react'
import EscuelitaExamen from '../EscuelitaExamen/EscuelitaExamen'
import EscuelitaListaExamenes from '../EscuelitaListaExamenes/EscuelitaListaExamenes'
import './EscuelitaMisExamenes.css'

const EscuelitaMisExamenes = ({ setOpen }) => {

    const [position, setPosition] = useState(0)

    const handleResize2 = () => {
        const width = document.querySelector(".escuelitaMisExamenes > .sliderContainer").clientWidth

        document
            .querySelectorAll(".escuelitaMisExamenes > .sliderContainer > .sliderItem")
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
        <div className="escuelitaMisExamenes">
            <div className="sliderContainer" style={{ height: '100%' }}>
                <div className="sliderItem" style={{ margin: 0 }}>
                    <EscuelitaListaExamenes setOpen={setOpen} setPosition={setPosition} />
                </div>
                <div className="sliderItem" style={{ margin: 0 }}>
                    <EscuelitaExamen position={position} setPosition={setPosition} setOpen={setOpen} />
                </div>
            </div>
        </div>
    )
}
export default EscuelitaMisExamenes