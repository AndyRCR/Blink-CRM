import { useEffect, useState } from 'react'
import VentasRelativeInfo from '../VentasRelativeInfo/VentasRelativeInfo'
import VentasTitularInfo from '../VentasTitularInfo/VentasTitularInfo'
import './VentasDatosPersonales.css'

const VentasDatosPersonales = ({ sale }) => {

    const [position, setPosition] = useState(0)
    const [selectedRelative, setSelectedRelative] = useState(null)

    const handleResize = () => {
        const width = document.querySelector(".ventasDatosPersonales .sliderContainer").clientWidth

        document
            .querySelectorAll(".ventasDatosPersonales .sliderContainer .sliderItem")
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
        <div className='ventasDatosPersonales'>
            {/* {sale.status !== 'Ingresada' ? 'No se puede editar' : 'Se puede editar'} */}

            <div className="sliderContainer" style={{ height: '100%' }}>
                <div className="sliderItem" style={{ margin: 0 }}>
                    <VentasTitularInfo sale={sale} setSelectedRelative={setSelectedRelative} setPosition={setPosition} />
                </div>
                <div className="sliderItem" style={{ margin: 0 }}>
                    {selectedRelative !== null ? (
                        <VentasRelativeInfo sale={sale} selectedRelative = {selectedRelative} setPosition={setPosition}/>
                    ) : false}
                </div>
            </div>
        </div>
    )
}
export default VentasDatosPersonales