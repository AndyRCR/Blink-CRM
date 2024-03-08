import React, {useState, useEffect, useContext} from 'react'
import ClientesFilter from '../ClientesFilter/ClientesFilter'
import { GlobalContext } from '../../context/GlobalStateContext'
import './AbmGestionClaves.css'

const AbmGestionClaves = () => {

    const [filteredResult, setFilteredResult] = useState([])
    const [filtersDisplayed, setFiltersDisplayed] = useState(false)

    const { ventas } = useContext(GlobalContext)

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
    <div className='abmGestionClaves'>
        <div>
            <ClientesFilter handleFilter={handleFilter} filterValue={filter} setFiltersDisplayed={setFiltersDisplayed} filtersDisplayed={filtersDisplayed}/>
        </div>
    </div>
  )
}

export default AbmGestionClaves