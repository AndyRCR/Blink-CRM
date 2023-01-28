import { useEffect, useState } from 'react'
import SoporteContacto from '../SoporteContacto/SoporteContacto'
import SoporteCRM from '../SoporteCRM/SoporteCRM'
import './SoporteViewContainer.css'

const SoporteViewContainer = () => {

    const [position, setPosition] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            const width = document.querySelector(".soporteViewContainer .sliderContainer.firstLevelSlider").clientWidth
        
            document
              .querySelectorAll(".soporteViewContainer .sliderContainer.firstLevelSlider .sliderItem.firstLevelItem")
              .forEach((el) => {
                el.style.transform = `translateX(-${width * position}px)`
              })
        }

        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [position])

    return (
        <div className='soporteViewContainer'>
            <div className="sliderBarContainer">
                <div className="sliderBar">
                    <div className="sliderBarItem">
                        <p
                        onClick = {() => setPosition(0)}
                        className = {position === 0 ? 'selected' : ''}>
                            Usos del CRM
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                        onClick = {() => setPosition(1)}
                        className = {position === 1 ? 'selected' : ''}>
                            Contacto
                        </p>
                    </div>
                </div>
            </div>

            <div className="sliderContainer firstLevelSlider" style={{flexGrow: '1'}}>
                <div className="sliderItem firstLevelItem">
                    <SoporteCRM/>
                </div>
                <div className="sliderItem firstLevelItem">
                    <SoporteContacto/>
                </div>
            </div>
        </div>
    )
}
export default SoporteViewContainer