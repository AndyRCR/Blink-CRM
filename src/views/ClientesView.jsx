import ClientesViewContainer from "../components/ClientesViewContainer/ClientesViewContainer"
import { motion } from 'framer-motion'

const ClientesView = () => {
  return (
    <motion.div
    className='clientes'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <ClientesViewContainer/>
    </motion.div>
  )
}
export default ClientesView