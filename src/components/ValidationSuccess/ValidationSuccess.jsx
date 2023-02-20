import { useNavigate } from "react-router-dom"
import './ValidationSuccess.css'

const ValidationSuccess = ({answers}) => {

    const navigate = useNavigate()

  return (
    <div className="sliderItem validationSuccess">
        <div className="validationItem">
            <img src="https://i.ibb.co/yy2Kr33/validation-Image.png" alt="validation blink" />
            <p className="validationSuccessTitle">¡Gracias por brindarnos tu información!</p>
            <p className="validationSuccessInfo">
                {answers[0] === 1 && answers[1] === 1 ? (
                    <>El equipo de talento te envió un correo para que puedas continuar.<br/>
                    Revisá tu bandeja de entrada para acceder a blink.</>
                ) : (
                    <>Agradecemos tu participación.</>
                )}
            </p>
            <button
            onClick={() => {
                if(answers[0] === 1 && answers[1] === 1){
                    document.body.style.overflowY = 'auto'
                    navigate('/home')
                } else{
                    navigate('/')
                }
                // setUser({
                //     id: 18,
                //     firstname: "test",
                //     surname: "test",
                //     username: "test",
                //     level: 1,
                //     email: "test@gmail.com",
                //     status: 0
                //   })
            }}
            className='secondaryButton'>
                Cerrar
            </button>
        </div>
    </div>
  );
};

export default ValidationSuccess;