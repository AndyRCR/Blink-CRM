import {motion} from 'framer-motion'
import VentasLiquidacionViewContainer from '../components/VentasLiquidacionViewContainer/VentasLiquidacionViewContainer'

const VentasLiquidacionView = () => {

    return (
        <motion.div
        className='liquidacion'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <VentasLiquidacionViewContainer/>
        </motion.div>
    )
}
export default VentasLiquidacionView