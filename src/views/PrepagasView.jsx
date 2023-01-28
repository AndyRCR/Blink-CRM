import { motion } from 'framer-motion'
import PrepagasViewContainer from '../components/PrepagasViewContainer/PrepagasViewContainer'

const PrepagasView = () => {
  return (
    <motion.div
    className='prepagas'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <PrepagasViewContainer/>
    </motion.div>
  )
}
export default PrepagasView