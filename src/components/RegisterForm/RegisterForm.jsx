import { InputAdornment, OutlinedInput, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React, { useState } from "react";
import classes from "../../theme/Styles";
import Swal from "sweetalert2";
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = ({ position, setPosition }) => {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleRegister = () => {
    Swal.fire({
      title: '<p class="modalTitle">Ya creaste tu cuenta</p>',
      iconHtml: '<img style="width: 80px;" src="https://i.ibb.co/gTwL8s5/modal-Image.png">',
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
  };

  return (
    position === 1 ? (
      <motion.div
        className="registerForm section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
        <div className="registerSlogan">
          <h2>
            ¡Bienvenido a la comunidad de asesores en cobertura médica más
            grande del país!
          </h2>

          <ul>
            <li>
              Te ofrecemos una herramienta basada en IA para comparar planes de salud y sus
              beneficios, todo online.
            </li>
            <li>
              Gestiona la venta de planes de salud de manera rápida y sencilla, con opciones de
              pago seguras.
            </li>
            <li>
              Servicio de atención al cliente asistido por nuestro equipo de soporte para ayudar a
              tus clientes a resolver cualquier duda o problema que puedan tener.
            </li>
            <li>
              Condiciones comerciales: Rentabiliza tu cartera de clientes con el mejor programa
              de beneficios del mercado.
            </li>
            <li>
              Recordatorios de pagos automáticos a tus afiliados para asegurarse de que no se
              olviden ningún pago y que su cobertura de salud no se vea comprometida.
            </li>
            <li>
              Información actualizada sobre la red de prestadores de la prepaga, incluyendo
              médicos especialistas, clínicas y farmacias.
            </li>
            <li>
              Acceso a descuentos y promociones: ofrecer a los usuarios acceso a descuentos y
              promociones especiales en planes de salud y servicios relacionados con la salud.
            </li>
            <li>
              Capacitación constante, Escuelita e-learning para que puedas explotar tu potencial
              sumando nuevos conocimientos.
            </li>
            <li>
              Campañas de marketing digital focalizadas para sumar leads a tu cartera.
            </li>
            <li>
              Protección de datos personales, utilizamos estándares de calidad robustos para
              garantizar la seguridad de los datos
            </li>
          </ul>
        </div>

        <div className="formSection">
          <p>Registrate, es rápido y fácil</p>

          <div className="form">
            <div className="formItem">
              <label>Nombre completo</label>
              <OutlinedInput
                type="text"
                sx={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <PersonOutlinedIcon />
                  </InputAdornment>
                }
              />
            </div>

            <div className="formItem">
              <label>Correo electrónico</label>
              <OutlinedInput
                type="email"
                sx={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                }
              />
            </div>

            <div className="formItem">
              <label>Celular</label>
              <div className="telInput">
                <OutlinedInput
                  type="text"
                  defaultValue={'+54'}
                  sx={{
                    ...classes.input,
                    width: "25%",
                  }}
                />

                <OutlinedInput
                  type="number"
                  sx={{
                    ...classes.input,
                    width: "75%",
                  }}
                />
              </div>
            </div>

            <div className="formItem">
              <label>Contraseña</label>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                sx={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            <div className="formItem">
              <label>Repetir contraseña</label>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                sx={classes.input}
                startAdornment={
                  <InputAdornment position="start">
                    <LockOutlinedIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon />
                      ) : (
                        <VisibilityOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>

            <button onClick={handleRegister} className="secondaryButton">
              Registrarme
            </button>

            <div onClick={() => setPosition(0)} className="registerText">
              Ya tengo cuenta
            </div>
          </div>
        </div>
      </motion.div>
    ) : false
  );
};

export default RegisterForm;
