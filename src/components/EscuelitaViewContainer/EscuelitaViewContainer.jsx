import { useEffect, useState } from 'react'
import EscuelitaMisCursos from '../EscuelitaMisCursos/EscuelitaMisCursos'
import EscuelitaMisExamenes from '../EscuelitaMisExamenes/EscuelitaMisExamenes'
import EscuelitaCertificado from '../EscuelitaCertificado/EscuelitaCertificado'
import CustomModal from '../Modal/CustomModal'
import './EscuelitaViewContainer.css'

const EscuelitaViewContainer = () => {

    const [position, setPosition] = useState(0)
    const [open, setOpen] = useState(false)

    const handleResize3 = () => {
        const width = document.querySelector(".escuelitaViewContainer > .sliderContainer").clientWidth

        document
            .querySelectorAll(".escuelitaViewContainer > .sliderContainer > .sliderItem")
            .forEach((el) => {
                el.style.transform = `translateX(-${width * position}px)`
            })
    }

    useEffect(() => {
        handleResize3()

        window.addEventListener("resize", handleResize3)

        return () => window.removeEventListener("resize", handleResize3)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

    return (
        <div className="escuelitaViewContainer">
            {/* <button
                onClick={() => setPosition(0)}
                className='secondaryButton'>
                <ReplyOutlinedIcon />
                Volver
            </button> */}

            <CustomModal
            open={open}
            setOpen={setOpen}
            body={<EscuelitaCertificado/>}/>

            <div className="sliderBarContainer">
                <div className="sliderBar">
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(0)}
                            className={position === 0 ? 'selected' : ''}>
                            Mis cursos
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(1)}
                            className={position === 1 ? 'selected' : ''}>
                            Mis exámenes
                        </p>
                    </div>
                </div>
            </div>

            <div className="sliderContainer" style={{ flexGrow: '1' }}>
                <div className="sliderItem">
                    <EscuelitaMisCursos />
                </div>
                <div className="sliderItem">
                    <EscuelitaMisExamenes setOpen = {setOpen} />
                </div>
            </div>
        </div>
    )
}
export default EscuelitaViewContainer