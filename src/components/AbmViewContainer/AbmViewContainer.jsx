import React, {useState, useEffect} from 'react'
import './AbmViewContainer.css'
import AbmGestionCuentas from '../AbmGestionCuentas/AbmGestionCuentas'
import AbmGestionAccesos from '../AbmGestionAccesos/AbmGestionAccesos'
import AbmGestionClaves from '../AbmGestionClaves/AbmGestionClaves'
import ClientesProspect from "../ClientesProspect/ClientesProspect"
import CustomModal from "../Modal/CustomModal"
import ClientesForm from "../ClientesForm/ClientesForm"
import AbmCuentasForm from '../AbmCuentasForm/AbmCuentasForm'

const AbmViewContainer = () => {
  
    const [open, setOpen] = useState(false)
   
    const handleClientModal = () => {
       
        setOpen(true)
    }
    //
  const [position, setPosition] = useState(0)

  const handleResize = () => {
    const sliderContainer = document.querySelector(".AbmViewContainer > .sliderContainer")
    const width = sliderContainer.clientWidth
    sliderContainer.style.minHeight = document.querySelector(`.AbmViewContainer > .sliderContainer .sliderItem:nth-child(${position + 1}) > div`).clientHeight + 100 + 'px'

    document
        .querySelectorAll(".AbmViewContainer .sliderContainer .sliderItem")
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
    <div className='AbmViewContainer'>
       
            <CustomModal
            open={open}
            setOpen={setOpen}
            body={<AbmCuentasForm disabled={true} />}/>
      
        <div className="sliderBarContainer">
            <div className="sliderBar">
                <div className="sliderBarItem">
                    <p
                    onClick={() => setPosition(0)}
                    className={position === 0 ? 'selected' : ''}>
                    Gestion de Cuentas
                    </p>
                </div>
                <div className="sliderBarItem">
                    <p
                    onClick={() => setPosition(1)}
                    className={position === 1 ? 'selected' : ''}>
                    Gestion de claves
                    </p>
                </div>
                <div className="sliderBarItem">
                    <p
                    onClick={() => setPosition(2)}
                    className={position === 2 ? 'selected' : ''}>
                    Gestion de accesos
                    </p>
                </div>
            </div>
        </div>
        <div className="sliderContainer" style={{ flexGrow: '1' }}>
                <div className="sliderItem ">
                    <AbmGestionCuentas handleClientModal={handleClientModal} />
                </div>
                <div className="sliderItem ">
                    <AbmGestionClaves />
                </div>
                <div className="sliderItem ">
                    <AbmGestionAccesos />
                </div>
        </div>
        
    </div>
  )
}

export default AbmViewContainer