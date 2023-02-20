import { useContext, useEffect, useState } from 'react'
import PerfilDatosBancarios from '../PerfilDatosBancarios/PerfilDatosBancarios'
import PerfilDatosPersonales from '../PerfilDatosPersonales/PerfilDatosPersonales'
import PerfilNiveles from '../PerfilNiveles/PerfilNiveles'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import { GlobalContext } from '../../context/GlobalStateContext'
import './PerfilViewContainer.css'

const PerfilViewContainer = () => {

  const { user } = useContext(GlobalContext)

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
              className={position === 1 ? 'selected' : ''}>Datos bancarios</p>
          </div>
          <div className="sliderBarItem">
            <p
              onClick={() => {
                setDisabledStatus(true)
                setPosition(2)
              }}
              className={position === 2 ? 'selected' : ''}>Niveles</p>
          </div>
        </div>
      </div>

      <div className='sliderHeaderContainer'>
        <div className='sliderHeader'>
          <div className="sliderHeaderIcon">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_999_19713)">
                <path d="M24 24C26.3734 24 28.6935 23.2962 30.6668 21.9776C32.6402 20.6591 34.1783 18.7849 35.0866 16.5922C35.9948 14.3995 36.2324 11.9867 35.7694 9.65892C35.3064 7.33115 34.1635 5.19295 32.4853 3.51472C30.8071 1.83649 28.6689 0.693605 26.3411 0.230582C24.0133 -0.232441 21.6005 0.00519943 19.4078 0.913451C17.2151 1.8217 15.3409 3.35977 14.0224 5.33316C12.7038 7.30655 12 9.62663 12 12C12.0032 15.1816 13.2685 18.232 15.5182 20.4818C17.768 22.7315 20.8184 23.9968 24 24ZM24 4.00001C25.5823 4.00001 27.129 4.4692 28.4446 5.34825C29.7602 6.2273 30.7855 7.47673 31.391 8.93854C31.9965 10.4003 32.155 12.0089 31.8463 13.5607C31.5376 15.1126 30.7757 16.538 29.6569 17.6569C28.538 18.7757 27.1126 19.5376 25.5607 19.8463C24.0089 20.155 22.4003 19.9965 20.9385 19.391C19.4767 18.7855 18.2273 17.7602 17.3482 16.4446C16.4692 15.129 16 13.5823 16 12C16 9.87827 16.8429 7.84344 18.3431 6.34315C19.8434 4.84286 21.8783 4.00001 24 4.00001V4.00001Z" fill="white" />
                <path d="M24 28.001C19.2277 28.0063 14.6524 29.9044 11.2779 33.2789C7.90342 36.6534 6.00529 41.2287 6 46.001C6 46.5314 6.21071 47.0401 6.58579 47.4152C6.96086 47.7903 7.46957 48.001 8 48.001C8.53043 48.001 9.03914 47.7903 9.41421 47.4152C9.78929 47.0401 10 46.5314 10 46.001C10 42.2879 11.475 38.727 14.1005 36.1015C16.726 33.476 20.287 32.001 24 32.001C27.713 32.001 31.274 33.476 33.8995 36.1015C36.525 38.727 38 42.2879 38 46.001C38 46.5314 38.2107 47.0401 38.5858 47.4152C38.9609 47.7903 39.4696 48.001 40 48.001C40.5304 48.001 41.0391 47.7903 41.4142 47.4152C41.7893 47.0401 42 46.5314 42 46.001C41.9947 41.2287 40.0966 36.6534 36.7221 33.2789C33.3476 29.9044 28.7723 28.0063 24 28.001V28.001Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_999_19713">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg className='svgIcon' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 4C60 11.354 58.5515 18.636 55.7373 25.4303C52.923 32.2245 48.7981 38.3979 43.598 43.598C38.3979 48.7981 32.2245 52.923 25.4303 55.7373C18.636 58.5515 11.354 60 4 60" stroke="#34E8CA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
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
              <ModeEditOutlinedIcon />
              Editar
            </>
          ) : (
            <>
              <SaveOutlinedIcon />
              Guardar
            </>
          )}
        </button>
      </div>

      <div className='sliderContainer'>
        <div className="sliderItem">
          <PerfilDatosPersonales disabledStatus={disabledStatus} />
        </div>
        <div className="sliderItem">
          <PerfilDatosBancarios disabledStatus={disabledStatus} />
        </div>
        <div className="sliderItem">
          <PerfilNiveles />
        </div>
      </div>
    </div>
  )
}
export default PerfilViewContainer