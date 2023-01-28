import { motion } from 'framer-motion'
import SoporteViewContainer from '../components/SoporteViewContainer/SoporteViewContainer'

const SoporteView = () => {
  return (
    <motion.div
    className='soporte'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <SoporteViewContainer/>
    </motion.div>
  )
}
export default SoporteView