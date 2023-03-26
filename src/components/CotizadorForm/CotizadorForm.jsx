import { FormControl, MenuItem, Select } from '@mui/material'
import { useContext, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import Swal from 'sweetalert2'
import classes from '../../theme/Styles'
import Switch from '../Switch/Switch'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { GlobalContext } from '../../context/GlobalStateContext'
import './CotizadorForm.css'

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameRegex = /^[a-zA-Z\s]*$/

const CotizadorForm = ({setState, setResults}) => {

    const {dataQuery, setDataQuery} = useContext(GlobalContext)

    const [switchState, setSwitchState] = useState({
        childrens: false,
        partner: false
    })

    const [validName, setValidName] = useState(true)
    const [validPhone, setValidPhone] = useState(true)
    const [validEmail, setValidEmail] = useState(true)
    const [validAge, setValidAge] = useState(true)

    const [validPartnerAge, setValidPartnerAge] = useState(true)
    const [validChildrens, setValidChildrens] = useState(true)

    const [captchaState, setCaptchaState] = useState(-1)
    const [captchaValue, setCaptchaValue] = useState(null)

    const verifyFields = () => {
        if (
        dataQuery.name !== '' &&
        dataQuery.phone !== '' &&
        dataQuery.email !== '' &&
        dataQuery.age !== '' &&
        (!switchState.partner || dataQuery.partnerAge !== '') &&
        (!switchState.childrens || dataQuery.childrens !== '') &&
        // eslint-disable-next-line
        captchaState == 1
        ) {
        if (validName &&
            validPhone &&
            validEmail &&
            validAge &&
            (!switchState.partner || validPartnerAge) &&
            (!switchState.childrens || validChildrens)) {
            setState(2)
        }
        else {
            Swal.fire(
            'Formato incorrecto',
            'Revise los campos e intente nuevamente',
            'info'
            )
        }
        }
        else {
        setValidName(dataQuery.name !== '' && validName)
        setValidPhone(dataQuery.phone !== '' && validPhone)
        setValidEmail(dataQuery.email !== '' && validEmail)
        setValidAge(dataQuery.age !== '' && validAge)
        setValidPartnerAge(switchState.partner ? dataQuery.partnerAge !== '' : true)
        setValidChildrens(switchState.childrens ? dataQuery.childrens !== '' : true)
        setCaptchaState(captchaValue !== null)
        Swal.fire(
            'Intente nuevamente',
            'Todos los campos son obligatorios',
            'info'
        )
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === 'phone') {
        // let auxPhone = value.match(/(\d+)/g)?.join('')
        setValidPhone(true)
        // setValidPhone(phoneRegex.test(auxPhone) && !/[a-zA-Z]/g.test(value))
        } else if (name === 'email') {
        setValidEmail(emailRegex.test(value.toLowerCase()))
        } else if (name === 'name') {
        setValidName(nameRegex.test(value) && value.match(nameRegex)?.join('').length > 1)
        } else if (name === 'age') {
        setValidAge(
            value < 100 &&
            value > 0 &&
            value - parseInt(value) === 0 &&
            !/[a-zA-Z]/g.test(value) &&
            value.indexOf('.') === -1
        )
        } else if (name === 'partnerAge') {
        setValidPartnerAge(
            value < 100 &&
            value > 0 &&
            value - parseInt(value) === 0 &&
            !/[a-zA-Z]/g.test(value) &&
            value.indexOf('.') === -1
        )
        } else if (name === 'childrens') {
        setValidChildrens(
            value < 7 &&
            value >= 0 &&
            value - parseInt(value) === 0 &&
            !/[a-zA-Z]/g.test(value) &&
            value.indexOf('.') === -1
        )
        }

        setDataQuery({
        ...dataQuery,
        [name]: value
        })
    }


	return (
		<div className='cotizadorForm'>
			<div className='form'>
				<div className='subForm'>
					<div
						className={
							validName ? 'formItem' : 'formItem errorInput'
						}
					>
						<p>Nombre completo</p>
						<input
							placeholder='Nombres y apellidos'
							value={dataQuery.name}
							name='name'
							onChange={handleInputChange}
							type='text'
						/>
						<p
							className={
								validName ? 'errorLabel' : 'errorLabel visible'
							}
						>
							{dataQuery.name === ''
								? 'Campo obligatorio'
								: 'Nombre no válido'}
						</p>
					</div>
					<div
						className={
							validAge ? 'formItem' : 'formItem errorInput'
						}
					>
						<p>Edad</p>
						<input
							placeholder='Edad'
							value={dataQuery.age}
							name='age'
							onChange={handleInputChange}
							type='number'
						/>
						<p
							className={
								validAge ? 'errorLabel' : 'errorLabel visible'
							}
						>
							{dataQuery.age === ''
								? 'Campo obligatorio'
								: 'Edad no válida'}
						</p>
					</div>
					<div
						className={
							validEmail ? 'formItem' : 'formItem errorInput'
						}
					>
						<p>Correo electrónico</p>
						<input
							placeholder='Correo de contacto'
							value={dataQuery.email}
							name='email'
							onChange={handleInputChange}
							type='email'
						/>
						<p
							className={
								validEmail ? 'errorLabel' : 'errorLabel visible'
							}
						>
							{dataQuery.email === ''
								? 'Campo obligatorio'
								: 'Correo no válido'}
						</p>
					</div>
					<div
						className={
							validPhone ? 'formItem' : 'formItem errorInput'
						}
					>
						<p>Celular</p>
						<input
							placeholder='Número de contacto'
							value={dataQuery.phone}
							name='phone'
							onChange={handleInputChange}
							type='text'
						/>
						<p
							className={
								validPhone ? 'errorLabel' : 'errorLabel visible'
							}
						>
							{dataQuery.phone === ''
								? 'Campo obligatorio'
								: 'Número no válido'}
						</p>
					</div>
					<div className='formItem'>
						<p>Zona</p>
						<FormControl sx={{ width: '100%' }}>
							<Select
								name='zone'
								value={dataQuery.zone}
								onChange={handleInputChange}
								sx={classes.input}
								IconComponent={KeyboardArrowDownOutlinedIcon}
							>
								<MenuItem value='CABA'>CABA</MenuItem>
								<MenuItem value='GBA Norte'>GBA Norte</MenuItem>
								<MenuItem value='GBA Sur'>GBA Sur</MenuItem>
								<MenuItem value='GBA Oeste'>GBA Oeste</MenuItem>
							</Select>
						</FormControl>
						<p className='errorLabel'>Campo obligatorio</p>
					</div>
					<div className='formItem'>
						<p>Situación laboral</p>
						<FormControl sx={{ width: '100%' }}>
							<Select
								name='situation'
								value={dataQuery.situation}
								onChange={handleInputChange}
								sx={classes.input}
								IconComponent={KeyboardArrowDownOutlinedIcon}
							>
								<MenuItem value='Monotributista'>
									Monotributista
								</MenuItem>
								<MenuItem value='Relación en dependencia'>
									Relación en dependencia
								</MenuItem>
								<MenuItem value='Particular'>
									Particular
								</MenuItem>
							</Select>
						</FormControl>
						<p className='errorLabel'>Campo obligatorio</p>
					</div>
				</div>
				<div className='divisor'></div>
				<div className='subForm'>
					<div className='formItem switchItem'>
						<p>Quiero incluir a mi pareja</p>
						<Switch
							setState={setSwitchState}
							state={switchState}
							name='partner'
						/>
					</div>
					<div
						className={
							switchState.partner
								? validPartnerAge
									? 'formItem'
									: 'formItem errorInput'
								: 'formItem disabled'
						}
					>
						<p>Edad de la pareja</p>
						<input
							disabled={!switchState.partner}
							placeholder='Edad de la pareja'
							value={dataQuery.partnerAge}
							name='partnerAge'
							onChange={handleInputChange}
							type='number'
						/>
						<p
							className={
								validPartnerAge
									? 'errorLabel'
									: 'errorLabel visible'
							}
						>
							{dataQuery.partnerAge === ''
								? 'Campo obligatorio'
								: 'Edad no válida'}
						</p>
					</div>
					<div className='formItem switchItem'>
						<p>Quiero incluir a mis hijos/as</p>
						<Switch
							setState={setSwitchState}
							state={switchState}
							name='childrens'
						/>
					</div>
					<div
						className={
							switchState.childrens
								? validChildrens
									? 'formItem'
									: 'formItem errorInput'
								: 'formItem disabled'
						}
					>
						<p>Cantidad de hijos/as</p>
						<input
							disabled={!switchState.childrens}
							placeholder='Cantidad de hijo/as'
							value={dataQuery.childrens}
							name='childrens'
							onChange={handleInputChange}
							type='number'
						/>
						<p
							className={
								validChildrens
									? 'errorLabel'
									: 'errorLabel visible'
							}
						>
							{dataQuery.childrens === ''
								? 'Campo obligatorio'
								: 'Cantidad no válida'}
						</p>
					</div>
					<div
						className='formItem formCaptcha'
						style={{ textAlign: 'center' }}
					>
						<ReCAPTCHA
							style={{ display: 'inline-block' }}
							sitekey='6LfglikiAAAAACVegYIj0KN7-RCPvY4WgZXF9iaz'
							onChange={(e) => {
								setCaptchaValue(e)
								setCaptchaState(e === null ? 0 : 1)
							}}
						/>
						<p
							className={
								captchaState
									? 'errorLabel'
									: 'errorLabel visible'
							}
						>
							Se necesita verificación
						</p>
					</div>
					<div className='formItem formButton'>
						<button
							className='primaryButton sendButton'
							onClick={verifyFields}
						>
							Comparar
							{/* {isLoading ? (
                <CircularProgress style={{ color: '#4E29C8', width: '25px', height: '25px' }} />
              ) : (
                <>Comparar</>
              )} */}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CotizadorForm
