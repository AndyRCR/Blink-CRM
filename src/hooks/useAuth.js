import { useContext, useState } from "react"
import { UserGlobalContext } from "../context/UserContex"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const useAuth = ({ email: initialEmail = '', password: initialPassword = '' }) => {

    const navigate = useNavigate()

    const { setUser } = useContext(UserGlobalContext)

    const [values, setValues] = useState({
        email: initialEmail,
        password: initialPassword
    })

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    })

    const [loading, setLoading] = useState(false)

    const handleChange = evt => {
        const { name, value } = evt.target

        if (name === 'email') {
            setErrors({
                ...errors,
                [name]: !regexEmail.test(value),
            })
        } else {
            setErrors({
                ...errors,
                [name]: false,
            })
        }

        setValues({
            ...values,
            [name]: value,
        })
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
            email: values.email === '' || !regexEmail.test(values.email),
            password: values.password === '',
        })

        if (
            Object.values(values).every((el) => el !== '') &&
            regexEmail.test(values.email)
        ) {
            fetchData()
        }
    }

    const fetchData = () => {
        setLoading(true)
        fetch(`https://authen.blinksalud.com/api/v1/login?email=${values.email}&password=${values.password}`)
            .then(response => response.json())
            .then(result => {
                if (result.hasOwnProperty('Status')) {
                    Swal.fire({
                        icon: 'error',
                        title: 'E-mail o contraseña incorrectos'
                    })
                } else {
                    setUser({
                        ...result,
                        status: 2
                    })
                    localStorage.setItem('user', JSON.stringify({ ...result, status: 2 }))
                    navigate('/home')
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ocurrió un error con el servidor',
                    text: 'Intente más tarde'
                })
            })
            .finally(() => setLoading(false))
    }

    return { values, errors, loading, handleChange, handleBlur, verificar }
}

export default useAuth