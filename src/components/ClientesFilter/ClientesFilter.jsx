import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import IosShareIcon from '@mui/icons-material/IosShare'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined'
import classes from '../../theme/Styles'
import './ClientesFilter.css'

const ClientesFilter = ({ handleFilter, filterValue, setFiltersDisplayed, filtersDisplayed }) => {
    return (
        <div className='clientesFilter'>
            <div className="filterItem">
                <FormControl>
                    <Select
                        name='perPage'
                        value={filterValue.perPage}
                        onChange={handleFilter}
                        sx={{
                            ...classes.input,
                            width: 'fit-content'
                        }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                    </Select>
                </FormControl>
                <p>Clientes por página</p>
            </div>
            <div className="filterItem">
                <FormControl sx={{ width: '330px' }}>
                    <OutlinedInput
                        placeholder='Buscar'
                        name='client'
                        value={filterValue.client}
                        onChange={handleFilter}
                        sx={classes.searchBar}
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>

            {window.location.pathname === '/clientes' ? (
                <div className="filterItem">
                    <FormControl sx={{ width: '330px' }}>
                        <InputLabel id="situationLabel">Estado del cliente</InputLabel>
                        <Select
                            labelId='situationLabel'
                            label='Estado del cliente'
                            name='situation'
                            value={filterValue.situation}
                            onChange={handleFilter}
                            sx={classes.input}
                        >
                            <MenuItem value={''}>Todos</MenuItem>
                            <MenuItem value={'Monotributista'}>Monotributista</MenuItem>
                            <MenuItem value={'Particular'}>Particular</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            ) : false}

            <div className="filterItem">
                <button className='buttonVariant' style={{ maxWidth: '168px' }}>
                    <IosShareIcon />
                    Exportar
                </button>
            </div>

            {window.location.pathname === '/cotizador' || window.location.pathname === '/ventas' ? (
                <div className="filterItem">
                    <button onClick={() => setFiltersDisplayed(!filtersDisplayed)} className='buttonVariant' style={{ maxWidth: '168px' }}>
                        <TuneOutlinedIcon />
                        Filtros
                    </button>
                </div>
            ) : false}
        </div>
    )
}
export default ClientesFilter