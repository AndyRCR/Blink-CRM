import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './VentasVentaViewContainer.css'

const VentasVentaViewContainer = () => {

    const {id} = useParams()

    const navigate = useNavigate()

    const {ventas} = useContext(GlobalContext)

    const [sale, setSale] = useState(ventas.filter(el => el.id === parseInt(id))[0])

    useEffect(() => {
      console.log(sale)

      // eslint-disable-next-line
    }, [])

    return (
        <div className="ventasVentaViewContainer">
            VentasVentaViewContainer

            <button
            onClick={() => navigate('/ventas')}
            className='secondaryButton'>
                <ReplyOutlinedIcon/>
                Volver
            </button>
        </div>
    )
}

export default VentasVentaViewContainer