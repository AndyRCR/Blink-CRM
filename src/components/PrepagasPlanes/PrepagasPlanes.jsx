import { Accordion, AccordionDetails, AccordionSummary, FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import SearchIcon from '@mui/icons-material/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useEffect, useState } from 'react'
import classes from '../../theme/Styles'
import './PrepagasPlanes.css'

const PrepagasPlanes = ({setPosition,selectedClinic}) => {

  const [search, setSearch] = useState('')

  const handleScroll = (e) => {
    if(e !== undefined){
      const height = e.target.scrollTop

      document.querySelector('.prepagasPlanes .secondaryButton').style.top = `${window.innerHeight - 341 + height}px`
    }
  }

  useEffect(() => {
    document.querySelector('.prepagasPlanes .secondaryButton').style.top = `${window.innerHeight - 341}px`
  
    document.querySelector('.prepagas').addEventListener('scroll', handleScroll)

    return () => document.querySelector('.prepagas')?.removeEventListener('scroll', handleScroll)
  }, [])
  

  return (
    <div className="prepagasPlanes">
      <div className='inputContainer'>
        <FormControl sx={{ width: '100%' }}>
          <OutlinedInput
            placeholder='Buscar'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={classes.searchBar}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div
      className="secondaryButton"
      onClick={() => {
        document.querySelector('.prepagas').scrollTo({top: 0, behavior: 'smooth'})
        setPosition(0)
      }}>
        <ReplyOutlinedIcon/>
        Volver
      </div>

      <div className="plansContainer">
        <h2>{selectedClinic.clinic}</h2>
        {selectedClinic.prepagas.map((prepaga,i) => {
          return (
            <div className="accordionContainer" key={`prepaga${i+1}`}>
              <Accordion sx={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                  <img src={prepaga.logo} alt="logo" />
                </AccordionSummary>
                {prepaga.plans.map( (plan, i) => {
                  return (
                    <AccordionDetails key={`plan${i+1}`}>
                      <div className='documentItem'>
                        <p>{plan}</p>
                      </div>
                    </AccordionDetails>
                  )
                })}
              </Accordion>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default PrepagasPlanes