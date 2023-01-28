import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { Checkbox, FormControlLabel, FormGroup, ListItemText, MenuItem, Select } from '@mui/material'
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import classes from '../../theme/Styles';
import './CotizadorFilters.css'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
}

const CotizadorFilters = () => {

    const {
        obtainResults,
        filtersDisplayed, setFiltersDisplayed,
        results, resultClinics,
        clinicsFiltereds, setClinicsFiltereds,
        orderBy, setOrderBy,
        benefitsFiltereds, setBenefitsFiltereds,
        providersFiltereds, setProvidersFiltered,
        minBudget, setMinBudget,
        maxBudget, setMaxBudget,
        setFilteredResults, setPosition } = useContext(GlobalContext)

    const handleChange = (e) => {
        const { value } = e.target
        setClinicsFiltereds(typeof value === 'string' ? value.split(',') : value)
    }

    const handleBenefits = (e, benefit) => {
        if (e.target.checked) {
            setBenefitsFiltereds([...benefitsFiltereds, benefit])
        } else {
            setBenefitsFiltereds(benefitsFiltereds.filter(b => b !== benefit))
        }
    }

    const handleProviders = (e, provider) => {
        if (e.target.checked) {
            setProvidersFiltered([...providersFiltereds, provider])
        } else {
            setProvidersFiltered(providersFiltereds.filter(p => p !== provider))
        }
    }

    const remapPositions = (array) => {
        return array.map((el, index) => {
            return {
                ...el,
                pos: index
            }
        })
    }

    const filterClinics = array => {
        if (clinicsFiltereds.length > 0) {
            // eslint-disable-next-line
            return array.filter(res => {
                for (let clinic of clinicsFiltereds) {
                    if (res.clinics.includes(clinic)) {
                        return true
                    }
                    return false
                }
            })
        }

        return array
    }

    const filterMinPrices = array => {
        if (minBudget !== '') {
            return array.filter(res => minBudget <= parseFloat(res.price))
        } else {
            return array
        }
    }

    const filterMaxPrices = array => {
        if (maxBudget !== '') {
            return array.filter(res => parseFloat(res.price) <= maxBudget)
        } else {
            return array
        }
    }

    const filterOrder = (array) => {
        if (orderBy !== 'default') {
            return array.sort((a, b) => orderBy === 'min' ? parseFloat(a.price) - parseFloat(b.price) : parseFloat(b.price) - parseFloat(a.price))
        } else {
            return array
        }
    }

    const filterProviders = (array) => {
        if (providersFiltereds.length > 0) {
            return array.filter(res => providersFiltereds.includes(res.nameprovider.toLowerCase()))
        } else {
            return array
        }
    }

    const filterBenefits = (array) => {
        if (benefitsFiltereds.length > 0) {
            return array.filter(res => {
                let boolArr = []
                for (let key of benefitsFiltereds) {
                    if (typeof res[key] === 'string' && res[key]?.toLowerCase() !== 'no') {
                        boolArr.push(true)
                    } else boolArr.push(false)
                }
                return !boolArr.includes(false)
            })
        } else {
            return array
        }
    }

    const handleFilters = () => {
        setPosition(0)
        let result = results
        result = filterBenefits(result)
        result = filterProviders(result)
        result = filterClinics(result)
        result = filterMinPrices(result)
        result = filterMaxPrices(result)
        result = filterOrder(result)
        setFilteredResults(remapPositions(result))
    }

    const cleanFilters = () => {
        setProvidersFiltered([])
        setBenefitsFiltereds([])
        setClinicsFiltereds([])
        setOrderBy("default")
        setMinBudget('')
        setMaxBudget('')
    }

    useEffect(() => {
        if (results !== null) setFilteredResults(results)
        else obtainResults()
        // eslint-disable-next-line
    }, [results])

    return (
        <div className='cotizadorFilters'>
            <div className="filter">
                <div className="filterItem">
                    <p>Clínicas y sanatorios</p>
                    <Select
                        multiple
                        value={clinicsFiltereds}
                        onChange={handleChange}
                        renderValue={(selected) => selected.join(', ')}
                        // className={`customSelect`}
                        sx={classes.input}
                        MenuProps={MenuProps}
                    >
                        {resultClinics !== null && (
                            resultClinics.map((clinic, index) => {
                                return (
                                    <MenuItem value={clinic} key={`clinicCheckbox${index + 1}`}>
                                        <Checkbox checked={clinicsFiltereds.indexOf(clinic) > -1} />
                                        <ListItemText primary={clinic} />
                                    </MenuItem>
                                )
                            })
                        )}
                    </Select>
                </div>
                <div className="filterItem">
                    <p>Ordenar por</p>
                    <Select
                        value={orderBy}
                        onChange={(e) => setOrderBy(e.target.value)}
                        // className={`customSelect`}
                        sx={classes.input}
                        name='orderBy'>
                        <MenuItem value="default">Más relevantes</MenuItem>
                        <MenuItem value="min">Menor precio</MenuItem>
                        <MenuItem value="max">Mayor precio</MenuItem>
                    </Select>
                </div>
            </div>
            <div className="filter">
                <div className="filterItem">
                    <p>Beneficios</p>
                    <FormGroup
                    // className={classes.root}
                    >
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('copay') > -1}
                                onChange={(e) => handleBenefits(e, 'copay')} />}
                            label='Copagos' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('refund') > -1}
                                onChange={(e) => handleBenefits(e, 'refund')} />}
                            label='Reintegros' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('orthodontics') > -1}
                                onChange={(e) => handleBenefits(e, 'orthodontics')} />}
                            label='Ortodoncia' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('odontology') > -1}
                                onChange={(e) => handleBenefits(e, 'odontology')} />}
                            label='Odontología' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('internation') > -1}
                                onChange={(e) => handleBenefits(e, 'internation')} />}
                            label='Internación' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('doctorathome') > -1}
                                onChange={(e) => handleBenefits(e, 'doctorathome')} />}
                            label='Médico a domicilio' />
                        <FormControlLabel
                            control={<Checkbox
                                checked={benefitsFiltereds.indexOf('medicalguide') > -1}
                                onChange={(e) => handleBenefits(e, 'medicalguide')} />}
                            label='Guía médica' />
                    </FormGroup>
                </div>
            </div>
            <div className="filter">
                <div className="filterItem">
                    <p>Prepagas</p>
                    <FormGroup className={classes.root}>
                        {/* <FormControlLabel
                            control={<Checkbox />}
                            label='Todas' /> */}
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('doctored') > -1}
                                onChange={(e) => handleProviders(e, 'doctored')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-doctored.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('galeno') > -1}
                                onChange={(e) => handleProviders(e, 'galeno')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-galeno.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('omint') > -1}
                                onChange={(e) => handleProviders(e, 'omint')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-omint.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('premedic') > -1}
                                onChange={(e) => handleProviders(e, 'premedic')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-premedic.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('sarcor') > -1}
                                onChange={(e) => handleProviders(e, 'sarcor')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-sarcor.png' alt='' />} />
                        <FormControlLabel
                            control={<Checkbox
                                checked={providersFiltereds.indexOf('prevencionsalud') > -1}
                                onChange={(e) => handleProviders(e, 'prevencionsalud')} />}
                            label={<img src='https://blinkimages.s3.amazonaws.com/os/logo-ps.png' alt='' />} />
                    </FormGroup>
                </div>
            </div>
            <div className="filter last">
                <div className='filterItem'>
                    <p>Presupuesto</p>
                    <div className='filterPrice'>
                        <input
                            placeholder='Desde'
                            name='min'
                            type="number"
                            value={minBudget}
                            onChange={(e) => setMinBudget(e.target.value)}
                            min={1} />
                        <div className='divisor'>-</div>
                        <input
                            placeholder='Hasta'
                            name='max'
                            type="number"
                            value={maxBudget}
                            onChange={(e) => setMaxBudget(e.target.value)}
                            min={1} />
                    </div>
                </div>
                <div className='filterItem' style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <button
                        className='primaryButton sendButton'
                        onClick={cleanFilters}>
                        Limpiar filtros
                    </button>
                    <button
                        className='primaryButton sendButton'
                        onClick={handleFilters}>
                        Aplicar
                    </button>
                </div>
            </div>
            <div className='showFilter'>
                <p onClick={() => setFiltersDisplayed(!filtersDisplayed)}>
                    {filtersDisplayed ? 'Ocultar filtros' : 'Mostrar filtros'}
                </p>
                {filtersDisplayed ? (
                    <ExpandLessRoundedIcon
                    onClick={() => setFiltersDisplayed(!filtersDisplayed)}
                    className={filtersDisplayed ? 'showFilterIcon pressed' : 'showFilterIcon'}/>
                ) : (
                    <ExpandMoreRoundedIcon
                    onClick={() => setFiltersDisplayed(!filtersDisplayed)}
                    className={filtersDisplayed ? 'showFilterIcon pressed' : 'showFilterIcon'}/>
                )}
            </div>
        </div>
    )
}
export default CotizadorFilters