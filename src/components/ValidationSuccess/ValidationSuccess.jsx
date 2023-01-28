import { useNavigate } from "react-router-dom"
import './ValidationSuccess.css'

const ValidationSuccess = () => {

    const navigate = useNavigate()

  return (
    <div className="validationSection validationSuccess">
        <div className="validationForm">
            <img src="https://i.ibb.co/yy2Kr33/validation-Image.png" alt="validation blink" />
            <p className="validationSuccessTitle">¡Gracias por brindarnos tu información!</p>
            <p className="validationSuccessInfo">
                El equipo de talento te envió un correo para que puedas continuar.<br/>
                Revisá tu bandeja de entrada para acceder a blink.
            </p>
            <button
            onClick={() => {
                document.body.style.overflowY = 'auto'
                // setUser({
                //     id: 18,
                //     firstname: "test",
                //     surname: "test",
                //     username: "test",
                //     level: 1,
                //     email: "test@gmail.com",
                //     status: 0
                //   })
                navigate('/home')
            }}
            className='secondaryButton'>
                Cerrar
            </button>
        </div>
    </div>
  );
};

export default ValidationSuccess;