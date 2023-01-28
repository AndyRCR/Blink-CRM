import { InputAdornment, OutlinedInput, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import classes from "../../theme/Styles";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const { setLoginState } = useContext(GlobalContext);

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
    <div className="registerForm section">
      <div className="registerSlogan">
        <h2>
          Blink salud es la comunidad de
          <br />
          asesores más grande del país
        </h2>

        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur. Nec feugiat nec vestibulum
            amet. Aenean purus
          </li>
          <li>
            tellus nulla imperdiet aenean vitae viverra. Amet egestas ipsum
            morbi mauris amet posuere. Bibendum tortor dolor ac gravida sit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Nec feugiat nec vestibulum
            amet. Aenean purus
          </li>
          <li>
            tellus nulla imperdiet aenean vitae viverra. Amet egestas ipsum
            morbi mauris amet posuere. Bibendum tortor dolor ac gravida sit.
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
                type="number"
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

          <div onClick={() => setLoginState(0)} className="registerText">
            Ya tengo cuenta
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
