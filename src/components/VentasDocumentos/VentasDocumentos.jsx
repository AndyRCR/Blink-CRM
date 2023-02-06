import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import './VentasDocumentos.css'

const documents = ['DNI titular frente', 'DNI titular dorso', 'Opción 3', 'Opción 4', 'Opción 5', 'Opción 6', 'Opción 7', 'Opción 8']

const VentasDocumentos = ({ sale, setOpen }) => {

    return (
        <div className="ventasDocumentos">
            <div className='sliderHeaderContainer' style={{ marginTop: 0 }}>
                <div className='sliderHeader'>
                    <div className="sliderHeaderIcon">
                        <PersonOutlinedIcon
                            sx={{
                                "&.MuiSvgIcon-root": {
                                    width: "auto",
                                    height: "64px",
                                },
                            }} />
                        <svg className='svgIcon' width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 4C60 11.354 58.5515 18.636 55.7373 25.4303C52.923 32.2245 48.7981 38.3979 43.598 43.598C38.3979 48.7981 32.2245 52.923 25.4303 55.7373C18.636 58.5515 11.354 60 4 60" stroke="#34E8CA" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                    <div className='sliderHeaderInfo'>
                        <div className='sliderHeaderInfoMain'>{sale.client}</div>
                        <div className='sliderHeaderInfoSecondary'>
                            Nº de cliente {sale.id} | <span>Titular</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="documentsContainer">
                <div className="documentsHeader">
                    <h2>Documentación a presentar OMINT 4021</h2>
                    <p>Archivos en formato JPG, PDF hasta # MB.</p>
                </div>

                <div className='documentsBody'>
                    {documents.map((document, i) => {
                        return (
                            <div className="documentItem" key={`document${i+1}`}>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_986_7394)">
                                            <path d="M24.0004 11.9995C24.0004 10.3735 23.2864 8.83954 22.0754 7.87554C22.2154 6.25354 21.6354 4.66454 20.4854 3.51354C19.3354 2.36454 17.7504 1.78554 16.2084 1.95854C14.1944 -0.597456 9.84339 -0.645456 7.87639 1.92354C6.25239 1.77954 4.66539 2.36254 3.51539 3.51354C2.36639 4.66354 1.78639 6.25354 1.96039 7.79054C-0.595613 9.80454 -0.644613 14.1555 1.92539 16.1235C1.78539 17.7455 2.36539 19.3345 3.51539 20.4855C4.66539 21.6345 6.25239 22.2155 7.79239 22.0405C9.80639 24.5965 14.1574 24.6445 16.1244 22.0755C17.7444 22.2115 19.3344 21.6365 20.4854 20.4855C21.6344 19.3355 22.2144 17.7455 22.0404 16.2085C23.2864 15.1605 24.0004 13.6265 24.0004 12.0005V11.9995ZM17.5404 10.5655L12.8014 15.1335C11.6384 16.2945 9.73539 16.2845 8.57239 15.1205L6.32039 13.0285C5.91639 12.6525 5.89239 12.0195 6.26839 11.6155C6.64539 11.2105 7.27939 11.1885 7.68139 11.5635L9.95939 13.6805C10.3774 14.0975 11.0094 14.0965 11.3994 13.7055L16.1514 9.12454C16.5494 8.74254 17.1824 8.75354 17.5654 9.15054C17.9494 9.54754 17.9374 10.1815 17.5404 10.5645V10.5655Z" fill="#4744CC" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_986_7394">
                                                <rect width="24" height="24" fill="white" transform="translate(0 -0.000488281)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <div className="documentTitle">{document}</div>
                                </div>

                                <VisibilityOutlinedIcon
                                onClick={ () => setOpen(true)}
                                sx={{color: 'var(--blink-main)', cursor: 'pointer'}}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default VentasDocumentos