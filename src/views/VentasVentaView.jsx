import {motion} from 'framer-motion'
import VentasVentaViewContainer from '../components/VentasVentaViewContainer/VentasVentaViewContainer'

const VentasVentaView = () => {

    return (
        <motion.div
        className='venta'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <VentasVentaViewContainer/>
        </motion.div>
    )
}
export default VentasVentaView