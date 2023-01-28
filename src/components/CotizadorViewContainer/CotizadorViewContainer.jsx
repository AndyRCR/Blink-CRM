import { useEffect, useState } from "react"
import ClientesForm from "../ClientesForm/ClientesForm"
import Cotizador from "../Cotizador/Cotizador"
import CotizadorCotizaciones from "../CotizadorCotizaciones/CotizadorCotizaciones"
import CotizadorEstado from "../CotizadorEstado/CotizadorEstado"
import CustomModal from "../Modal/CustomModal"
import './CotizadorViewContainer.css'

const CotizadorViewContainer = () => {

    const [position, setPosition] = useState(0)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [client, setClient] = useState(null)

    const handleResize = () => {
        const width = document.querySelector(".cotizadorViewContainer .sliderContainer").clientWidth

        document
            .querySelectorAll(".cotizadorViewContainer .sliderContainer .sliderItem")
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
        <div className="cotizadorViewContainer">
            {client !== null ? (
                <div>
                    <CustomModal
                    open={open}
                    setOpen={setOpen}
                    body={<ClientesForm client={client} />}/>
                </div>
            ) : false}

            {client !== null ? (
                <div className="withHeader">
                    <CustomModal
                    open={open2}
                    setOpen={setOpen2}
                    header={<p>Estado de contacto client Nº {client.id}</p>}
                    body={<CotizadorEstado setOpen={setOpen2}/>}/>
                </div>
            ) : false}
            
            <div className="sliderBarContainer">
                <div className="sliderBar">
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(0)}
                            className={position === 0 ? 'selected' : ''}>Mi cotizador</p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(1)}
                            className={position === 1 ? 'selected' : ''}>Mis cotizaciones</p>
                    </div>
                </div>
            </div>

            <div className="sliderContainer" style={{ flexGrow: '1' }}>
                <div className="sliderItem">
                    <Cotizador />
                </div>
                <div className="sliderItem">
                    <CotizadorCotizaciones setClient={setClient} setOpen={setOpen} setOpen2={setOpen2} />
                </div>
            </div>
        </div>
    )
}
export default CotizadorViewContainer