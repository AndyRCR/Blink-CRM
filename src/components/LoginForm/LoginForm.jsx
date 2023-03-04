import React, { useState } from "react"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { motion } from 'framer-motion'
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material"
import classes from "../../theme/Styles"
import { useNavigate } from "react-router-dom"
import "./LoginForm.css"

const LoginForm = ({ position, setPosition }) => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => event.preventDefault()

  return (
    position === 0 ? (
      <motion.div
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
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
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  ...classes.input,
                  borderBottom: email === '' ? '0px solid #383838' : '1px solid #383838'
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
                }
              />
            </div>

            <div className="formItem">
              <label>Contraseña</label>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  ...classes.input,
                  borderBottom: password === '' ? '0px solid #383838' : '1px solid #383838'
                }}
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
                control={<Checkbox />}
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
              onClick={() => setPosition(1)}
              className="registerText">
              Quiero sumarme a la comunidad
            </div>
          </div>
        </div>
      </motion.div>
    ) : false
  )
}

export default LoginForm
