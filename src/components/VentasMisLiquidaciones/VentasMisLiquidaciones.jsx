import { useContext, useEffect, useState } from 'react'
import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import { GlobalContext } from '../../context/GlobalStateContext'
import classes from '../../theme/Styles'
import ClientesFilter from '../ClientesFilter/ClientesFilter'
import Filters from '../Filters/Filters'
import './VentasMisLiquidaciones.css'
import { useNavigate } from 'react-router-dom'

const VentasMisLiquidaciones = () => {

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

    const handleFilter = evt => {
        const { name, value } = evt.target

        setFilter({
            ...filter,
            [name]: value,
            page: 1
        })
    }

    const filterByName = (array) => {
        return array.filter(el => el.client.toLowerCase().includes(filter.client.toLowerCase()))
    }

    const filterBySitutation = (array) => {
        return array.filter(el => el.situation.toLowerCase().includes(filter.situation.toLowerCase()))
    }

    useEffect(() => {
        let result = ventas.filter(el => el.status === 'En proceso')
        result = filterByName(result)
        result = filterBySitutation(result)
        setFilteredResult(result)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.client, filter.situation])

    return (
        <div className='ventasMisLiquidaciones'>
            <div>
                <ClientesFilter handleFilter={handleFilter} filterValue={filter} setFiltersDisplayed={setFiltersDisplayed} filtersDisplayed={filtersDisplayed} />

                <Filters displayed={filtersDisplayed} />

                <TableContainer
                // sx={{ maxHeight: '500px' }}
                >
                    <Table stickyHeader sx={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nº Venta</TableCell>
                                <TableCell>Prepaga</TableCell>
                                <TableCell>Plan</TableCell>
                                <TableCell>Cliente</TableCell>
                                <TableCell>Valor</TableCell>
                                <TableCell>Comisión</TableCell>
                                <TableCell>Fecha Lote</TableCell>
                                <TableCell>Fecha Liquidación</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredResult.slice((filter.page - 1) * filter.perPage, (filter.page - 1) * filter.perPage + filter.perPage).map((venta, i) => {
                                return (
                                    <TableRow key={`venta ${venta.id}`} sx={{ height: '120px !important' }}>
                                        <TableCell>{venta.id}</TableCell>
                                        <TableCell>{venta.prepaga}</TableCell>
                                        <TableCell>{venta.plan}</TableCell>
                                        <TableCell>
                                            {venta.client}
                                            <div className="flexTableCell">
                                                <GroupOutlinedIcon
                                                    sx={{
                                                        ...classes.menuIcon,
                                                        color: "var(--blink-main)",
                                                    }}
                                                />
                                                <p>{venta.capitas}</p>
                                            </div>
                                        </TableCell>
                                        <TableCell>${venta.value}</TableCell>
                                        <TableCell>
                                            <div className='commission'>
                                                <LocalAtmOutlinedIcon
                                                    sx={{
                                                        ...classes.menuIcon,
                                                        color: "var(--blink-main)",
                                                    }}/>
                                                ${venta.commission}
                                            </div>
                                        </TableCell>
                                        <TableCell>{venta.validityDate}</TableCell>
                                        <TableCell>{venta.validityDate}</TableCell>
                                        <TableCell>
                                            <VisibilityOutlinedIcon
                                                onClick={() => navigate(`/ventas/liquidacion/${venta.id}`)}
                                                sx={{
                                                    ...classes.menuIcon,
                                                    color: "var(--blink-main)",
                                                    cursor: 'pointer'
                                                }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div className='paginationContainer'>
                <p>{filteredResult.length} resultados</p>
                <Pagination
                    showFirstButton
                    showLastButton
                    sx={classes.pagination}
                    defaultValue={filter.page}
                    onChange={(e, pageNumber) => setFilter({
                        ...filter,
                        page: pageNumber
                    })}
                    count={Math.ceil(filteredResult.length / filter.perPage)}
                    shape="rounded" />
            </div>
        </div>
    )
}
export default VentasMisLiquidaciones