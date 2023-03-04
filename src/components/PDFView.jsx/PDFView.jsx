import 'react-pdf/dist/esm/Page/TextLayer.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import { useEffect, useState } from 'react'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import { OutlinedInput } from '@mui/material'
import classes from '../../theme/Styles'
import './PDFView.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
        if (e.key === 'Enter') {
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

        document.getElementById(`page${value <= 1
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
        if (reg.test(value)) {
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
                        <svg width="10" height="12" viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.4499 6.53309C5.3796 6.46337 5.3238 6.38042 5.28573 6.28903C5.24765 6.19763 5.22805 6.0996 5.22805 6.00059C5.22805 5.90159 5.24765 5.80356 5.28573 5.71216C5.3238 5.62077 5.3796 5.53782 5.4499 5.46809L8.8924 2.03309C8.96269 1.96337 9.01849 1.88042 9.05656 1.78903C9.09464 1.69763 9.11424 1.5996 9.11424 1.50059C9.11424 1.40159 9.09464 1.30356 9.05656 1.21216C9.01849 1.12077 8.96269 1.03782 8.8924 0.968094C8.75187 0.828406 8.56178 0.75 8.36365 0.75C8.16551 0.75 7.97542 0.828406 7.8349 0.968094L4.39239 4.41059C3.97104 4.83247 3.73438 5.40434 3.73438 6.00059C3.73438 6.59685 3.97104 7.16872 4.39239 7.59059L7.8349 11.0331C7.97459 11.1717 8.16314 11.2498 8.3599 11.2506C8.4586 11.2512 8.55645 11.2322 8.64783 11.1949C8.7392 11.1576 8.82232 11.1026 8.8924 11.0331C8.96269 10.9634 9.01849 10.8804 9.05656 10.789C9.09464 10.6976 9.11424 10.5996 9.11424 10.5006C9.11424 10.4016 9.09464 10.3036 9.05656 10.2122C9.01849 10.1208 8.96269 10.0378 8.8924 9.9681L5.4499 6.53309Z" />
                            <path d="M0.875 1.1875L0.875 10.8125C0.875 11.0541 1.21079 11.25 1.625 11.25C2.03921 11.25 2.375 11.0541 2.375 10.8125L2.375 1.1875C2.375 0.945875 2.03921 0.75 1.625 0.75C1.21079 0.75 0.875 0.945875 0.875 1.1875Z" />
                        </svg>
                    </button>
                    <button disabled={pageNumber <= 1} onClick={handlePrevPage}>
                        <svg width="6" height="12" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.9499 6.53212C1.8796 6.4624 1.8238 6.37945 1.78573 6.28805C1.74765 6.19666 1.72805 6.09863 1.72805 5.99962C1.72805 5.90061 1.74765 5.80258 1.78573 5.71119C1.8238 5.61979 1.8796 5.53684 1.9499 5.46712L5.3924 2.03212C5.46269 1.9624 5.51849 1.87944 5.55656 1.78805C5.59464 1.69666 5.61424 1.59863 5.61424 1.49962C5.61424 1.40061 5.59464 1.30258 5.55656 1.21119C5.51849 1.11979 5.46269 1.03684 5.3924 0.967118C5.25187 0.82743 5.06178 0.749023 4.86365 0.749023C4.66551 0.749023 4.47542 0.82743 4.3349 0.967118L0.892395 4.40962C0.471043 4.83149 0.234375 5.40337 0.234375 5.99962C0.234375 6.59587 0.471043 7.16774 0.892395 7.58962L4.3349 11.0321C4.47459 11.1707 4.66314 11.2488 4.8599 11.2496C4.9586 11.2502 5.05645 11.2313 5.14783 11.1939C5.2392 11.1566 5.32232 11.1016 5.3924 11.0321C5.46269 10.9624 5.51849 10.8794 5.55656 10.7881C5.59464 10.6967 5.61424 10.5986 5.61424 10.4996C5.61424 10.4006 5.59464 10.3026 5.55656 10.2112C5.51849 10.1198 5.46269 10.0368 5.3924 9.96712L1.9499 6.53212Z" />
                        </svg>
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
                        <svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.54997 4.40962L2.10747 0.967118C1.96695 0.82743 1.77686 0.749023 1.57872 0.749023C1.38058 0.749023 1.1905 0.82743 1.04997 0.967118C0.979677 1.03684 0.923882 1.11979 0.885805 1.21119C0.847729 1.30258 0.828125 1.40061 0.828125 1.49962C0.828125 1.59863 0.847729 1.69666 0.885805 1.78805C0.923882 1.87945 0.979677 1.9624 1.04997 2.03212L4.49997 5.46712C4.57027 5.53684 4.62607 5.61979 4.66414 5.71119C4.70222 5.80258 4.72182 5.90061 4.72182 5.99962C4.72182 6.09863 4.70222 6.19666 4.66414 6.28805C4.62607 6.37945 4.57027 6.4624 4.49997 6.53212L1.04997 9.96712C0.908746 10.1074 0.82901 10.2979 0.828307 10.497C0.827603 10.696 0.905991 10.8871 1.04622 11.0284C1.18646 11.1696 1.37705 11.2493 1.57607 11.25C1.7751 11.2507 1.96625 11.1724 2.10747 11.0321L5.54997 7.58962C5.97133 7.16774 6.208 6.59587 6.208 5.99962C6.208 5.40337 5.97133 4.83149 5.54997 4.40962V4.40962Z" />
                        </svg>
                    </button>
                    <button disabled={pageNumber >= numPages} onClick={handleLastPage}>
                        <svg width="10" height="12" viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.59685 4.4106L2.15435 0.968094C2.01383 0.828406 1.82374 0.75 1.6256 0.75C1.42746 0.75 1.23737 0.828406 1.09685 0.968094C1.02655 1.03782 0.970757 1.12077 0.93268 1.21216C0.894604 1.30356 0.875 1.40159 0.875 1.50059C0.875 1.5996 0.894604 1.69763 0.93268 1.78903C0.970757 1.88042 1.02655 1.96337 1.09685 2.03309L4.54685 5.4681C4.61715 5.53782 4.67294 5.62077 4.71102 5.71216C4.74909 5.80356 4.7687 5.90159 4.7687 6.0006C4.7687 6.0996 4.74909 6.19763 4.71102 6.28903C4.67294 6.38042 4.61715 6.46337 4.54685 6.5331L1.09685 9.9681C0.955621 10.1083 0.875885 10.2989 0.875182 10.4979C0.874478 10.697 0.952866 10.8881 1.0931 11.0293C1.23333 11.1706 1.42392 11.2503 1.62295 11.251C1.82197 11.2517 2.01312 11.1733 2.15435 11.0331L5.59685 7.5906C6.0182 7.16872 6.25487 6.59685 6.25487 6.0006C6.25487 5.40434 6.0182 4.83247 5.59685 4.4106V4.4106Z" />
                            <path d="M7.92187 1.18848L7.92187 10.8135C7.92187 11.0551 8.25766 11.251 8.67188 11.251C9.08609 11.251 9.42188 11.0551 9.42188 10.8135L9.42188 1.18848C9.42188 0.946852 9.08609 0.750977 8.67187 0.750977C8.25766 0.750977 7.92187 0.946852 7.92187 1.18848Z" />
                        </svg>
                    </button>
                </div>

                <div className="other" style={{ justifyContent: 'flex-end' }}>
                    <button onClick={handleRotate}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1267_10127)">
                                <path d="M9.00044 0C6.75719 0 4.64069 0.83475 3.00044 2.3085V0.75C3.00044 0.33525 2.66444 0 2.25044 0C1.83644 0 1.50044 0.33525 1.50044 0.75V3.75C1.50044 4.57725 2.17319 5.25 3.00044 5.25H6.00044C6.41444 5.25 6.75044 4.91475 6.75044 4.5C6.75044 4.08525 6.41444 3.75 6.00044 3.75H3.65294C5.05994 2.31525 6.96944 1.5 9.00044 1.5C13.1359 1.5 16.5004 4.8645 16.5004 9C16.5004 13.1355 13.1359 16.5 9.00044 16.5C5.09294 16.5 1.88144 13.569 1.53119 9.6825C1.49444 9.27 1.13669 8.9655 0.716692 9.003C0.304192 9.0405 0.000441958 9.405 0.037192 9.8175C0.457942 14.4825 4.31144 18 9.00044 18C13.9632 18 18.0004 13.9628 18.0004 9C18.0004 4.03725 13.9632 0 9.00044 0Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1267_10127">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                    <button>
                        <a href='/documento2.pdf' download>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_929_6943)">
                                    <path d="M7.40843 13.5915C7.61738 13.8006 7.86548 13.9664 8.13855 14.0796C8.41163 14.1928 8.70433 14.251 8.99993 14.251C9.29552 14.251 9.58822 14.1928 9.8613 14.0796C10.1344 13.9664 10.3825 13.8006 10.5914 13.5915L12.9997 11.1833C13.1288 11.0404 13.1981 10.8535 13.1931 10.661C13.1882 10.4685 13.1094 10.2853 12.9731 10.1494C12.8368 10.0134 12.6535 9.93499 12.461 9.93045C12.2685 9.92592 12.0817 9.99558 11.9392 10.125L9.74468 12.3203L9.74992 0.75C9.74992 0.551088 9.67091 0.360322 9.53025 0.21967C9.3896 0.0790176 9.19884 0 8.99993 0V0C8.80101 0 8.61025 0.0790176 8.4696 0.21967C8.32894 0.360322 8.24993 0.551088 8.24993 0.75L8.24318 12.306L6.06068 10.125C5.91995 9.98437 5.72911 9.9054 5.53016 9.90547C5.33121 9.90554 5.14043 9.98465 4.9998 10.1254C4.85917 10.2661 4.7802 10.4569 4.78027 10.6559C4.78034 10.8548 4.85944 11.0456 5.00018 11.1863L7.40843 13.5915Z" />
                                    <path d="M17.25 12C17.0511 12 16.8603 12.079 16.7197 12.2197C16.579 12.3603 16.5 12.5511 16.5 12.75V15.75C16.5 15.9489 16.421 16.1397 16.2803 16.2803C16.1397 16.421 15.9489 16.5 15.75 16.5H2.25C2.05109 16.5 1.86032 16.421 1.71967 16.2803C1.57902 16.1397 1.5 15.9489 1.5 15.75V12.75C1.5 12.5511 1.42098 12.3603 1.28033 12.2197C1.13968 12.079 0.948912 12 0.75 12V12C0.551088 12 0.360322 12.079 0.21967 12.2197C0.0790176 12.3603 0 12.5511 0 12.75L0 15.75C0 16.3467 0.237053 16.919 0.65901 17.341C1.08097 17.7629 1.65326 18 2.25 18H15.75C16.3467 18 16.919 17.7629 17.341 17.341C17.7629 16.919 18 16.3467 18 15.75V12.75C18 12.5511 17.921 12.3603 17.7803 12.2197C17.6397 12.079 17.4489 12 17.25 12Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_929_6943">
                                        <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
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
                                width={document.querySelector('.modalBody')?.clientWidth - 130 ?? 150}
                                pageNumber={i + 1} />
                        </div>
                    )
                )}
            </Document>
        </div>
    )
}
export default PDFView