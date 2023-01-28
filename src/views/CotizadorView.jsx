import { motion } from 'framer-motion'
import CotizadorViewContainer from '../components/CotizadorViewContainer/CotizadorViewContainer'

const CotizadorView = () => {
  return (
    <motion.div
    className='cotizador'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <CotizadorViewContainer/>
    </motion.div>
  )
}
export default CotizadorView