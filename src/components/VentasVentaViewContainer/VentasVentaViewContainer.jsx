import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import CustomModal from '../Modal/CustomModal'
import PDFView from '../PDFView.jsx/PDFView'
import VentasDatosPersonales from '../VentasDatosPersonales/VentasDatosPersonales'
import VentasDocumentos from '../VentasDocumentos/VentasDocumentos'
import VentasPrepaga from '../VentasPrepaga/VentasPrepaga'
import './VentasVentaViewContainer.css'

const VentasVentaViewContainer = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const { ventas } = useContext(GlobalContext)

    const [position, setPosition] = useState(0)
    const [sale, setSale] = useState(ventas.filter(el => el.id === parseInt(id))[0])
    const [open, setOpen] = useState(false)

    const handleResize = () => {
        const width = document.querySelector(".ventasVentaViewContainer .sliderContainer.firstLevelSlider").clientWidth

        document
            .querySelectorAll(".ventasVentaViewContainer .sliderContainer .sliderItem.firstLevelItem")
            .forEach((el) => {
                el.style.transform = `translateX(-${width * position}px)`
            })
    }
    
    useEffect(() => {
        handleResize()

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
        // eslint-disable-next-line
    }, [position])

    return (
        <div className="ventasVentaViewContainer">
            <CustomModal
                open={open}
                setOpen={setOpen}
                body={<PDFView />} />

            <div className="sliderBarContainer">
                <button
                onClick={() => setPosition(position - 1)}
                disabled={position <= 0}
                className='sliderControls'>
                    <ArrowBackIosOutlinedIcon sx={{height: '30px', width: 'auto'}}/>
                </button>
                <div className="sliderBar">
                    <div className="sliderBarItem">
                        <p
                            className={
                                position === 0
                                ? 'selected'
                                : position >= 1
                                ? 'completed'
                                : ''}>
                            Prepaga
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                            className={
                                position === 1
                                ? 'selected'
                                : position >= 2
                                ? 'completed'
                                : ''}>
                            Datos familiares
                        </p>
                    </div>
                    <div className="sliderBarItem">
                        <p
                            className={
                                position === 2
                                ? 'selected'
                                : position >= 3
                                ? 'completed'
                                : ''}>
                            Documentos
                        </p>
                    </div>
                </div>
                <button
                onClick={() => setPosition(position + 1)}
                disabled={position >= 2}
                className='sliderControls'>
                    <ArrowForwardIosOutlinedIcon sx={{height: '30px', width: 'auto'}}/>
                </button>
            </div>

            <div className="sliderContainer firstLevelSlider" style={{ flexGrow: '1' }}>
                <div className="sliderItem firstLevelItem">
                    <VentasPrepaga sale={sale} />
                </div>
                <div className="sliderItem firstLevelItem">
                    <VentasDatosPersonales sale={sale} />
                </div>
                <div className="sliderItem firstLevelItem">
                    <VentasDocumentos sale={sale} setOpen={setOpen} />
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

export default VentasVentaViewContainer