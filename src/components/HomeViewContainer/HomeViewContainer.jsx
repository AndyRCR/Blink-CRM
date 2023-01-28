import { Slider } from "@mui/material"
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import { GlobalContext } from "../../context/GlobalStateContext"
import { useContext, useEffect } from "react"
import classes from "../../theme/Styles"
import DashboardGraph from "../DashboardGraph/DashboardGraph"
import DashboardLastSales from "../DashboardLastSales/DashboardLastSales"
import DashboardQuotes from "../DashboardQuotes/DashboardQuotes"
import DashboardLiquidations from "../DashboardLiquidations/DashboardLiquidations"
import "./HomeViewContainer.css"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const HomeViewContainer = () => {
  const { user, userStatuses } = useContext(GlobalContext)

  const navigate = useNavigate()

  const initialFlux = () => {
    Swal.fire({
      title: `<p class="modalTitle">¡Bienvenido ${user.firstname}!</p>`,
      iconHtml:
        '<img style="width: 80px" src="https://i.ibb.co/3rdhqjC/stepone.png">',
      html: '<p class="modalTextStepOne">Ya estamos a un paso. Podrás acceder directamente al Nivel 1 y comenzar a generar ganancias validando tus conocimientos con un breve cuestionario.  Sino podrás acceder a Escuelita y formarte en el mercado de cobertura médica desde nivel inicial.</p>',
      confirmButtonText: "Quiero evaluar mis aptitudes",
      denyButtonText: "Continuar con Escuelita",
      showDenyButton: true,
      buttonsStyling: false,
      customClass: {
        confirmButton: "secondaryButton",
        denyButton: "secondaryButton",
        popup: "popupStepOne",
        icon: "modalIcon",
        actions: 'actionsContainer',
        container: "modalContainer",
      },
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `<p class="modalTitle" style="text-align: left">Antes de empezar recordá que:</p>`,
          html: `<ul class="modalTextStepOne">
                    <li>Tenés hasta 3 intentos por examen.</li>
                    <li>Para aprobar necesitas 9 de 10 respuestas correctas.</li>
                    <li>Cada pregunta tendrá un tiempo de x minutos, pasado ese tiempo se continuará<br/>con la siguiente pregunta.</li>
                    <li>La aprobación del examen es requisito indispensable para pasar de nivel.</li>
                    </ul>`,
          confirmButtonText: "Comenzar",
          buttonsStyling: false,
          customClass: {
            confirmButton: "secondaryButton",
            popup: "popupDecisionContainer",
            icon: "modalIcon",
            container: "modalContainer",
            actions: "singleButtonModal"
          },
          allowOutsideClick: false,
        })
      } else {

      }
    })
  }

  const completeProfile = () => {
    Swal.fire({
      title: `<p class="modalTitle">Completá tu perfil</p>`,
      html: '<p class="modalTextStepOne">Al cargar tus datos del perfil podrás<br/>utilizar todas las funciones del CRM</p>',
      confirmButtonText: "Completar",
      buttonsStyling: false,
      customClass: {
        confirmButton: "secondaryButton",
        popup: "popupContainer",
        icon: "modalIcon",
        container: "modalContainer",
      },
      allowOutsideClick: false,
    }).then(() => {
      let content = document.querySelector(".dashboardNavbar .user")
      content.classList.add("activeStep")

      let userStep = document.querySelector('.userStep')
      userStep.style.display = 'flex'
      userStep.style.left = `${content.getBoundingClientRect().left}px`

      Swal.fire({
        html: '<p class="modalTextStepOne">Visitá tu perfil para completar<br/>tus datos.</p>',
        showConfirmButton: false,
        customClass: {
          popup: "popupProfileContainer",
          container: "modalStepContainer",
        },
        allowOutsideClick: false,
      }).then(() => {
        content.classList.remove("activeStep")
      })
    })
  }

  useEffect(() => {
    if (window.location.pathname === '/home') {
      if (user.status === userStatuses["nuevo"]) setTimeout(initialFlux, 500)
      if (user.status === userStatuses["aprobado"]) setTimeout(completeProfile, 500)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className={
        user.status !== userStatuses["completo"]
          ? "homeViewContainer inactive"
          : "homeViewContainer active"
      }
    >
      <div className="firstContainer">
        <div className="levelContainer">
          <div className="label">
            <p style={{ height: "29px" }}>
              Progreso de nivel{" "}
              {user.status === userStatuses["completo"] ? user.level : "#"}
            </p>
            {user.status === userStatuses["completo"] ? (
              <div className="class">
                <GroupOutlinedIcon
                  sx={{
                    ...classes.menuIcon,
                    color: "var(--blink-main)",
                  }}
                />
                <p>30</p>
              </div>
            ) : (
              false
            )}
          </div>
          <Slider
            sx={classes.customSlider}
            defaultValue={
              user.status === userStatuses["completo"] ? parseInt(100 / 6) : 0
            }
            // min = {user.status === userStatuses['completo'] ? parseInt(100 / 6) : 0}
            // max = {user.status === userStatuses['completo'] ? parseInt(100 / 6) : 0}
            step={100 / 30}
            disabled={user.status !== userStatuses["completo"]}
            aria-label="Default"
            valueLabelDisplay="auto"
            valueLabelFormat={(value) =>
              `${parseInt(value / (100 / 30))} cápitas vendidas a la fecha.`
            }
          />
        </div>
        <button
          onClick={() => navigate('/cotizador')}
          className="secondaryButton"
          disabled={user.status !== userStatuses["completo"]}
        >
          <AddCircleOutlineOutlinedIcon />
          Nueva cotización
        </button>
      </div>

      <div className="dashboardGrid">
        <DashboardGraph />
        <DashboardLastSales />
        <DashboardQuotes />
        <DashboardLiquidations />
      </div>
    </div>
  )
}
export default HomeViewContainer
