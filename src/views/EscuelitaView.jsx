import {motion} from 'framer-motion'
import EscuelitaViewContainer from '../components/EscuelitaViewContainer/EscuelitaViewContainer'

const EscuelitaView = () => {

    return (
        <motion.div
        className='escuelitaView'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}>
            <EscuelitaViewContainer/>
        </motion.div>
    )
}
export default EscuelitaView