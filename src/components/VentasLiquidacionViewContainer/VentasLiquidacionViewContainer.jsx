import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import CustomModal from '../Modal/CustomModal'
import PDFView from '../PDFView.jsx/PDFView'
import VentasDatosPersonales from '../VentasDatosPersonales/VentasDatosPersonales'
import VentasDocumentos from '../VentasDocumentos/VentasDocumentos'
import VentasPrepaga from '../VentasPrepaga/VentasPrepaga'
import './VentasLiquidacionViewContainer.css'

const VentasLiquidacionViewContainer = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { ventas } = useContext(GlobalContext)

    const [position, setPosition] = useState(0)
    const [sale, setSale] = useState(ventas.filter(el => el.id === parseInt(id))[0])
    const [open, setOpen] = useState(false)

    const handleResize = () => {
        const width = document.querySelector(".ventasLiquidacionViewContainer .sliderContainer.firstLevelSlider").clientWidth

        document
            .querySelectorAll(".ventasLiquidacionViewContainer .sliderContainer .sliderItem.firstLevelItem")
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
        <div className="ventasLiquidacionViewContainer">
            <CustomModal
            open={open}
            setOpen={setOpen}
            body={<PDFView/>}/>

            <div className="sliderBarContainer">
                <div className="sliderBar">
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(0)}
                            className={position === 0 ? 'selected' : ''}>
                            Prepaga
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(1)}
                            className={position === 1 ? 'selected' : ''}>
                            Datos familiares
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                            onClick={() => setPosition(2)}
                            className={position === 2 ? 'selected' : ''}>
                            Documentos
                        </p>
                    </div>
                </div>
            </div>

            <div className="sliderContainer firstLevelSlider" style={{ flexGrow: '1' }}>
                <div className="sliderItem firstLevelItem">
                    <VentasPrepaga sale={sale} />
                </div>
                <div className="sliderItem firstLevelItem">
                    <VentasDatosPersonales sale={sale}/>
                </div>
                <div className="sliderItem firstLevelItem">
                    <VentasDocumentos sale={sale} setOpen={setOpen}/>
                </div>
            </div>

            <button
                onClick={() => navigate('/ventas')}
                className='secondaryButton'>
                <ReplyOutlinedIcon />
                Volver
            </button>
        </div>
    )
}
export default VentasLiquidacionViewContainer