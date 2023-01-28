import PerfilViewContainer from "../components/PerfilViewContainer/PerfilViewContainer"
import { motion } from 'framer-motion'

const PerfilView = () => {
  return (
    <motion.div
    className='perfil'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
        <PerfilViewContainer/>
    </motion.div>
  )
}
export default PerfilView