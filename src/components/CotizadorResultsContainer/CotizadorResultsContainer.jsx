import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import CotizadorFilters from '../CotizadorFilters/CotizadorFilters'
import CotizadorResultsCarousel from '../CotizadorResultsCarousel/CotizadorResultsCarousel'
import './CotizadorResultsContainer.css'

const CotizadorResultsContainer = () => {

    const {filtersDisplayed, filteredResults} = useContext(GlobalContext)

    const [resize, setResize] = useState(window.innerWidth < 900)

    const handleResize = () => setResize(window.innerWidth < 900)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    
        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [resize])

    return (
        <div className="cotizadorResultsContainer">
            <div className={filtersDisplayed ? 'resultsContainer displayed' : 'resultsContainer'}>
                <CotizadorFilters />
                <div className='carouselContainer' style={{ overflowX: resize ? 'scroll' : 'hidden' }}>
                    {filteredResults !== null ? (
                        <h3><span>{filteredResults.length}</span> resultados encontrados</h3>
                    ) : false}
                    <CotizadorResultsCarousel />
                </div>
            </div>
        </div>
    )
}
export default CotizadorResultsContainer