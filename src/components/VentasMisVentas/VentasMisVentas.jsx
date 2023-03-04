import { useContext, useEffect, useState } from 'react'
import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined'
import { GlobalContext } from '../../context/GlobalStateContext'
import classes from '../../theme/Styles'
import ClientesFilter from '../ClientesFilter/ClientesFilter'
import Filters from '../Filters/Filters'
import './VentasMisVentas.css'
import { useNavigate } from 'react-router-dom'

const VentasMisVentas = () => {

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
        let result = ventas
        result = filterByName(result)
        result = filterBySitutation(result)
        setFilteredResult(result)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter.client, filter.situation])

    return (
        <div className='ventasMisVentas'>
            <div>
                <ClientesFilter handleFilter={handleFilter} filterValue={filter} setFiltersDisplayed={setFiltersDisplayed} filtersDisplayed={filtersDisplayed}/>

                <Filters displayed={filtersDisplayed}/>

                <TableContainer
                // sx={{ maxHeight: '500px' }}
                >
                    <Table stickyHeader sx={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nº Venta</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Prepaga</TableCell>
                                <TableCell>Plan</TableCell>
                                <TableCell>Cliente</TableCell>
                                <TableCell>Situación laboral</TableCell>
                                <TableCell>Cuota neta</TableCell>
                                <TableCell>Fecha vigencia</TableCell>
                                <TableCell>Lote</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredResult.slice((filter.page - 1) * filter.perPage, (filter.page - 1) * filter.perPage + filter.perPage).map((venta, i) => {
                                return (
                                    <TableRow key={`venta ${venta.id}`} sx={{ height: '120px !important' }}>
                                        <TableCell>{venta.id}</TableCell>
                                        <TableCell>
                                            <div className={`status ${venta.status.replace(' ', '').toLowerCase()}`}>
                                                {venta.status}
                                            </div>
                                        </TableCell>
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
                                        <TableCell>{venta.situation}</TableCell>
                                        <TableCell>${venta.quote}</TableCell>
                                        <TableCell>{venta.validityDate}</TableCell>
                                        <TableCell>{venta.lote}</TableCell>
                                        <TableCell>
                                            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                                                <VisibilityOutlinedIcon
                                                    onClick={() => {
                                                        // navigate(venta.status === 'Ingresada' || venta.status === 'Observada' ? `/ventas/liquidacion/${venta.id}` : `/ventas/venta/${venta.id}`)
                                                        navigate(`/ventas/liquidacion/${venta.id}`)
                                                    }}
                                                    sx={{
                                                        ...classes.menuIcon,
                                                        color: "var(--blink-main)",
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                                <ChatOutlinedIcon
                                                    sx={{
                                                        ...classes.menuIcon,
                                                        color: "var(--blink-main)",
                                                        cursor: 'pointer'
                                                    }}
                                                />
                                            </div>
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
export default VentasMisVentas