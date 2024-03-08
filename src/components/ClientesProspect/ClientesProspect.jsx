import { Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import classes from '../../theme/Styles'
import ClientesFilter from '../ClientesFilter/ClientesFilter'
import './ClientesProspect.css'

const ClientesProspect = ({handleClientModal}) => {

  const {clients} = useContext(GlobalContext)

  const [filteredResult, setFilteredResult] = useState([])

  const [filter, setFilter] = useState({
    page: 1,
    perPage: 5,
    client: '',
    situation: '',
  })

  const handleFilter = evt => {
    const {name, value} = evt.target

    setFilter({
      ...filter,
      [name]: value,
      page: 1
    })
  }

  const filterByName = (array) => {
    return array.filter( el => el.client.toLowerCase().includes(filter.client.toLowerCase()))
  }

  const filterBySitutation = (array) => {
    return array.filter( el => el.situation.toLowerCase().includes(filter.situation.toLowerCase()))
  }

  useEffect(() => {
    let result = clients
    result = filterByName(result)
    result = filterBySitutation(result)
    setFilteredResult(result)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.client, filter.situation])

 

  return (
    <div className="clientesProspect">
      <div>
        <ClientesFilter handleFilter = {handleFilter} filterValue = {filter}/>

        <TableContainer
        // sx={{maxHeight: '500px'}}
        >
          <Table stickyHeader sx={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Nº Cliente</TableCell>
                <TableCell>Cotizado por</TableCell>
                <TableCell>Cliente</TableCell>
                <TableCell>Cápitas</TableCell>
                <TableCell>Prepaga</TableCell>
                <TableCell>Plan</TableCell>
                <TableCell>Situación laboral</TableCell>
                <TableCell>Fecha Vigencia</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredResult.slice((filter.page-1)*filter.perPage, (filter.page-1)*filter.perPage+filter.perPage).map((client,i) => {
                return (
                  <TableRow key={`client ${client.id}`} sx={{height: '120px !important'}}>
                    <TableCell>{client.id}</TableCell>
                    <TableCell>
                      <div className={`cotizedBy ${client.cotizedBy.replace(' ','').toLowerCase()}`}>
                        {client.cotizedBy}
                      </div>
                    </TableCell>
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
                    <TableCell>{client.prepaga}</TableCell>
                    <TableCell>{client.plan}</TableCell>
                    <TableCell>{client.situation}</TableCell>
                    <TableCell>{client.date}</TableCell>
                    <TableCell>
                      <VisibilityOutlinedIcon
                        onClick={() => handleClientModal(client)}//
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
          onChange={(e,pageNumber) => setFilter({
            ...filter,
            page: pageNumber
          })}
          count={Math.ceil(filteredResult.length/filter.perPage)}
          shape="rounded" />
      </div>
    </div>
  )
}
export default ClientesProspect