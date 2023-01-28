import { useContext, useEffect, useState } from 'react'
import { Checkbox } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import Swal from 'sweetalert2'
import { GlobalContext } from '../../context/GlobalStateContext'
import './CotizadorResultItem.css'

const pixelToInt = (pixels) => {
    return parseInt(pixels.slice(0, pixels.indexOf('p')))
}

const numberFormatter = x => {
    return `$${parseFloat(x).toPrecision(String(Math.round(x)).length + 2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

const stringFormatter = x => {
    return x
        .replaceAll('Ã³', 'ó')
        .replaceAll('Ã±', 'ñ')
}

const checkAvailability = x => {
    return x === null || x === undefined || x.toLowerCase() === 'no'
        ? <CloseRoundedIcon />
        : x.toLowerCase() === 'si'
            ? <CheckRoundedIcon />
            : stringFormatter(x)
}

const CotizadorResultItem = ({ res, i, pos }) => {

    const { itemCheckeds, setItemCheckeds } = useContext(GlobalContext)

    const [checked, setChecked] = useState(false)
    const [width, setWidth] = useState(0)

    const handleResize = () => {
        const style = window.getComputedStyle(document.querySelector('.carousel .result'))
        const widthPx = style.getPropertyValue('width')
        setWidth(pixelToInt(widthPx))
    }

    const handlePosition = () => {
        const item = document.querySelector(`.cotizadorResultsCarousel .result${i + 1}`)
        if(item !== null) item.style.left = `${width * pos + 16 * pos}px`
    }

    const handleCheck = (e) => {
        const style = window.getComputedStyle(document.querySelector('.carousel .result'))
        const widthPx = style.getPropertyValue('width')

        document.querySelectorAll('.pinFix.visible').forEach(el => {
            el.style.width = `${pixelToInt(widthPx)}px`
        })

        const { checked } = e.target
        if (!checked) {
            setItemCheckeds(itemCheckeds - 1)
            setChecked(checked)
            handlePosition()
        }
        else {
            if (itemCheckeds < 3) {
                setItemCheckeds(checked ? itemCheckeds + 1 : itemCheckeds - 1)
                setChecked(checked)
                handlePosition()
            } else {
                Swal.fire(
                    '',
                    'Puede fijar máximo 3 resultados',
                    'info'
                )
            }
        }
    }

    useEffect(() => {
        const style = window.getComputedStyle(document.querySelector('.carousel .result'))
        const widthPx = style.getPropertyValue('width')

        setWidth(pixelToInt(widthPx))
        document.querySelectorAll('.pinFix.visible').forEach(el => {
            el.style.width = `${pixelToInt(widthPx)}px`
        })

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [checked])

    return (
        <>
            <>
                <div
                    className={
                        checked
                            ? `result result${i + 1} background${(i % 2) + 1} pinned`
                            : `result result${i + 1} background${(i % 2) + 1}`}>
                    <div className='check'>
                        <p>Fijar</p>
                        <Checkbox
                            checked={checked}
                            onChange={handleCheck} />
                    </div>
                    <div className='header'>
                        <img src={`https://blinkimages.s3.amazonaws.com/os/logo-${res.nameprovider.toLowerCase()}.png`} alt="prepaga logo blink" />
                    </div>
                    <div className='info'>
                        <h4>Plan {res.nameplan}</h4>
                        <h2>{numberFormatter(res.price)}</h2>
                        <p>{res.discount !== null ? res.discount : '-'}</p>
                    </div>
                    <div className='benefits'>
                        <div className="benefitItem">
                            {checkAvailability(res.refund)}
                        </div>
                        <div className="benefitItem">
                            {checkAvailability(res.internation)}
                        </div>
                        <div className="benefitItem">
                            {checkAvailability(res.doctorathome)}
                        </div>
                        {/* <div className="benefitItem">
                        {typeof res.guardia === 'boolean'
                            ? <FontAwesomeIcon icon={res.guardia ? faCheck : faXmark} />
                            : res.guardia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.consultas === 'boolean'
                            ? <FontAwesomeIcon icon={res.consultas ? faCheck : faXmark} />
                            : res.consultas}
                    </div>
                    <div className="benefitItem">
                        {typeof res.laboratorio === 'boolean'
                            ? <FontAwesomeIcon icon={res.laboratorio ? faCheck : faXmark} />
                            : res.laboratorio}
                    </div>
                    <div className="benefitItem">
                        {typeof res.diagnostico === 'boolean'
                            ? <FontAwesomeIcon icon={res.diagnostico ? faCheck : faXmark} />
                            : res.diagnostico}
                    </div>
                    <div className="benefitItem">
                        {typeof res.farmacias === 'boolean'
                            ? <FontAwesomeIcon icon={res.farmacias ? faCheck : faXmark} />
                            : res.farmacias}
                    </div> */}
                        <div className="benefitItem">
                            {checkAvailability(res.odontology)}
                        </div>
                        <div className="benefitItem">
                            {checkAvailability(res.orthodontics)}
                        </div>
                        {/* <div className="benefitItem">
                        {typeof res.implantes === 'boolean'
                            ? <FontAwesomeIcon icon={res.implantes ? faCheck : faXmark} />
                            : res.implantes}
                    </div>
                    <div className="benefitItem">
                        {typeof res.oftalmologia === 'boolean'
                            ? <FontAwesomeIcon icon={res.oftalmologia ? faCheck : faXmark} />
                            : res.oftalmologia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.optica === 'boolean'
                            ? <FontAwesomeIcon icon={res.optica ? faCheck : faXmark} />
                            : res.optica}
                    </div>
                    <div className="benefitItem">
                        {typeof res.mental === 'boolean'
                            ? <FontAwesomeIcon icon={res.mental ? faCheck : faXmark} />
                            : res.mental}
                    </div>
                    <div className="benefitItem">
                        {typeof res.kinesiologia === 'boolean'
                            ? <FontAwesomeIcon icon={res.kinesiologia ? faCheck : faXmark} />
                            : res.kinesiologia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.maternidad === 'boolean'
                            ? <FontAwesomeIcon icon={res.maternidad ? faCheck : faXmark} />
                            : res.maternidad}
                    </div>
                    <div className="benefitItem">
                        {typeof res.cirugia === 'boolean'
                            ? <FontAwesomeIcon icon={res.cirugia ? faCheck : faXmark} />
                            : res.cirugia}
                    </div>
                    <div className="benefitItem">
                        {typeof res.cobertura === 'boolean'
                            ? <FontAwesomeIcon icon={res.cobertura ? faCheck : faXmark} />
                            : res.cobertura}
                    </div> */}
                    </div>
                </div>
                <div className='pinBackground'>
                    <div className={checked ? 'pinFix visible' : 'pinFix'}>
                        P<br />l<br />a<br />n<br /><br />
                        f<br />i<br />j<br />a<br />d<br />o
                    </div>
                </div>
            </>
        </>
    )
}
export default CotizadorResultItem