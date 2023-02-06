import { useEffect, useState } from "react"
import VentasMisLiquidaciones from "../VentasMisLiquidaciones/VentasMisLiquidaciones"
import VentasMisVentas from "../VentasMisVentas/VentasMisVentas"
import './VentasViewContainer.css'

const VentasViewContainer = () => {

    const [position, setPosition] = useState(0)

    const handleResize = () => {
        const width = document.querySelector(".ventasViewContainer .sliderContainer").clientWidth

        document
            .querySelectorAll(".ventasViewContainer .sliderContainer .sliderItem")
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
        <div className="ventasViewContainer">
            <div className="sliderBarContainer">
                <div className="sliderBar">
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(0)}
                            className={position === 0 ? 'selected' : ''}>
                            Mis ventas
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(1)}
                            className={position === 1 ? 'selected' : ''}>
                            Mis liquidaciones
                        </p>
                    </div>
                </div>
            </div>

            <div className="sliderContainer" style={{ flexGrow: '1' }}>
                <div className="sliderItem">
                    <VentasMisVentas />
                </div>
                <div className="sliderItem">
                    <VentasMisLiquidaciones />
                </div>
            </div>
        </div>
    )
}
export default VentasViewContainer