import { Slider } from "@mui/material"
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined"
import { useContext, useEffect } from "react"
import classes from "../../theme/Styles"
import DashboardGraph from "../DashboardGraph/DashboardGraph"
import DashboardLastSales from "../DashboardLastSales/DashboardLastSales"
import DashboardQuotes from "../DashboardQuotes/DashboardQuotes"
import DashboardLiquidations from "../DashboardLiquidations/DashboardLiquidations"
import "./HomeViewContainer.css"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { UserGlobalContext } from "../../context/UserContex"

const HomeViewContainer = () => {

    const { user, userStatuses } = useContext(UserGlobalContext)

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
        user && <div
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
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 8.66667C4.40666 8.66667 3.82664 8.49072 3.33329 8.16108C2.83994 7.83143 2.45542 7.3629 2.22836 6.81472C2.0013 6.26654 1.94189 5.66334 2.05764 5.0814C2.1734 4.49945 2.45912 3.96491 2.87868 3.54535C3.29824 3.12579 3.83279 2.84007 4.41473 2.72431C4.99667 2.60856 5.59987 2.66797 6.14805 2.89503C6.69623 3.12209 7.16476 3.50661 7.49441 3.99996C7.82405 4.49331 8 5.07332 8 5.66667C7.99912 6.46205 7.68276 7.2246 7.12035 7.78701C6.55793 8.34943 5.79538 8.66579 5 8.66667ZM5 4C4.67036 4 4.34813 4.09775 4.07405 4.28089C3.79997 4.46402 3.58635 4.72432 3.4602 5.02886C3.33405 5.33341 3.30105 5.66852 3.36536 5.99182C3.42967 6.31512 3.5884 6.61209 3.82149 6.84518C4.05458 7.07827 4.35155 7.237 4.67485 7.30131C4.99815 7.36562 5.33326 7.33261 5.63781 7.20647C5.94235 7.08032 6.20265 6.8667 6.38578 6.59262C6.56892 6.31854 6.66667 5.9963 6.66667 5.66667C6.66667 5.22464 6.49107 4.80072 6.17851 4.48816C5.86595 4.1756 5.44203 4 5 4ZM10 15.3333V15C10 13.6739 9.47322 12.4022 8.53553 11.4645C7.59785 10.5268 6.32608 10 5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4022 0 13.6739 0 15L0 15.3333C0 15.5101 0.0702379 15.6797 0.195262 15.8047C0.320286 15.9298 0.489856 16 0.666667 16C0.843478 16 1.01305 15.9298 1.13807 15.8047C1.2631 15.6797 1.33333 15.5101 1.33333 15.3333V15C1.33333 14.0275 1.71964 13.0949 2.40728 12.4073C3.09491 11.7196 4.02754 11.3333 5 11.3333C5.97246 11.3333 6.90509 11.7196 7.59273 12.4073C8.28036 13.0949 8.66667 14.0275 8.66667 15V15.3333C8.66667 15.5101 8.73691 15.6797 8.86193 15.8047C8.98695 15.9298 9.15652 16 9.33333 16C9.51014 16 9.67971 15.9298 9.80474 15.8047C9.92976 15.6797 10 15.5101 10 15.3333ZM16 12C16 11.0991 15.7392 10.2175 15.2491 9.46158C14.7591 8.70565 14.0607 8.10772 13.2383 7.73998C12.4159 7.37223 11.5046 7.25039 10.6145 7.38916C9.72437 7.52793 8.89344 7.92137 8.222 8.522C8.15584 8.58014 8.10186 8.6508 8.06317 8.72991C8.02448 8.80903 8.00185 8.89502 7.99659 8.98293C7.99132 9.07085 8.00353 9.15893 8.0325 9.2421C8.06147 9.32526 8.10663 9.40187 8.16537 9.46748C8.22412 9.53309 8.29528 9.58642 8.37475 9.62437C8.45422 9.66233 8.54042 9.68416 8.62838 9.68861C8.71633 9.69306 8.8043 9.68004 8.88719 9.6503C8.97009 9.62055 9.04627 9.57469 9.11133 9.51534C9.59097 9.08642 10.1845 8.80548 10.8203 8.70644C11.456 8.6074 12.1069 8.69449 12.6943 8.9572C13.2816 9.21991 13.7804 9.647 14.1304 10.1869C14.4804 10.7269 14.6667 11.3566 14.6667 12C14.6667 12.1768 14.7369 12.3464 14.8619 12.4714C14.987 12.5964 15.1565 12.6667 15.3333 12.6667C15.5101 12.6667 15.6797 12.5964 15.8047 12.4714C15.9298 12.3464 16 12.1768 16 12ZM11.6667 6C11.0733 6 10.4933 5.82406 9.99996 5.49441C9.50661 5.16477 9.12209 4.69623 8.89503 4.14805C8.66796 3.59987 8.60855 2.99667 8.72431 2.41473C8.84007 1.83279 9.12579 1.29824 9.54535 0.878681C9.9649 0.459124 10.4995 0.173401 11.0814 0.0576455C11.6633 -0.0581102 12.2665 0.00129986 12.8147 0.228363C13.3629 0.455426 13.8314 0.839943 14.1611 1.33329C14.4907 1.82664 14.6667 2.40666 14.6667 3C14.6658 3.79538 14.3494 4.55793 13.787 5.12035C13.2246 5.68277 12.462 5.99912 11.6667 6ZM11.6667 1.33333C11.337 1.33333 11.0148 1.43108 10.7407 1.61422C10.4666 1.79735 10.253 2.05765 10.1269 2.3622C10.0007 2.66674 9.96772 3.00185 10.032 3.32515C10.0963 3.64845 10.2551 3.94543 10.4882 4.17851C10.7212 4.4116 11.0182 4.57034 11.3415 4.63464C11.6648 4.69895 11.9999 4.66595 12.3045 4.5398C12.609 4.41366 12.8693 4.20003 13.0525 3.92595C13.2356 3.65187 13.3333 3.32964 13.3333 3C13.3333 2.55797 13.1577 2.13405 12.8452 1.82149C12.5326 1.50893 12.1087 1.33333 11.6667 1.33333Z" fill="#4744CC" />
                                </svg>
                                <p>30</p>
                            </div>
                        ) : (
                            false
                        )}
                    </div>
                    <Slider
                        sx={classes.customSlider}
                        value={
                            user.status === userStatuses["completo"] ? parseInt(100 / 6) : 0
                        }
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