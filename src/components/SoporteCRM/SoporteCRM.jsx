import { useEffect, useState } from 'react'
import SoporteCRMSecciones from '../SoporteCRMSecciones/SoporteCRMSecciones'
import SoporteFAQ from '../SoporteFAQ/SoporteFAQ'
import './SoporteCRM.css'

const SoporteCRM = () => {

  const [position, setPosition] = useState(0)

  const handleResize2 = () => {
    // const width = document.querySelector(".soporteCRM .sliderContainer").clientWidth
    const sliderContainer = document.querySelector(".soporteCRM > .sliderContainer")
    const width = sliderContainer.clientWidth
    sliderContainer.style.minHeight = document.querySelector(`.soporteCRM > .sliderContainer .sliderItem:nth-child(${position + 1}) > div`).clientHeight + 100 + 'px'

    document
      .querySelectorAll(".soporteCRM .sliderContainer .sliderItem")
      .forEach((el) => {
        el.style.transform = `translateX(-${width * position}px)`
      })
  }

  useEffect(() => {

    handleResize2()

    window.addEventListener("resize", handleResize2)

    return () => window.removeEventListener("resize", handleResize2)

    // eslint-disable-next-line
  }, [position])

  return (
    <div className='soporteCRM'>
      <div className="sliderContainer" style={{ height: '100%' }}>
        <div className="sliderItem" style={{ margin: 0 }}>
          <SoporteCRMSecciones setPosition={setPosition} />
        </div>
        <div className="sliderItem" style={{ margin: 0 }}>
          <SoporteFAQ setPosition={setPosition} />
        </div>
      </div>
    </div>
  )
}
export default SoporteCRM