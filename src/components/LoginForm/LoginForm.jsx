import React, { useContext, useState } from "react"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material"
import classes from "../../theme/Styles"
import { GlobalContext } from "../../context/GlobalStateContext"
import { useNavigate } from "react-router-dom"
import "./LoginForm.css"

const LoginForm = () => {

  const {setLoginState} = useContext(GlobalContext)

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => event.preventDefault()

  return (
    <div className="section">
      <div className="banner">
        Lorem
        <br />
        ipsum dolor
        <br />
        sit amet
      </div>
      <div className="formSection">
        <p>¡Que bueno verte!</p>

        <div className="form">
          <div className="formItem">
            <label>Correo electrónico</label>
            <OutlinedInput
              type='email'
              sx={classes.input}
            />
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
                    {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </div>

          <div className="formOptions">
            <FormControlLabel
              sx={classes.checkbox}
              control={<Checkbox/>}
              label="Recordarme" />
            <p>¿Olvidaste tu contraseña?</p>
          </div>

          <button
          onClick={() => {
            // setUser({
            //   id: 18,
            //   firstname: "Paul",
            //   surname: "Welsch",
            //   username: "paul",
            //   level: 1,
            //   email: "p@gmail.com",
            //   status: 1
            // })
            navigate('/home')
          }}
          className="secondaryButton">
            Iniciar sesión
          </button>

          <div
          onClick={() => setLoginState(1)}
          className="registerText">
            Quiero sumarme a la comunidad
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
