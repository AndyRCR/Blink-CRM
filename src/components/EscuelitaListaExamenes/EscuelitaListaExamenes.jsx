import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalStateContext"
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import StarRoundedIcon from '@mui/icons-material/StarRounded'
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded'
import Swal from "sweetalert2"

const EscuelitaListaExamenes = ({ setPosition, setOpen }) => {
    const { tests, user, setQuestionTimer, setCurrentLevel } = useContext(GlobalContext)

    useEffect(() => {
    }, [tests])
    

    return (
        <div className="escuelitaListaCursos">
            {tests.map((course, i) => {
                return (
                    <div
                        onClick={() => {
                            if(user.level >= i) setCurrentLevel(i)

                            if (user.level >= i && !course.approbed) {
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
                                }).then(() => {
                                    setPosition(1)
                                    setQuestionTimer(true)
                                    setCurrentLevel(i)
                                })
                            }

                            if(course.approbed) setOpen(true)
                        }}
                        className={
                            user.level < i
                                ? 'escuelitaCard locked'
                                : course.approbed
                                    ? 'escuelitaCard approbed'
                                    : 'escuelitaCard notApprobed'
                        }
                        key={`course${i + 1}`}>
                        <div className='cardTitle'>
                            <div className="stars">
                                {[...Array(i).keys()].map((el, i) => {
                                    return <StarRoundedIcon className='escuelitaIcon' key={`fullStar${i + 1}`} />
                                })}

                                {[...Array(6 - i).keys()].map((el, i) => {
                                    return <StarOutlineRoundedIcon className='escuelitaIcon' key={`emptyStar${i + 1}`} />
                                })}
                            </div>
                            <div className='title'>
                                Nivel {i}
                            </div>
                        </div>
                        <div className='cardOptions'>
                            {user.level < i
                                ? <LockOutlinedIcon className='escuelitaIcon' />
                                : course.approbed
                                    ? (
                                        <>
                                            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 7.9999C16.0028 6.70476 15.6912 5.4283 15.0918 4.28019C14.4924 3.13207 13.6233 2.14665 12.559 1.40858C11.4947 0.670504 10.2672 0.201857 8.98184 0.0429034C7.69649 -0.116051 6.39176 0.0394411 5.17976 0.496018C3.96777 0.952595 2.88474 1.6966 2.02374 2.66412C1.16275 3.63163 0.549524 4.79372 0.236765 6.05054C-0.075994 7.30735 -0.0789371 8.62131 0.228189 9.87951C0.535315 11.1377 1.14333 12.3025 1.99998 13.2739V21.4999C1.99997 21.9709 2.13299 22.4322 2.38371 22.8309C2.63444 23.2295 2.99266 23.5493 3.41714 23.7533C3.84162 23.9572 4.31509 24.0372 4.78301 23.9839C5.25093 23.9306 5.69427 23.7462 6.06198 23.4519L7.68798 22.1519C7.77658 22.0812 7.8866 22.0426 7.99998 22.0426C8.11336 22.0426 8.22338 22.0812 8.31198 22.1519L9.93798 23.4519C10.3057 23.7462 10.749 23.9306 11.217 23.9839C11.6849 24.0372 12.1583 23.9572 12.5828 23.7533C13.0073 23.5493 13.3655 23.2295 13.6162 22.8309C13.867 22.4322 14 21.9709 14 21.4999V13.2739C15.2883 11.8191 15.9997 9.94314 16 7.9999ZM7.99998 1.9999C9.18667 1.9999 10.3467 2.3518 11.3334 3.01109C12.3201 3.67038 13.0891 4.60745 13.5433 5.7038C13.9974 6.80016 14.1162 8.00656 13.8847 9.17045C13.6532 10.3343 13.0817 11.4034 12.2426 12.2425C11.4035 13.0817 10.3344 13.6531 9.17052 13.8846C8.00664 14.1161 6.80024 13.9973 5.70388 13.5432C4.60752 13.0891 3.67045 12.32 3.01116 11.3333C2.35187 10.3466 1.99998 9.18659 1.99998 7.9999C2.00157 6.40909 2.63422 4.88389 3.75909 3.75902C4.88397 2.63414 6.40917 2.00149 7.99998 1.9999ZM11.717 21.9479C11.6324 21.9898 11.5375 22.0065 11.4436 21.9958C11.3498 21.9852 11.2611 21.9477 11.188 21.8879L9.56198 20.5879C9.11943 20.2314 8.56825 20.037 7.99998 20.037C7.43171 20.037 6.88053 20.2314 6.43798 20.5879L4.81298 21.8879C4.73961 21.9468 4.6511 21.9838 4.55763 21.9947C4.46417 22.0055 4.36954 21.9898 4.28462 21.9492C4.19971 21.9087 4.12795 21.8451 4.07759 21.7656C4.02724 21.6861 4.00034 21.594 3.99998 21.4999V14.9179C5.21395 15.6265 6.59435 15.9999 7.99998 15.9999C9.40561 15.9999 10.786 15.6265 12 14.9179V21.4999C12.0011 21.5939 11.975 21.6863 11.9247 21.7658C11.8745 21.8453 11.8024 21.9085 11.717 21.9479Z" fill="white" />
                                            </svg>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 24C10.374 24 8.84 23.286 7.792 22.041C6.252 22.217 4.665 21.636 3.515 20.486C2.366 19.336 1.786 17.746 1.925 16.124C0.714 15.16 0 13.626 0 12C0 10.374 0.714 8.84 1.96 7.792C1.785 6.255 2.365 4.665 3.515 3.515C4.665 2.365 6.252 1.782 7.876 1.925C8.84 0.715 10.374 0 12 0C13.626 0 15.16 0.714 16.208 1.959C17.75 1.786 19.335 2.364 20.485 3.514C21.634 4.664 22.214 6.254 22.075 7.876C23.286 8.84 24 10.374 24 12C24 13.626 23.286 15.16 22.04 16.208C22.215 17.745 21.635 19.335 20.485 20.485C19.334 21.635 17.744 22.211 16.124 22.075C15.16 23.285 13.626 24 12 24ZM7.873 20.076C8.434 20.076 8.954 20.317 9.321 20.752C9.989 21.545 10.965 22 12 22C13.035 22 14.011 21.545 14.679 20.752C15.082 20.273 15.669 20.031 16.295 20.082C17.329 20.169 18.339 19.802 19.071 19.07C19.802 18.339 20.171 17.327 20.083 16.294C20.029 15.67 20.273 15.081 20.753 14.677C21.545 14.01 22 13.033 22 11.999C22 10.965 21.545 9.988 20.753 9.321C20.274 8.918 20.029 8.328 20.083 7.704C20.171 6.671 19.803 5.659 19.071 4.928C18.339 4.197 17.323 3.834 16.296 3.916C15.67 3.972 15.082 3.725 14.679 3.247C14.011 2.454 13.035 1.999 12 1.999C10.965 1.999 9.989 2.454 9.321 3.247C8.917 3.726 8.328 3.966 7.705 3.917C6.666 3.827 5.661 4.197 4.929 4.929C4.198 5.66 3.829 6.672 3.917 7.705C3.971 8.329 3.727 8.918 3.247 9.322C2.455 9.989 2 10.966 2 12C2 13.034 2.455 14.011 3.247 14.678C3.726 15.081 3.971 15.671 3.917 16.295C3.829 17.328 4.197 18.34 4.929 19.071C5.661 19.802 6.682 20.166 7.704 20.083C7.761 20.078 7.817 20.076 7.873 20.076ZM12.801 15.135L17.54 10.567C17.937 10.184 17.949 9.55 17.565 9.153C17.182 8.756 16.549 8.744 16.151 9.127L11.399 13.708C11.008 14.099 10.377 14.099 9.959 13.683L7.681 11.566C7.279 11.191 6.645 11.213 6.268 11.618C5.892 12.022 5.915 12.655 6.32 13.031L8.572 15.123C9.158 15.709 9.929 16.002 10.698 16.002C11.463 16.002 12.224 15.713 12.802 15.136L12.801 15.135Z" fill="white" />
                                            </svg>
                                        </>
                                    )
                                    : (
                                        <>
                                            {tests[i].attempts} de 3 intentos
                                            <ArrowForwardOutlinedIcon className='escuelitaIcon' />
                                        </>
                                    )
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default EscuelitaListaExamenes