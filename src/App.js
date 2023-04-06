import { ThemeProvider } from '@mui/material'
import './App.css'
import './Modal.css'
import './Calendar.css'
import './Buttons.css'
import './SliderBar.css'
import GlobalStateContext from './context/GlobalStateContext'
import Rutas from './routes/Rutas'
import theme from './theme/Theme'
import UserContext from './context/UserContex'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800)
    // eslint-disable-next-line
  }, [isLoading])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStateContext>
        <UserContext>
          {isLoading ? <Loader /> : <Rutas />}
        </UserContext>
      </GlobalStateContext>
    </ThemeProvider>
  )
}

export default App
