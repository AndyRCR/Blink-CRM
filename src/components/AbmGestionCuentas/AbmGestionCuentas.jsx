import React, { useState, useEffect, useContext } from 'react'
import ClientesFilter from '../ClientesFilter/ClientesFilter'
import { GlobalContext } from '../../context/GlobalStateContext'
import classes from '../../theme/Styles'
import './AbmGestionCuentas.css'

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import {
	Pagination,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import FiltersAbm from '../FiltersAbm/FiltersAbm'
import { useNavigate } from 'react-router-dom'
import { AbmGlobalContext } from '../../context/AbmContext'

const AbmGestionCuentas = ({ handleClientModal }) => {
	const { setAbmUser } = useContext(AbmGlobalContext)
	const { ventas } = useContext(GlobalContext)

	const navigate = useNavigate()

	const [filteredResult, setFilteredResult] = useState([])
	const [filtersDisplayed, setFiltersDisplayed] = useState(false)

	const [filter, setFilter] = useState({
		page: 1,
		perPage: 5,
		client: '',
		situation: '',
	})

	const handleFilter = (evt) => {
		const { name, value } = evt.target

		setFilter({
			...filter,
			[name]: value,
			page: 1,
		})
	}

	const filterByName = (array) => {
		return array.filter((el) =>
			el.client.toLowerCase().includes(filter.client.toLowerCase())
		)
	}

	const filterBySitutation = (array) => {
		return array.filter((el) =>
			el.situation.toLowerCase().includes(filter.situation.toLowerCase())
		)
	}

	useEffect(() => {
		let result = ventas
		result = filterByName(result)
		result = filterBySitutation(result)
		setFilteredResult(result)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter.client, filter.situation])

	const usersData = [
		{
			nro: 'B-111-1111-000001',
			name: 'Test',
			lastName: 'Test',
			role: 'Administrativo',
			department: 'Administrativo',
			level: '3',
			status: 'Activo',
			phone1: '111111111',
			phone2: '222222222',
			phone3: '333333333',
			email: 'test@gmail.com',
		},
	]
	return (
		<div className='abmGestionCuentas'>
			<div>
				<ClientesFilter
					handleFilter={handleFilter}
					filterValue={filter}
					setFiltersDisplayed={setFiltersDisplayed}
					filtersDisplayed={filtersDisplayed}
				/>
				<FiltersAbm displayed={filtersDisplayed} />
				<TableContainer>
					<Table stickyHeader sx={classes.table}>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell>Nº</TableCell>
								<TableCell>Nombre</TableCell>
								<TableCell>Categoria</TableCell>
								<TableCell>Perfil</TableCell>
								<TableCell>Nivel</TableCell>
								<TableCell>Estado</TableCell>
								<TableCell>DNI</TableCell>
								<TableCell>Celular 1</TableCell>
								<TableCell>Celular 2</TableCell>
								<TableCell>Correo</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{usersData.map((user, index) => (
								<TableRow
									sx={{ height: '120px !important' }}
									key={index}
								>
									<TableCell>
										<VisibilityOutlinedIcon
											onClick={() => {
												setAbmUser(user)
												handleClientModal()
											}}
											sx={{
												...classes.menuIcon,
												color: 'var(--blink-main)',
												cursor: 'pointer',
											}}
										/>
									</TableCell>
									<TableCell>{user.nro}</TableCell>
									<TableCell>
										{user.name} {user.lastName}
									</TableCell>
									<TableCell>{user.role}</TableCell>
									<TableCell>{user.department}</TableCell>
									<TableCell>{user.level}</TableCell>
									<TableCell>
										<div className='tableButton'>
											{user.status}
										</div>
									</TableCell>
									<TableCell>{user.phone1}</TableCell>
									<TableCell>{user.phone2}</TableCell>
									<TableCell>{user.phone3}</TableCell>
									<TableCell>{user.email}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className='paginationContainer'>
				<p>{usersData.length} resultados</p>
				<Pagination
					showFirstButton
					showLastButton
					sx={classes.pagination}
					defaultValue={filter.page}
					onChange={(e, pageNumber) =>
						setFilter({
							...filter,
							page: pageNumber,
						})
					}
					count={Math.ceil(usersData.length / filter.perPage)}
					shape='rounded'
				/>
			</div>
		</div>
	)
}

export default AbmGestionCuentas
