import React from 'react'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import {
	FormControl,
	FormControlLabel,
	MenuItem,
	Radio,
	RadioGroup,
	Select,
	OutlinedInput,
	Switch,
} from '@mui/material'
import classes from '../../theme/Styles'
import { useEffect, useState } from 'react'
import './AbmCuentasForm.css'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import { useContext } from 'react'
import { UserGlobalContext } from '../../context/UserContex'
import { AbmGlobalContext } from '../../context/AbmContext'

const AbmCuentasForm = () => {
	const navigate = useNavigate()
	const handleNavigation = (path) =>
		user.status === userStatuses['completo'] ? navigate(path) : false

	const { user, userStatuses } = useContext(UserGlobalContext)
	const { abmUser } = useContext(AbmGlobalContext)

	// const salir = () => {
	//     navigate('/')
	//     localStorage.removeItem('user')
	//     setUser(null)
	//     // setTimeout(() => {
	//     // }, 1000)
	// }

	return (
		abmUser && (
			<div className={user.status === userStatuses['nuevo']}>
				<div className='ClientesForm AbmCuentasForm'>
					<div className='formSection'>
						<h3>Resumen</h3>
						<div
							className='sliderHeaderContainer'
							style={{ marginTop: 0 }}
						>
							<div className='sliderHeader'>
								<div className='sliderHeaderIcon'>
									<PersonOutlinedIcon
										sx={{
											'&.MuiSvgIcon-root': {
												width: 'auto',
												height: '64px',
											},
										}}
									/>
								</div>
								<div className='sliderHeaderInfo'>
									<div className='sliderHeaderInfoMain'>
										{abmUser.name} {abmUser.lastName}
									</div>
									<div className='sliderHeaderInfoSecondary'>
										Nº de vendedor |{' '}
										<span> Nivel {abmUser.level}</span> :
										<FormControl
											sx={{
												'& .MuiSelect-outlined': {
													padding: '8px 16px',
												},
											}}
										>
											<Select
												defaultValue={'Titular'}
												sx={{
													...classes.input,
													color: 'var(--blink-main)',
													fontWeight: '700',
													'& .MuiSelect-outlined': {
														padding: '8px 16px',
													},
												}}
											>
												<MenuItem value={'Titular'}>
													Titular
												</MenuItem>
												<MenuItem value={'Otro 1'}>
													Otro 1
												</MenuItem>
												<MenuItem value={'Otro 2'}>
													Otro 2
												</MenuItem>
											</Select>
										</FormControl>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='formSection'>
						<h3 className='subtitle'>Datos Personales</h3>
						<div className='formGrid'>
							<div className='formItem email'>
								<label
									style={{
										'var(--blink-gray)':
											'var(--blink-main)',
									}}
								>
									Correo electrónico*
								</label>
								<div className='inputContainer'>
									<OutlinedInput
										type='email'
										name='email'
										disabled={undefined}
										value={abmUser.email}
										sx={classes.input}
									/>
								</div>
							</div>
							<div className='formItem'>
								<label
									style={{
										'var(--blink-gray)':
											'var(--blink-main)',
									}}
								>
									Celular
								</label>
								<div className='inputContainer telInput'>
									<OutlinedInput
										className='telReg'
										type='text'
										name='telReg'
										disabled={undefined}
										onChange={undefined}
										sx={classes.input}
									/>

									<OutlinedInput
										className='tel'
										type='number'
										name='tel'
										disabled={undefined}
										value={abmUser.phone1}
										sx={classes.input}
									/>
								</div>
							</div>
							<div className='formItem'>
								<label
									style={{
										'var(--blink-gray)':
											'var(--blink-main)',
									}}
								>
									Tipo y N° de documento
								</label>
								<div className='inputContainer telInput'>
									<FormControl sx={{ width: '100%' }}>
										<Select
											disabled={undefined}
											defaultValue={1}
											sx={classes.input}
										>
											<MenuItem value={1}>DNI</MenuItem>
											<MenuItem value={'CABA'}>
												CABA
											</MenuItem>
											<MenuItem value={'GBA Norte'}>
												GBA Norte
											</MenuItem>
											<MenuItem value={'GBA Sur'}>
												GBA Sur
											</MenuItem>
											<MenuItem value={'GBA Oeste'}>
												GBA Oeste
											</MenuItem>
										</Select>
									</FormControl>
									<OutlinedInput
										className='tel'
										type='number'
										name='tel'
										disabled={undefined}
										sx={classes.input}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='formSection'>
						<h3 className='subtitle'>Datos bancarios</h3>
						<div className='formGrid'>
							<div className='formItem'>
								<label
									style={{
										'var(--blink-gray)':
											'var(--blink-main)',
									}}
								>
									CUIL/CUIT
								</label>
								<div className='inputContainer'>
									<OutlinedInput
										type='text'
										name='text'
										disabled={undefined}
										sx={classes.input}
									/>
								</div>
							</div>
							<div className='formItem'>
								<label
									style={{
										'var(--blink-gray)':
											'var(--blink-main)',
									}}
								>
									Banco
								</label>
								<div className='inputContainer'>
									<OutlinedInput
										type='text'
										name='text'
										disabled={undefined}
										sx={classes.input}
									/>
								</div>
							</div>
							<div className='formItem'>
								<label
									style={{
										'var(--blink-gray)':
											'var(--blink-main)',
									}}
								>
									Alias
								</label>
								<div className='inputContainer'>
									<OutlinedInput
										type='text'
										name='text'
										disabled={undefined}
										sx={classes.input}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='formSection buttons'>
						<div className='flex'>
							<div
								onClick={() => handleNavigation('/cotizador')}
								className='redirectContainers'
							>
								<div style={{ width: '24px', height: '24px' }}>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_1022_9255)'>
											<path
												d='M23 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1L0 19C0.00158786 20.3256 0.528882 21.5964 1.46622 22.5338C2.40356 23.4711 3.67441 23.9984 5 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23C24 22.7348 23.8946 22.4804 23.7071 22.2929C23.5196 22.1054 23.2652 22 23 22Z'
												fill={
													window.location.pathname ===
													'/cotizador'
														? 'white'
														: '#5275DE'
												}
											/>
											<path
												d='M6 20C6.26521 20 6.51957 19.8946 6.7071 19.7071C6.89464 19.5196 7 19.2652 7 19V12C7 11.7348 6.89464 11.4804 6.7071 11.2929C6.51957 11.1054 6.26521 11 6 11C5.73478 11 5.48043 11.1054 5.29289 11.2929C5.10536 11.4804 5 11.7348 5 12V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20Z'
												fill={
													window.location.pathname ===
													'/cotizador'
														? 'white'
														: '#5275DE'
												}
											/>
											<path
												d='M10 10V19C10 19.2652 10.1054 19.5196 10.2929 19.7071C10.4804 19.8946 10.7348 20 11 20C11.2652 20 11.5196 19.8946 11.7071 19.7071C11.8947 19.5196 12 19.2652 12 19V10C12 9.73478 11.8947 9.48043 11.7071 9.29289C11.5196 9.10536 11.2652 9 11 9C10.7348 9 10.4804 9.10536 10.2929 9.29289C10.1054 9.48043 10 9.73478 10 10Z'
												fill={
													window.location.pathname ===
													'/cotizador'
														? 'white'
														: '#5275DE'
												}
											/>
											<path
												d='M15 13V19C15 19.2652 15.1054 19.5196 15.2929 19.7071C15.4804 19.8946 15.7348 20 16 20C16.2652 20 16.5196 19.8946 16.7071 19.7071C16.8947 19.5196 17 19.2652 17 19V13C17 12.7348 16.8947 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13Z'
												fill={
													window.location.pathname ===
													'/cotizador'
														? 'white'
														: '#5275DE'
												}
											/>
											<path
												d='M20 9V19C20 19.2652 20.1054 19.5196 20.2929 19.7071C20.4804 19.8946 20.7348 20 21 20C21.2652 20 21.5196 19.8946 21.7071 19.7071C21.8947 19.5196 22 19.2652 22 19V9C22 8.73478 21.8947 8.48043 21.7071 8.29289C21.5196 8.10536 21.2652 8 21 8C20.7348 8 20.4804 8.10536 20.2929 8.29289C20.1054 8.48043 20 8.73478 20 9Z'
												fill={
													window.location.pathname ===
													'/cotizador'
														? 'white'
														: '#5275DE'
												}
											/>
											<path
												d='M5.99979 8.99992C6.26498 8.99986 6.51929 8.89447 6.70679 8.70692L10.2928 5.12092C10.4834 4.93934 10.7365 4.83806 10.9998 4.83806C11.263 4.83806 11.5162 4.93934 11.7068 5.12092L13.8788 7.29292C14.4414 7.85533 15.2043 8.17128 15.9998 8.17128C16.7953 8.17128 17.5582 7.85533 18.1208 7.29292L23.7068 1.70692C23.8889 1.51832 23.9897 1.26571 23.9875 1.00352C23.9852 0.741321 23.88 0.490508 23.6946 0.3051C23.5092 0.119692 23.2584 0.0145233 22.9962 0.0122448C22.734 0.00996641 22.4814 0.110761 22.2928 0.292919L16.7068 5.87792C16.5193 6.06539 16.265 6.17071 15.9998 6.17071C15.7346 6.17071 15.4803 6.06539 15.2928 5.87792L13.1208 3.70692C12.5582 3.14451 11.7953 2.82856 10.9998 2.82856C10.2043 2.82856 9.44137 3.14451 8.87879 3.70692L5.29279 7.29292C5.15298 7.43277 5.05777 7.61093 5.0192 7.80489C4.98064 7.99884 5.00044 8.19987 5.07611 8.38257C5.15178 8.56527 5.27992 8.72144 5.44433 8.83132C5.60874 8.94121 5.80204 8.99988 5.99979 8.99992Z'
												fill={
													window.location.pathname ===
													'/cotizador'
														? 'white'
														: '#5275DE'
												}
											/>
										</g>
										<defs>
											<clipPath id='clip0_1022_9255'>
												<rect
													width='24'
													height='24'
													fill={
														window.location
															.pathname ===
														'/cotizador'
															? 'white'
															: '#5275DE'
													}
												/>
											</clipPath>
										</defs>
									</svg>
								</div>
								<p>Ir a Cotizador</p>
							</div>
						</div>
						<div className='flex'>
							<div
								onClick={() => handleNavigation('/ventas')}
								className='redirectContainers'
							>
								<div style={{ width: '24px', height: '24px' }}>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill={
											window.location.pathname.includes(
												'/ventas'
											)
												? 'white'
												: '#5275DE'
										}
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clipPath='url(#clip0_1022_9256)'>
											<path d='M21 6H5C4.141 6 3.328 5.628 2.765 5.001C3.315 4.387 4.114 4 5 4H23C23.553 4 24 3.552 24 3C24 2.448 23.553 2 23 2H5C2.239 2 0 4.239 0 7V17C0 19.761 2.239 22 5 22H21C22.657 22 24 20.657 24 19V9C24 7.343 22.657 6 21 6ZM22 19C22 19.551 21.552 20 21 20H5C3.346 20 2 18.654 2 17V6.998C2.854 7.637 3.904 8 5 8H21C21.552 8 22 8.449 22 9V19ZM20 14C20 14.552 19.552 15 19 15C18.448 15 18 14.552 18 14C18 13.448 18.448 13 19 13C19.552 13 20 13.448 20 14Z' />
										</g>
										<defs>
											<clipPath id='clip0_1022_9256'>
												<rect width='24' height='24' />
											</clipPath>
										</defs>
									</svg>
								</div>
								<p>Ir a Ventas</p>
							</div>
						</div>
						<div className='flex'>
							<div
								onClick={() => handleNavigation('/clientes')}
								className='redirectContainers'
							>
								<div style={{ width: '24px', height: '24px' }}>
									<svg
										width='22'
										height='24'
										viewBox='0 0 22 24'
										fill={
											window.location.pathname.includes(
												'/clientes'
											)
												? 'white'
												: '#5275DE'
										}
										xmlns='http://www.w3.org/2000/svg'
									>
										<path d='M17 0H7C6.02823 0.00127838 5.0779 0.285705 4.26521 0.818499C3.45252 1.35129 2.81271 2.10936 2.424 3H1C0.734784 3 0.48043 3.10536 0.292893 3.29289C0.105357 3.48043 0 3.73478 0 4C0 4.26522 0.105357 4.51957 0.292893 4.70711C0.48043 4.89464 0.734784 5 1 5H2V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H2V11H1C0.734784 11 0.48043 11.1054 0.292893 11.2929C0.105357 11.4804 0 11.7348 0 12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H2V15H1C0.734784 15 0.48043 15.1054 0.292893 15.2929C0.105357 15.4804 0 15.7348 0 16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H2V19H1C0.734784 19 0.48043 19.1054 0.292893 19.2929C0.105357 19.4804 0 19.7348 0 20C0 20.2652 0.105357 20.5196 0.292893 20.7071C0.48043 20.8946 0.734784 21 1 21H2.424C2.81271 21.8906 3.45252 22.6487 4.26521 23.1815C5.0779 23.7143 6.02823 23.9987 7 24H17C18.3256 23.9984 19.5964 23.4711 20.5338 22.5338C21.4711 21.5964 21.9984 20.3256 22 19V5C21.9984 3.67441 21.4711 2.40356 20.5338 1.46622C19.5964 0.528882 18.3256 0.00158786 17 0V0ZM20 19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V5C4 4.20435 4.31607 3.44129 4.87868 2.87868C5.44129 2.31607 6.20435 2 7 2H17C17.7956 2 18.5587 2.31607 19.1213 2.87868C19.6839 3.44129 20 4.20435 20 5V19ZM12 12C12.7956 12 13.5587 11.6839 14.1213 11.1213C14.6839 10.5587 15 9.79565 15 9C15 8.20435 14.6839 7.44129 14.1213 6.87868C13.5587 6.31607 12.7956 6 12 6C11.2044 6 10.4413 6.31607 9.87868 6.87868C9.31607 7.44129 9 8.20435 9 9C9 9.79565 9.31607 10.5587 9.87868 11.1213C10.4413 11.6839 11.2044 12 12 12ZM17 18C17 18.2652 16.8946 18.5196 16.7071 18.7071C16.5196 18.8946 16.2652 19 16 19C15.7348 19 15.4804 18.8946 15.2929 18.7071C15.1054 18.5196 15 18.2652 15 18C15 17.2044 14.6839 16.4413 14.1213 15.8787C13.5587 15.3161 12.7956 15 12 15C11.2044 15 10.4413 15.3161 9.87868 15.8787C9.31607 16.4413 9 17.2044 9 18C9 18.2652 8.89464 18.5196 8.70711 18.7071C8.51957 18.8946 8.26522 19 8 19C7.73478 19 7.48043 18.8946 7.29289 18.7071C7.10536 18.5196 7 18.2652 7 18C7.211 11.392 16.791 11.394 17 18Z' />
									</svg>
								</div>
								<p>Ir a Clientes</p>
							</div>
						</div>
					</div>

					<div className='modalButton'>
						<button className='secondaryButton'>
							Generar solicitud
						</button>
					</div>
				</div>
			</div>
		)
	)
}

export default AbmCuentasForm
