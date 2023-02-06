import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import $ from 'jquery'
import { FormControl, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import classes from '../../theme/Styles'
import './VentasRelativeInfo.css'

const VentasRelativeInfo = ({ sale, selectedRelative, setPosition }) => {

    const [files, setFiles] = useState({
        documentFront: null,
        documentBack: null
    })

    const handleFileChange = (e) => {
        setFiles({
            ...files,
            [e.target.name]: e.target.files[0]
        })

        let labelVal = $(`.title.${e.target.name}`).text()
        let oldfileName = $(this).val()
        let fileName = e.target.value.split("\\").pop()

        if (oldfileName === fileName) {
            return false
        }

        if (fileName) {
            $(`.filelabel .title.${e.target.name}`).text(fileName)
        } else {
            $(`.filelabel .title.${e.target.name}`).text(labelVal)
        }
    }

    return (
        <div className="ventasRelativeInfo">
            {/* {status !== 'Ingresada' ? 'No se puede editar' : 'Se puede editar'} */}

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
                        <div className='sliderHeaderInfoMain'>{selectedRelative.firstName} {selectedRelative.lastName}</div>
                        <div className='sliderHeaderInfoSecondary'>
                            Nº de cliente {sale.id} | <span>{selectedRelative.relation}</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setPosition(0)}
                    className='secondaryButton'
                    style={{position: 'static'}}>
                    <ReplyOutlinedIcon />
                    Datos del titular
                </button>
            </div>

            <div className={sale.status !== 'Ingresada' ? 'saleForm' : 'saleForm disabled'}>
                <div className="rowForm">
                    <div className="formItem">
                        <label>DNI Frente</label>
                        <div className="inputContainer">
                            <label className='filelabel disabled' style={{ height: '56px' }}>
                                {files.documentFront === null ? (
                                    <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
                                ) : false}
                                <span className="title documentFront">Cargá tu archivo</span>
                                <input
                                    className="fileUpload"
                                    id="fileInput"
                                    type="file"
                                    name="documentFront"
                                    disabled
                                    accept="image/png, image/gif, image/jpeg"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="formItem">
                        <label>DNI Dorso</label>
                        <div className="inputContainer">
                            <label className='filelabel disabled' style={{ height: '56px' }}>
                                {files.documentFront === null ? (
                                    <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
                                ) : false}
                                <span className="title documentFront">Cargá tu archivo</span>
                                <input
                                    className="fileUpload"
                                    id="fileInput"
                                    type="file"
                                    name="documentFront"
                                    disabled
                                    accept="image/png, image/gif, image/jpeg"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                <div className="rowForm">
                    <div className="formItem">
                        <label>Tipo y Nº de documento*</label>
                        <div className="inputContainer">
                            <FormControl sx={{ width: "25%" }}>
                                <Select
                                    disabled
                                    value={"DNI"}
                                    sx={classes.input}
                                >
                                    <MenuItem value={"DNI"}>DNI</MenuItem>
                                    <MenuItem value={"Pasaporte"}>Pasaporte</MenuItem>
                                </Select>
                            </FormControl>

                            <OutlinedInput
                                type="text"
                                name="document"
                                value='N° 2354546'
                                disabled
                                sx={{
                                    ...classes.input,
                                    width: "75%",
                                }}
                            />
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Fecha de nacimiento*</label>
                        <div className="inputContainer">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DesktopDatePicker
                                    inputFormat="MM/DD/YYYY"
                                    value={new Date()}
                                    onChange={() => { }}
                                    disabled
                                    renderInput={(params) => (
                                        <TextField sx={classes.input} {...params} />
                                    )}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Género</label>
                        <div className="inputContainer">
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    disabled
                                    value={"Femenino"}
                                    sx={classes.input}
                                >
                                    <MenuItem value={"Femenino"}>Femenino</MenuItem>
                                    <MenuItem value={"Masculino"}>Masculino</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <div className="rowForm">
                    <div className="formItem">
                        <label>CUIT/CUIL*</label>
                        <div className="inputContainer">
                            <OutlinedInput
                                type="text"
                                name="document"
                                value='27-18759854-4'
                                disabled
                                sx={classes.input}
                            />
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Situación laboral*</label>
                        <div className="inputContainer">
                            <FormControl sx={{ width: '100%' }}>
                                <Select
                                    disabled
                                    defaultValue={1}
                                    sx={classes.input}
                                >
                                    <MenuItem value={1}>Monotributista</MenuItem>
                                    <MenuItem value={2}>Particular</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Estado civil</label>
                        <div className="inputContainer">
                            <FormControl sx={{ width: '100%' }}>
                                <Select
                                    disabled
                                    defaultValue={1}
                                    sx={classes.input}
                                >
                                    <MenuItem value={1}>Casado/a</MenuItem>
                                    <MenuItem value={2}>Soltero/a</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VentasRelativeInfo