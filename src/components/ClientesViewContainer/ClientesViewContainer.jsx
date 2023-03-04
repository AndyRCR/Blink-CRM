import { useEffect, useState } from "react"
import ClientesActivos from "../ClientesActivos/ClientesActivos"
import ClientesProspect from "../ClientesProspect/ClientesProspect"
import CustomModal from "../Modal/CustomModal"
import ClientesForm from "../ClientesForm/ClientesForm"
import './ClientesViewContainer.css'

const ClientesViewContainer = () => {

    const [position, setPosition] = useState(0)
    const [open, setOpen] = useState(false)
    const [client, setClient] = useState(null)

    const handleResize = () => {
        const width = document.querySelector(".clientesViewContainer .sliderContainer").clientWidth
    
        document
          .querySelectorAll(".clientesViewContainer .sliderContainer .sliderItem")
          .forEach((el) => {
            el.style.transform = `translateX(-${width * position}px)`
          })
    }
    
    const handleClientModal = (client) => {
        setClient(client)
        setOpen(true)
    }

    useEffect(() => {
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position])

  return (
    <div className="clientesViewContainer">
        {client !== null ? (
            <CustomModal
            open={open}
            setOpen={setOpen}
            body={<ClientesForm disabled={true} client={client}/>}/>
        ) : false}
        
        <div className="sliderBarContainer">
            <div className="sliderBar">
                <div className="sliderBarItem">
                    <p
                    onClick={() => setPosition(0)}
                    className={position === 0 ? 'selected' : ''}>
                        Activos
                    </p>
                </div>
                <div className="sliderBarItem">
                    <p
                    onClick={() => setPosition(1)}
                    className={position === 1 ? 'selected' : ''}>
                        Prospect
                    </p>
                </div>
            </div>
        </div>

        <div className="sliderContainer" style={{flexGrow: '1'}}>
            <div className="sliderItem">
                <ClientesActivos handleClientModal={handleClientModal}/>
            </div>
            <div className="sliderItem">
                <ClientesProspect handleClientModal={handleClientModal}/>
            </div>
        </div>
    </div>
  )
}
export default ClientesViewContainer