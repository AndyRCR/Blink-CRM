import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
// const nameRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/

const useAddUser = () => {

    const navigate = useNavigate()

    const [values, setValues] = useState({
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
        roleId: 1,
        status: 1
    })

    const [errors, setErrors] = useState({
        surname: false,
        email: false,
        password: false,
        confirmPassword: false
    })

    const [loading, setLoading] = useState(false)

    const handleChange = evt => {
        const { name, value } = evt.target

        setValues({
            ...values,
            [name]: value,
        })

        if (name === 'email') {
            setErrors({
                ...errors,
                [name]: !regexEmail.test(value),
            })
        }

        else if (name === 'password') {
            setErrors({
                ...errors,
                [name]: value === '',
                confirmPassword: values.confirmPassword !== '' && values.confirmPassword !== value,
            })
        }

        else if (name === 'confirmPassword') {
            setErrors({
                ...errors,
                [name]: value !== values.password,
            })
        }

        else {
            setErrors({
                ...errors,
                [name]: false,
            })
        }
    }

    const handleBlur = evt => {
        const { name, value } = evt.target

        if (value === '') {
            setErrors({
                ...errors,
                [name]: true,
            })
        }
    }

    const verificar = () => {
        setErrors({
            surname: values.surname === '',
            email: values.email === '' || !regexEmail.test(values.email),
            password: values.password === '',
            confirmPassword: values.confirmPassword === '' || values.password !== values.confirmPassword,
        })

        if (
            Object.values(values).every((el) => el !== '') &&
            regexEmail.test(values.email) && values.password === values.confirmPassword
        ) {
            fetchData()
        }
    }

    const handleRegister = () => {
        Swal.fire({
            title: '<p class="modalTitle">Ya creaste tu cuenta</p>',
            iconHtml: `
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_974_11693)">
          <path d="M40 80C34.58 80 29.4667 77.62 25.9733 73.47C20.84 74.0567 15.55 72.12 11.7167 68.2867C7.88667 64.4533 5.95333 59.1533 6.41667 53.7467C2.38 50.5333 0 45.42 0 40C0 34.58 2.38 29.4667 6.53333 25.9733C5.95 20.85 7.88333 15.55 11.7167 11.7167C15.55 7.88333 20.84 5.94 26.2533 6.41667C29.4667 2.38333 34.58 0 40 0C45.42 0 50.5333 2.38 54.0267 6.53C59.1667 5.95333 64.45 7.88 68.2833 11.7133C72.1133 15.5467 74.0467 20.8467 73.5833 26.2533C77.62 29.4667 80 34.58 80 40C80 45.42 77.62 50.5333 73.4667 54.0267C74.05 59.15 72.1167 64.45 68.2833 68.2833C64.4467 72.1167 59.1467 74.0367 53.7467 73.5833C50.5333 77.6167 45.42 80 40 80ZM26.2433 66.92C28.1133 66.92 29.8467 67.7233 31.07 69.1733C33.2967 71.8167 36.55 73.3333 40 73.3333C43.45 73.3333 46.7033 71.8167 48.93 69.1733C50.2733 67.5767 52.23 66.77 54.3167 66.94C57.7633 67.23 61.13 66.0067 63.57 63.5667C66.0067 61.13 67.2367 57.7567 66.9433 54.3133C66.7633 52.2333 67.5767 50.27 69.1767 48.9233C71.8167 46.7 73.3333 43.4433 73.3333 39.9967C73.3333 36.55 71.8167 33.2933 69.1767 31.07C67.58 29.7267 66.7633 27.76 66.9433 25.68C67.2367 22.2367 66.01 18.8633 63.57 16.4267C61.13 13.99 57.7433 12.78 54.32 13.0533C52.2333 13.24 50.2733 12.4167 48.93 10.8233C46.7033 8.18 43.45 6.66333 40 6.66333C36.55 6.66333 33.2967 8.18 31.07 10.8233C29.7233 12.42 27.76 13.22 25.6833 13.0567C22.22 12.7567 18.87 13.99 16.43 16.43C13.9933 18.8667 12.7633 22.24 13.0567 25.6833C13.2367 27.7633 12.4233 29.7267 10.8233 31.0733C8.18333 33.2967 6.66667 36.5533 6.66667 40C6.66667 43.4467 8.18333 46.7033 10.8233 48.9267C12.42 50.27 13.2367 52.2367 13.0567 54.3167C12.7633 57.76 13.99 61.1333 16.43 63.57C18.87 66.0067 22.2733 67.22 25.68 66.9433C25.87 66.9267 26.0567 66.92 26.2433 66.92ZM42.67 50.45L58.4667 35.2233C59.79 33.9467 59.83 31.8333 58.55 30.51C57.2733 29.1867 55.1633 29.1467 53.8367 30.4233L37.9967 45.6933C36.6933 46.9967 34.59 46.9967 33.1967 45.61L25.6033 38.5533C24.2633 37.3033 22.15 37.3767 20.8933 38.7267C19.64 40.0733 19.7167 42.1833 21.0667 43.4367L28.5733 50.41C30.5267 52.3633 33.0967 53.34 35.66 53.34C38.21 53.34 40.7467 52.3767 42.6733 50.4533L42.67 50.45Z" fill="url(#paint0_linear_974_11693)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_974_11693" x1="40" y1="0" x2="40" y2="80" gradientUnits="userSpaceOnUse">
          <stop stop-color="#A99BFF"/>
          <stop offset="0.282403" stop-color="#7C6BED" stop-opacity="0.985381"/>
          <stop offset="0.615743" stop-color="#6966E9"/>
          <stop offset="1" stop-color="#4744CC"/>
          </linearGradient>
          <clipPath id="clip0_974_11693">
          <rect width="80" height="80" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          `,
            html: '<p class="modalText">Ahora queremos conocerte.</p>',
            confirmButtonText: 'Siguiente',
            buttonsStyling: false,
            customClass: {
                confirmButton: 'secondaryButton',
                popup: 'popupContainer',
                icon: 'modalIcon',
                container: 'modalContainer'
            },
            allowOutsideClick: false
        }).then(() => {
            document.querySelector('.navbar .logo').classList.remove('activeStep')
            navigate('/validation')
        })
    }

    const fetchData = () => {
        setLoading(true)

        const formdata = new FormData()
        formdata.append('email', values.email)
        formdata.append('password', values.password)
        formdata.append('surname', values.surname)
        formdata.append('roleId', 1)
        formdata.append('status', 1)

        fetch("https://bff.blinksalud.com/api/v1/user", {
            method: 'POST',
            body: formdata
        })
            .then(response => response.json())
            .then(() => handleRegister())
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error con el servidor',
                    text: 'Intente más tarde'
                })
            }).finally(() => setLoading(false))
    }

    return { values, errors, loading, handleChange, handleBlur, verificar }
}

export default useAddUser