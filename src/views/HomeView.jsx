import HomeViewContainer from "../components/HomeViewContainer/HomeViewContainer"
import { motion } from 'framer-motion'

const HomeView = () => {
  return (
    <motion.div
    className='homeView'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}>
      <HomeViewContainer/>
    </motion.div>
  )
}
export default HomeView