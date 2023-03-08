import { ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import './Modal.css'
import './Calendar.css'
import './Buttons.css'
import './SliderBar.css'
import Loader from './components/Loader/Loader';
import GlobalStateContext from './context/GlobalStateContext';
import Rutas from './routes/Rutas';
import theme from './theme/Theme';

function App() {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1800)
  }, [isLoading])
  

  return isLoading ? <Loader/> : (
    <ThemeProvider theme={theme}>
      <GlobalStateContext>
        <Rutas/>
      </GlobalStateContext>
    </ThemeProvider>
  );
}

export default App;
