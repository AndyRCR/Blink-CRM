import { useContext, useEffect, useState } from 'react'
import PerfilDatosBancarios from '../PerfilDatosBancarios/PerfilDatosBancarios'
import PerfilDatosPersonales from '../PerfilDatosPersonales/PerfilDatosPersonales'
import PerfilNiveles from '../PerfilNiveles/PerfilNiveles'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import { GlobalContext } from '../../context/GlobalStateContext'
import './PerfilViewContainer.css'

const PerfilViewContainer = () => {

  const {user} = useContext(GlobalContext)

  const [position, setPosition] = useState(0)
  const [disabledStatus, setDisabledStatus] = useState(false)

  const handleResize = () => {
    const width = document.querySelector(".perfilViewContainer .sliderContainer").clientWidth

    document
      .querySelectorAll(".perfilViewContainer .sliderContainer .sliderItem")
      .forEach((el) => {
        el.style.transform = `translateX(-${width * position}px)`
      })
  }

  useEffect(() => {
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position])

  return (
    <div className="perfilViewContainer">
      <div className='sliderBarContainer'>
        <div className="sliderBar">
          <div className="sliderBarItem">
            <p
            onClick={() => {
              setDisabledStatus(true)
              setPosition(0)
            }}
            className={position === 0 ? 'selected' : ''}>Datos personales</p>
          </div>
          <div className="sliderBarItem">
            <p
            onClick={() => {
              setDisabledStatus(true)
              setPosition(1)
            }}
            className={position === 1  ? 'selected' : ''}>Datos bancarios</p>
          </div>
          <div className="sliderBarItem">
            <p
            onClick={() => {
              setDisabledStatus(true)
              setPosition(2)
            }}
            className={position === 2  ? 'selected' : ''}>Niveles</p>
          </div>
        </div>
      </div>
      
      <div className='sliderHeaderContainer'>
        <div className='sliderHeader'>
          <div className="sliderHeaderIcon">
            <PersonOutlinedIcon
            sx={{
              "&.MuiSvgIcon-root": {
                width: "auto",
                height: "64px",
              },
            }}/>
            <svg className='svgIcon' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 4C60 11.354 58.5515 18.636 55.7373 25.4303C52.923 32.2245 48.7981 38.3979 43.598 43.598C38.3979 48.7981 32.2245 52.923 25.4303 55.7373C18.636 58.5515 11.354 60 4 60" stroke="#34E8CA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className='sliderHeaderInfo'>
            <div className='sliderHeaderInfoMain'>{user.firstname} {user.surname}</div>
            <div className='sliderHeaderInfoSecondary'>
              Nº de vendedor | <span>Nivel {user.level}</span>
            </div>
          </div>
        </div>

        <button
        onClick={() => setDisabledStatus(!disabledStatus)}
        className={position !== 2 ? 'secondaryButton' : 'secondaryButton disabled'}>
          {disabledStatus === true ? (
            <>
              <ModeEditOutlinedIcon/>
              Editar
            </>
          ) : (
            <>
              <SaveOutlinedIcon/>
              Guardar
            </>
          )}
        </button>
      </div>

      <div className='sliderContainer'>
        <div className="sliderItem">
          <PerfilDatosPersonales disabledStatus = {disabledStatus}/>
        </div>
        <div className="sliderItem">
          <PerfilDatosBancarios disabledStatus = {disabledStatus}/>
        </div>
        <div className="sliderItem">
          <PerfilNiveles/>
        </div>
      </div>
    </div>
  )
}
export default PerfilViewContainer