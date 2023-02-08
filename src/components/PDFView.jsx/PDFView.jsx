import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { useEffect, useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import FirstPageOutlinedIcon from '@mui/icons-material/FirstPageOutlined'
import LastPageOutlinedIcon from '@mui/icons-material/LastPageOutlined'
import Rotate90DegreesCcwOutlinedIcon from '@mui/icons-material/Rotate90DegreesCcwOutlined'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { OutlinedInput } from '@mui/material'
import classes from '../../theme/Styles'
import './PDFView.css'

// eslint-disable-next-line
const reg = /^\d+%?$/
// eslint-disable-next-line
const regSpecialChars = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]+$/g
// eslint-disable-next-line
const regLetters = /^[a-zA-Z]+$/g

const PDFView = () => {

    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [nextPageNumber, setNextPageNumber] = useState(1)
    const [rotateDegs, setRotateDegs] = useState(0)
    const [scale, setScale] = useState(100)
    const [nextScale, setNextScale] = useState('100%')

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
        setPageNumber(1)
    }

    const handlePageChange = evt => {
        setNextPageNumber(evt.target.value)
    }

    const handlePageKey = e => {
        if (e.key === 'Enter'){
            changePageValues(e.target.value)
        }
    }

    const handlePageBlur = e => changePageValues(e.target.value)

    const changePageValues = (value) => {
        setPageNumber(
            value <= 1
            ? 1
            : value >= numPages
            ? numPages
            : value
        )

        setNextPageNumber(
            value <= 1
            ? 1
            : value >= numPages
            ? numPages
            : value
        )

        document.getElementById(`page${
            value <= 1
            ? 1
            : value >= numPages
            ? numPages
            : value
        }`).scrollIntoView()
    }

    const handleFirstPage = () => {
        document.getElementById(`page1`).scrollIntoView()
        setPageNumber(1)
        setNextPageNumber(1)
    }

    const handlePrevPage = () => {
        document.getElementById(`page${pageNumber - 1}`).scrollIntoView()
        setPageNumber(pageNumber - 1)
        setNextPageNumber(nextPageNumber - 1)
    }

    const handleNextPage = () => {
        document.getElementById(`page${pageNumber + 1}`).scrollIntoView()
        setPageNumber(pageNumber + 1)
        setNextPageNumber(nextPageNumber + 1)
    }

    const handleLastPage = () => {
        document.getElementById(`page${numPages}`).scrollIntoView()
        setPageNumber(numPages)
        setNextPageNumber(numPages)
    }

    const handleRotate = () => {
        setRotateDegs(rotateDegs === 0 ? 270 : rotateDegs - 90)
    }

    const handleScroll = e => {
        if (e !== undefined) {
            const documentHeight = document.querySelector('.page').clientHeight * numPages
            const scroll = e.target.scrollTop === 0 ? 1 : e.target.scrollTop
            setPageNumber(Math.ceil((scroll + 1) * numPages / documentHeight))
            setNextPageNumber(Math.ceil((scroll + 1) * numPages / documentHeight))
        }
    }

    const handleUpScale = e => {
        setScale(scale + 25)
        setNextScale((parseInt(nextScale.replaceAll('%', '')) + 25) + '%')
    }

    const handleDownScale = e => {
        setScale(scale - 25)
        setNextScale((parseInt(nextScale.replaceAll('%', '')) - 25) + '%')
    }

    const handleScale = e => {
        setNextScale(
            (e.target.value)
                .replaceAll(regSpecialChars, '')
                .replaceAll(regLetters, '')
                .replaceAll('.', '')
        )
    }

    const changeScaleValues = value => {
        if (reg.test(value)){
            setScale(
                value <= 25
                ? 25
                : value >= 250
                ? 250
                : parseInt((value).replaceAll('%', ''))
            )

            setNextScale(
                value <= 25
                ? '25%'
                : value >= 250
                ? '250%'
                : (value).replaceAll('%', '') + '%'
            )
        } else {
            setScale(100)
            setNextScale('100%')
        }
    }

    const handleScaleKey = e => {
        if (e.key === 'Enter') changeScaleValues(e.target.value)
    }

    const handleScaleBlur = e => changeScaleValues(e.target.value)

    useEffect(() => {
        document.querySelector('.react-pdf__Document').addEventListener('scroll', handleScroll)

        return () => document.querySelector('.react-pdf__Document')?.removeEventListener('scroll', handleScroll)

        // eslint-disable-next-line
    }, [numPages])


    return (
        <div className="pdfView">

            <div className="controls">
                <div className='other' style={{ justifyContent: 'flex-start' }}>
                    <button disabled={scale <= 50} onClick={handleDownScale}>
                        <RemoveOutlinedIcon />
                    </button>

                    <div className='pageInputContainer'>
                        <OutlinedInput
                            type="text"
                            name="scale"
                            onChange={handleScale}
                            onBlur={handleScaleBlur}
                            onKeyUp={handleScaleKey}
                            value={`${nextScale}`}
                            sx={{
                                ...classes.input,
                                width: '60px',
                                padding: '5px',
                                '& .MuiInputBase-input': {
                                    padding: 0,
                                    textAlign: 'center'
                                }
                            }}
                        />
                    </div>

                    <button disabled={scale >= 250} onClick={handleUpScale}>
                        <AddOutlinedIcon />
                    </button>
                </div>

                <div className="pagination">
                    <button disabled={pageNumber <= 1} onClick={handleFirstPage}>
                        <FirstPageOutlinedIcon />
                    </button>
                    <button disabled={pageNumber <= 1} onClick={handlePrevPage}>
                        <ArrowBackIosNewOutlinedIcon sx={{ width: 'auto', height: '18px' }} />
                    </button>
                    <div className='pageInputContainer'>
                        Pag.
                        <OutlinedInput
                            type="number"
                            name="page"
                            onChange={handlePageChange}
                            onBlur={handlePageBlur}
                            onKeyUp={handlePageKey}
                            value={nextPageNumber}
                            sx={{
                                ...classes.input,
                                width: '35px',
                                padding: '5px',
                                '& .MuiInputBase-input': {
                                    padding: 0,
                                    textAlign: 'center'
                                }
                            }}
                        />
                        de {numPages}
                    </div>
                    <button disabled={pageNumber >= numPages} onClick={handleNextPage}>
                        <ArrowForwardIosOutlinedIcon sx={{ width: 'auto', height: '18px' }} />
                    </button>
                    <button disabled={pageNumber >= numPages} onClick={handleLastPage}>
                        <LastPageOutlinedIcon />
                    </button>
                </div>

                <div className="other" style={{ justifyContent: 'flex-end' }}>
                    <button onClick={handleRotate}>
                        <Rotate90DegreesCcwOutlinedIcon />
                    </button>

                    <button>
                        <a href='/documento2.pdf' download>
                            <DownloadOutlinedIcon />
                        </a>
                    </button>
                </div>
            </div>

            <Document rotate={rotateDegs} file='/documento2.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                {/* <Page
                width={document.querySelector('.modalBody')?.clientWidth - 112 ?? 150}
                pageNumber={pageNumber} /> */}

                {Array.from(
                    new Array(numPages),
                    (el, i) => (
                        <div
                            className='page'
                            id={`page${i + 1}`}
                            key={`page${i + 1}`}>
                            <Page
                                scale={scale / 100}
                                width={document.querySelector('.modalBody')?.clientWidth - 300 ?? 150}
                                pageNumber={i + 1} />
                        </div>
                    )
                )}
            </Document>
        </div>
    )
}
export default PDFView