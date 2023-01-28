import { useEffect, useState } from "react"
import PrepagasClinicas from "../PrepagasClinicas/PrepagasClinicas"
import PrepagasPlanes from "../PrepagasPlanes/PrepagasPlanes"
import './PrepagasPrestadores.css'

const PrepagasPrestadores = () => {

    const [position, setPosition] = useState(0)
    const [selectedClinic, setSelectedClinic] = useState(null)

    const handleResize = () => {
        const width = document.querySelector(".prepagasPrestadores .sliderContainer").clientWidth
    
        document
          .querySelectorAll(".prepagasPrestadores .sliderContainer .sliderItem")
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
        <div className="prepagasPrestadores">
            <div className="sliderContainer" style={{height: '100%'}}>
                <div className="sliderItem" style={{margin: 0}}>
                    <PrepagasClinicas setSelectedClinic={setSelectedClinic} setPosition={setPosition}/>
                </div>
                <div className="sliderItem" style={{margin: 0}}>
                    {selectedClinic !== null ? (
                        <PrepagasPlanes selectedClinic = {selectedClinic} setPosition={setPosition}/>
                    ) : false}
                </div>
            </div>
        </div>
    )
}
export default PrepagasPrestadores