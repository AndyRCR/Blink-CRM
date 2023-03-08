import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import CotizadorBenefits from '../CotizadorBenefits/CotizadorBenefits'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded'
import './CotizadorResultsCarousel.css'
import CotizadorResultItem from '../CotizadorResultItem/CotizadorResultItem'

const CotizadorResultsCarousel = () => {

    const {windowHeight, obtainResults, results, setResults, filteredResults, position, setPosition, setFilteredResults } = useContext(GlobalContext)

    const pixelToInt = (pixels) => {
        return parseInt(pixels.slice(0, pixels.indexOf('p')))
    }

    const handleResize = () => {
        const carousel = document.querySelector('.carousel')
        const style = window.getComputedStyle(document.querySelector('.carousel .result'))
        const width = style.getPropertyValue('width')
        carousel.style.width = `${pixelToInt(width) * 4 + 16 * 4}px`
    }

    const moveRight = () => {
        if (position > 0) {
            filteredResults === null ? (
                setResults(results.map(el => {
                    return {
                        ...el,
                        pos: el.pos + 1
                    }
                }
                ))
            ) : (
                setFilteredResults(filteredResults.map(el => {
                    return {
                        ...el,
                        pos: el.pos + 1
                    }
                }
                ))
            )
        }

        const style = window.getComputedStyle(document.querySelector('.carousel .result'))
        const width = style.getPropertyValue('width')

        setPosition(position < 1 ? position : position - 1)
        document.querySelectorAll('.carousel .result').forEach(item => {
            item.style.transform = position <= 0
                ? `translateX(${pixelToInt(width) * Math.abs(position) + 16 * Math.abs(position)}px)`
                : `translateX(${pixelToInt(width) * position + 16 * position}px)`
        })
    }

    const moveLeft = () => {
        if (position < (filteredResults || results).length - 1) {
            filteredResults == null ? (
                setResults(results.map(el => {
                    return {
                        ...el,
                        pos: el.pos - 1
                    }
                }
                ))
            ) : (
                setFilteredResults(filteredResults.map(el => {
                    return {
                        ...el,
                        pos: el.pos - 1
                    }
                }
                ))
            )
        }

        const style = window.getComputedStyle(document.querySelector('.carousel .result'))
        const width = style.getPropertyValue('width')

        setPosition(position > (filteredResults || results).length - 2 ? position : position + 1)
        document.querySelectorAll('.carousel .result').forEach(item => {
            item.style.transform = `translateX(-${pixelToInt(width) * position + 16 * position}px)`
        })
    }

    useEffect(() => {
        if (results === null) obtainResults()

        if (results !== null) {

            if (filteredResults.length > 0) {
                const carousel = document.querySelector('.carousel')
                const width = document.querySelector('.carousel .result').clientWidth
                carousel.style.width = `${width * 4 + 16 * 4}px`

                document.querySelectorAll('.carousel .result').forEach(item => {
                    item.style.transform = `translateX(-${width * position + 16 * position}px)`
                })

                document.querySelectorAll('.carousel .pinFix.visible').forEach(item => {
                    item.style.transform = `translateX(-${width * position + 16 * position}px)`
                })
            }
        } else {
            const carousel = document.querySelector('.carousel')
            carousel.style.width = `${220 * 4 + 16 * 4}px`
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

        // eslint-disable-next-line
    }, [position, windowHeight])

    return (
        <div className='cotizadorResultsCarousel' style={{ width: windowHeight < 900 ? 'fit-content' : '100%' }}>
            <CotizadorBenefits />
            <div className='scrollButton' onClick={moveRight}>
                <ArrowBackIosRoundedIcon className='scrollIcon'/>
            </div>
            <div className={filteredResults !== null && filteredResults.length > 0 ? 'carousel' : 'carousel noresults'}>
                {results !== null ? (
                    filteredResults !== null && filteredResults.length > 0 ? (
                        (filteredResults || results).map((res, i) => {
                            return (
                                <CotizadorResultItem res={res} i={i} pos={res.pos} key={`result ${i}`} />
                            )
                        })
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img style={{ width: '200px' }} src='https://cdn3d.iconscout.com/3d/premium/thumb/no-results-found-5732789-4812665.png' alt='no results blink' />
                            <h3>No se encontraron resultados</h3>
                        </div>
                    )
                ) : (
                    <div className='loaderTitle'>b</div>
                )}
            </div>
            <div className='scrollButton' onClick={moveLeft}>
                <ArrowForwardIosRoundedIcon className='scrollIcon'/>
            </div>
        </div>
    )
}
export default CotizadorResultsCarousel