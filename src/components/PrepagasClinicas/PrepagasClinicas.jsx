import { FormControl, InputAdornment, OutlinedInput, Pagination } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import classes from '../../theme/Styles'
import { useState } from 'react'
import './PrepagasClinicas.css'

const PrepagasClinicas = ({ setSelectedClinic, setPosition }) => {

  const { clinics } = useContext(GlobalContext)

  const [filteredResult, setFilteredResult] = useState([])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filterByClinic = (array) =>{
    return array.filter(el => el.clinic.toLowerCase().includes(search.toLowerCase()))
  }

  const handleSelectedClinic = (clinic) => {
    document.querySelector('.prepagas').scrollTo({top: 0, behavior: 'smooth'})
    setSelectedClinic(clinic)
    setPosition(1)
  }

  useEffect(() => {
    let result = clinics
    result = filterByClinic(result)
    setFilteredResult(result)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])
  

  return (
    <div className="prepagasClinicas">
      <div className='inputContainer'>
        <FormControl sx={{ width: '100%' }}>
          <OutlinedInput
            placeholder='Buscar'
            name='search'
            value={search}
            onChange={(e) => {
              setPage(1)
              setSearch(e.target.value)
            }}
            sx={classes.searchBar}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <p className="resultsLabel">{filteredResult.length} resultados</p>

      <div className="clinicsContainer">
        <h2>Clínicas y Sanatorios</h2>

        <div className="clinicsList">
          {filteredResult.slice((page-1)*10, (page-1)*10+10).map((clinic, i) => {
            return (
              <div className="clinic" key={`clinic${i+1}`}>
                <p>{clinic.clinic}</p>
                <div className="clinicIcon">
                  <VisibilityOutlinedIcon
                  onClick={() => handleSelectedClinic(clinic)}
                  sx={{
                    width: 'auto',
                    height: '24px',
                    cursor: 'pointer'
                  }}/>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="paginationContainer">
        <Pagination
          showFirstButton
          showLastButton
          sx={classes.pagination}
          defaultValue={page}
          onChange={(e,pageNumber) => setPage(pageNumber)}
          count={Math.ceil(filteredResult.length/10)}
          shape="rounded" />
        {/* <p style={{visibility: 'hidden'}}>{filteredResult.length} resultados</p> */}
      </div>
    </div>
  )
}
export default PrepagasClinicas