import { useEffect, useState } from 'react'
import PrepagasDocumentos from '../PrepagasDocumentos/PrepagasDocumentos'
import PrepagasPrestadores from '../PrepagasPrestadores/PrepagasPrestadores'
import './PrepagasViewContainer.css'

const PrepagasViewContainer = () => {

    const [position, setPosition] = useState(0)

    useEffect(() => {
        const handleResize2 = () => {
            const width = document.querySelector(".prepagasViewContainer .sliderContainer.firstLevelSlider").clientWidth
        
            document
              .querySelectorAll(".prepagasViewContainer .sliderContainer.firstLevelSlider .sliderItem.firstLevelItem")
              .forEach((el) => {
                el.style.transform = `translateX(-${width * position}px)`
              })
        }

        handleResize2()

        window.addEventListener("resize", handleResize2)

        return () => window.removeEventListener("resize", handleResize2)
    }, [position])

    return (
        <div className="prepagasViewContainer">
            <div className="sliderBarContainer">
                <div className="sliderBar">
                    <div className="sliderBarItem">
                        <p
                        onClick = {() => setPosition(0)}
                        className = {position === 0 ? 'selected' : ''}>
                            Documentos
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                        onClick = {() => setPosition(1)}
                        className = {position === 1 ? 'selected' : ''}>
                            Prestadores
                        </p>
                    </div>
                </div>
            </div>

            <div className="sliderContainer firstLevelSlider" style={{flexGrow: '1'}}>
                <div className="sliderItem firstLevelItem">
                    <PrepagasDocumentos/>
                </div>
                <div className="sliderItem firstLevelItem">
                    <PrepagasPrestadores/>
                </div>
            </div>
        </div>
    )
}
export default PrepagasViewContainer