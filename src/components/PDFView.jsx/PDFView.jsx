import { useEffect, useRef, useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import FirstPageOutlinedIcon from '@mui/icons-material/FirstPageOutlined'
import LastPageOutlinedIcon from '@mui/icons-material/LastPageOutlined'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './PDFView.css'
import { OutlinedInput } from '@mui/material'
import classes from '../../theme/Styles'

const PDFView = () => {

    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [documentHeight, setDocumentHeight] = useState(null)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
        setPageNumber(1)
        setTimeout(() => {
            setDocumentHeight(document.querySelector('.page').clientHeight * numPages)
        }, 500)
    }

    const handlePrevPage = () => {
        document.getElementById(`page${pageNumber - 1}`).scrollIntoView()
        setPageNumber(pageNumber - 1)
    }

    const handlePageChange = (evt) => {
        if(evt.target.value)
        document.getElementById(`page${evt.target.value}`).scrollIntoView()
        setPageNumber(evt.target.value)
    }

    const handleNextPage = () => {
        document.getElementById(`page${pageNumber + 1}`).scrollIntoView()
        setPageNumber(pageNumber + 1)
    }

    const handleScroll = (e) => {
        if (e !== undefined) {
            const documentHeight = document.querySelector('.page').clientHeight * numPages
            const scroll = e.target.scrollTop === 0 ? 1 : e.target.scrollTop
            console.log(scroll)
            setPageNumber(numPages - Math.ceil(documentHeight / (scroll + document.querySelector('.page').clientHeight + 1)))
        }
    }

    useEffect(() => {
        document.querySelector('.react-pdf__Document').addEventListener('scroll', handleScroll)

        return () => document.querySelector('.react-pdf__Document')?.removeEventListener('scroll', handleScroll)
    }, [numPages])


    return (
        <div className="pdfView">
            <div className="pagination">
                <button disabled={pageNumber <= 1} onClick={handlePrevPage}>
                    <FirstPageOutlinedIcon />
                </button>
                <button disabled={pageNumber <= 1} onClick={handlePrevPage}>
                    <ArrowBackIosNewOutlinedIcon sx={{ width: 'auto', height: '18px' }} />
                </button>
                <div className='pageInputContainer'>
                    Pag.
                    <OutlinedInput
                        type="tel"
                        name="page"
                        onChange={handlePageChange}
                        value={pageNumber}
                        sx={{
                            ...classes.input,
                            width: '35px',
                            padding: '5px',
                            '& .MuiInputBase-input': {
                                padding: 0
                            }
                        }}
                    />
                    de {numPages}</div>
                <button disabled={pageNumber >= numPages} onClick={handleNextPage}>
                    <ArrowForwardIosOutlinedIcon sx={{ width: 'auto', height: '18px' }} />
                </button>
                <button disabled={pageNumber >= numPages} onClick={handleNextPage}>
                    <LastPageOutlinedIcon />
                </button>
            </div>

            <Document file='/documento2.pdf' onLoadSuccess={onDocumentLoadSuccess}>
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
                                scale={1}
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