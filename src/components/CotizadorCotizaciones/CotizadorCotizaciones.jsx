import { useContext, useEffect, useState } from "react"
import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined'
import { GlobalContext } from "../../context/GlobalStateContext"
import classes from "../../theme/Styles"
import ClientesFilter from "../ClientesFilter/ClientesFilter"
import './CotizadorCotizaciones.css'

const CotizadorCotizaciones = ({ setClient, setOpen, setOpen2 }) => {

  const { clients } = useContext(GlobalContext)

  const [filteredResult, setFilteredResult] = useState([])

  const [filter, setFilter] = useState({
    page: 1,
    perPage: 5,
    client: ''
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

  useEffect(() => {
    let result = clients
    result = filterByName(result)
    setFilteredResult(result)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.client])

  return (
    <div className="cotizadorCotizaciones">
      <div>
        <ClientesFilter handleFilter={handleFilter} filterValue={filter} />

        <TableContainer
        // sx={{ maxHeight: '500px' }}
        >
          <Table stickyHeader sx={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Nº Cliente</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Prepaga</TableCell>
                <TableCell>Plan</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Cápitas</TableCell>
                <TableCell>Situación laboral</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredResult.slice((filter.page - 1) * filter.perPage, (filter.page - 1) * filter.perPage + filter.perPage).map((client, i) => {
                return (
                  <TableRow key={`client ${client.id}`} sx={{ height: '120px !important' }}>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>{client.date}</TableCell>
                    <TableCell>{client.prepaga}</TableCell>
                    <TableCell>{client.plan}</TableCell>
                    <TableCell>{client.client}</TableCell>
                    <TableCell>
                      <div className="flexTableCell">
                        <GroupOutlinedIcon
                          sx={{
                            ...classes.menuIcon,
                            color: "var(--blink-main)",
                          }}
                        />
                        <p>{client.capitas}</p>
                      </div>
                    </TableCell>
                    <TableCell>{client.situation}</TableCell>
                    <TableCell>
                      <button className="secondaryButton">Generar solicitud</button>
                    </TableCell>
                    <TableCell>
                      <div className="optionIcons">
                        <VisibilityOutlinedIcon
                          onClick={() => {
                            setClient(client)
                            setOpen(true)
                          }}
                          sx={{
                            ...classes.menuIcon,
                            color: "var(--blink-main)",
                            cursor: 'pointer'
                          }}
                        />

                        <CalendarMonthOutlinedIcon
                          onClick={() => {
                            setClient(client)
                            setOpen2(true)
                          }}
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
export default CotizadorCotizaciones