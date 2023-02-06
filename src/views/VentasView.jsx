import { motion } from 'framer-motion'
import VentasViewContainer from '../components/VentasViewContainer/VentasViewContainer'

const VentasView = () => {
    return (
        <motion.div
        className='ventas'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <VentasViewContainer/>
        </motion.div>
    )
}
export default VentasView