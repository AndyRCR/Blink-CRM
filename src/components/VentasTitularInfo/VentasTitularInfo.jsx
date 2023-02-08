import { useState } from 'react'
import $ from 'jquery'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import { FormControl, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import classes from '../../theme/Styles'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import './VentasTitularInfo.css'

const getAge = dateString => {
    var today = new Date()
    var birthDate = new Date(dateString.split('/').reverse().join('/'))
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age
}

const VentasTitularInfo = ({ sale, setSelectedRelative, setPosition }) => {

    const [editable, setEditable] = useState(false)

    const [files, setFiles] = useState({
        documentFront: null,
        documentBack: null
    })

    const handleRelative = relative => {
        setSelectedRelative(relative)
        setPosition(1)
        document.querySelector('.liquidacion')?.scrollTo({ top: 0, behavior: 'smooth' })
        document.querySelector('.venta')?.scrollTo({ top: 0, behavior: 'smooth' })
    }

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
        <div className="ventasTitularInfo">
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
                        <div className='sliderHeaderInfoMain'>
                            {sale.client}

                            {sale.status !== 'Ingresada' ? false : (
                                editable ? (
                                    <SaveOutlinedIcon
                                    onClick={() => setEditable(!editable)}
                                        sx={{
                                            width: '40px',
                                            height: 'auto',
                                            color: 'var(--blink-main)',
                                            cursor: 'pointer'
                                        }}
                                    />
                                ) : (
                                    <ModeEditOutlineOutlinedIcon
                                    onClick={() => setEditable(!editable)}
                                        sx={{
                                            width: '40px',
                                            height: 'auto',
                                            color: 'var(--blink-main)',
                                            cursor: 'pointer'
                                        }}
                                    />
                                )
                            )}
                        </div>
                        <div className='sliderHeaderInfoSecondary'>
                            Nº de cliente {sale.id} | <span>Titular</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={editable ? 'saleForm' : 'saleForm disabled'}>
                <div className="rowForm">
                    <div className="formItem">
                        <label>DNI Frente</label>
                        <div className="inputContainer">
                            <label className={editable ? 'filelabel' : 'filelabel disabled'} style={{ height: '56px' }}>
                                {files.documentFront === null ? (
                                    <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
                                ) : false}
                                <span className="title documentFront">Cargá tu archivo</span>
                                <input
                                    className="fileUpload"
                                    id="fileInput"
                                    type="file"
                                    name="documentFront"
                                    disabled={!editable}
                                    accept="image/png, image/gif, image/jpeg"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="formItem">
                        <label>DNI Dorso</label>
                        <div className="inputContainer">
                            <label className={editable ? 'filelabel' : 'filelabel disabled'} style={{ height: '56px' }}>
                                {files.documentFront === null ? (
                                    <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
                                ) : false}
                                <span className="title documentFront">Cargá tu archivo</span>
                                <input
                                    className="fileUpload"
                                    id="fileInput"
                                    type="file"
                                    name="documentFront"
                                    disabled={!editable}
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
                                    disabled={!editable}
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
                                disabled={!editable}
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
                                    disabled={!editable}
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
                                    disabled={!editable}
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
                                disabled={!editable}
                                sx={classes.input}
                            />
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Situación laboral*</label>
                        <div className="inputContainer">
                            <FormControl sx={{ width: '100%' }}>
                                <Select
                                    disabled={!editable}
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
                                    disabled={!editable}
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
                <div className="rowForm">
                    <div className="formItem" style={{ gridColumn: '1 / span 2' }}>
                        <label>Dirección</label>
                        <div className="inputContainer">
                            <OutlinedInput
                                type="text"
                                name="document"
                                value='A. Siempre viva 123, Spinfild, Buenos Aires, Argentina'
                                disabled={!editable}
                                sx={classes.input}
                            />
                        </div>
                    </div>
                </div>
                <div className="rowForm">
                    <div className="formItem">
                        <label>Correo electrónico</label>
                        <div className="inputContainer">
                            <OutlinedInput
                                type="text"
                                name="document"
                                value='Nilda_rn@gmail.com'
                                disabled={!editable}
                                sx={classes.input}
                            />
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Celular</label>
                        <div className="inputContainer">
                            <OutlinedInput
                                type="text"
                                name="telReg"
                                disabled={!editable}
                                value='+54'
                                sx={{
                                    ...classes.input,
                                    width: "25%",
                                }}
                            />

                            <OutlinedInput
                                type="number"
                                name="tel"
                                disabled={!editable}
                                value='1174859632'
                                sx={{
                                    ...classes.input,
                                    width: "75%",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className='relativesHead'>
                <h1>Grupo familiar</h1>
                <button style={{ position: 'initial' }} className='secondaryButton'>
                    <PersonAddAltOutlinedIcon />
                    Agregar
                </button>
            </div>

            <div className="relativesGrid">
                {sale.relatives.map((relative, i) => {
                    return (
                        <div
                            onClick={() => handleRelative(relative)}
                            className="relativeCard"
                            key={`relative${i + 1}`}>
                            {sale.status !== 'Ingresada' ? false : (
                                <CloseRoundedIcon
                                    sx={{
                                        pointerEvents: 'none',
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px'
                                    }}
                                />
                            )}
                            <PersonOutlinedIcon sx={{ width: 'auto', height: '70px' }} />
                            <p className='name'>{relative.firstName} {relative.lastName}</p>
                            <p className='age'>({getAge(relative.birthdate)} años)</p>
                            <p className='relation'>{relative.relation}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default VentasTitularInfo