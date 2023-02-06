import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import './VentasPrepaga.css'

const VentasPrepaga = ({ sale }) => {
    return (
        <div className="ventasPrepaga">
            {/* {sale.status !== 'Ingresada' ? 'No se puede editar' : 'Se puede editar'} */}

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

            <div className='quotationGrid'>
                {sale.status !== 'Ingresada' ? (
                    <div className='quotationCard'>
                        <div className="quotationHeader">
                            <div className="quotationTitle">Cotización</div>
                        </div>
                        <div className="quotationBody">
                            <ul>
                                <li>Prepaga</li>
                                <li>Plan</li>
                                <li>Monto</li>
                                <li>Cuota</li>
                            </ul>
                            <ul>
                                <li>DOCTORED</li>
                                <li>3000</li>
                                <li>$20.000</li>
                                <li>$0.00</li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    sale.quotations.map((quotation, i) => {
                        return (
                            <div className='quotationCard' key={`quotation${i + 1}`}>
                                <div className="quotationHeader">
                                    <div className="quotationTitle">Cotización</div>
                                </div>
                                <div className="quotationBody">
                                    <ul>
                                        <li>Prepaga</li>
                                        <li>Plan</li>
                                        <li>Monto</li>
                                        <li>Cuota</li>
                                    </ul>
                                    <ul>
                                        <li>{quotation.prepaga}</li>
                                        <li>{quotation.plan}</li>
                                        <li>{quotation.ammount}</li>
                                        <li>$0.00</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>

        </div>
    )
}
export default VentasPrepaga