import React, { useState } from "react"
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { motion } from 'framer-motion'
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material"
import classes from "../../theme/Styles"
import "./LoginForm.css"
import useAuth from "../../hooks/useAuth"

const LoginForm = ({ position, setPosition }) => {
    
	const { values, errors, loading, handleChange, handleBlur, verificar } = useAuth({
        email: '',
        password: ''
    })
    
	const [showPassword, setShowPassword] = useState(false)
    	
	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event) => event.preventDefault()

	return position === 0 ? (
		<motion.div
			className='loginForm section'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<div className='banner'>¡Te damos la bienvenida!</div>
			<div className='formSection'>
				<p>¡Que bueno verte!</p>

				<div className='form'>
					<div
						className={errors.email ? 'formItem error' : 'formItem'}
					>
						<label>Correo electrónico</label>
						<OutlinedInput
							type='email'
							name='email'
							value={values.email}
							onChange={(e) => handleChange(e)}
							onBlur={(e) => handleBlur(e)}
							sx={classes.input}
							startAdornment={
								<InputAdornment position='start'>
									<MailOutlineIcon />
								</InputAdornment>
							}
						/>
						<p className='errorLabel'>
							{values.email === ''
								? 'Este campo es obligatorio'
								: 'Ingresa un e-mail válido'}
						</p>
					</div>

					<div
						className={
							errors.password ? 'formItem error' : 'formItem'
						}
					>
						<label>Contraseña</label>
						<OutlinedInput
							type={showPassword ? 'text' : 'password'}
							name='password'
							value={values.password}
							onChange={(e) => handleChange(e)}
							onBlur={(e) => handleBlur(e)}
							sx={classes.input}
							startAdornment={
								<InputAdornment position='start'>
									<LockOutlinedIcon />
								</InputAdornment>
							}
							endAdornment={
								<InputAdornment position='end'>
									<IconButton
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge='end'
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
						<p className='errorLabel'>Este campo es obligatorio</p>
					</div>

					<div className='formOptions'>
						<FormControlLabel
							sx={classes.checkbox}
							control={<Checkbox />}
							label='Recordarme'
						/>
						<p>¿Olvidaste tu contraseña?</p>
					</div>

					<button onClick={verificar} className='secondaryButton'>
						{loading ? (
                            <CircularProgress size={'25px'} sx={classes.circularProgress} />
                        ): 'Iniciar sesión'}
					</button>

					<div
						onClick={() => setPosition(1)}
						className='registerText'
					>
						Quiero sumarme a la comunidad
					</div>
				</div>
			</div>
		</motion.div>
	) : (
		false
	)
}
export default LoginForm
