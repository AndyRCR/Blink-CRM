import {
    FormControl,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material"
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalStateContext"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import classes from "../../theme/Styles"
import $ from 'jquery'
import "./PerfilDatosPersonales.css"
import CalendarIcon from "../CalendarIcon/CalendarIcon"

const PerfilDatosPersonales = ({ disabledStatus }) => {

    const { user } = useContext(GlobalContext)

    const [files, setFiles] = useState({
        documentFront: null,
        documentBack: null
    })

    const [info, setInfo] = useState({
        birth: user.birth,
        email: user.email,
        tel: user.tel || "",
        telReg: user.telReg,
        document: user.document,
        address: user.address,
    })

    const handleBirth = (value) =>
        setInfo({
            ...info,
            birth: value,
        })

    const handleChange = (evt) => {
        const { name, value } = evt.target

        setInfo({
            ...info,
            [name]: value,
        })
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
            $(`.filelabel .title.${e.target.name}`).text(
                fileName.length >= 20
                    ? `${fileName.slice(0, 10)}...${fileName.slice(fileName.length - 10, fileName.length)}`
                    : fileName
            )
        } else {
            $(`.filelabel .title.${e.target.name}`).text(labelVal)
        }
    }

    const clearFileInput = (e, name) => {
        if (!disabledStatus) {
            e.preventDefault()
            $(`.filelabel .title.${name}`).text('Cargá tu archivo')
            setFiles({
                ...files,
                [name]: null
            })
        }
    }

    return (
        <div className="perfilDatosPersonales">
            <div className="perfilGrid">
                <div className="perfilGridItem">
                    <label style={{ color: disabledStatus ? 'var(--blink-gray)' : 'var(--blink-main)' }}>Fecha de nacimiento</label>
                    <div className="inputContainer">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                components={{
                                    OpenPickerIcon: CalendarIcon
                                }}
                                inputFormat="DD/MM/YYYY"
                                value={info.birth}
                                onChange={handleBirth}
                                disabled={disabledStatus}
                                renderInput={(params) => (
                                    <TextField sx={classes.input} {...params} />
                                )}
                            />
                        </LocalizationProvider>
                    </div>
                </div>
                <div className="perfilGridItem">
                    <label style={{ color: disabledStatus ? 'var(--blink-gray)' : 'var(--blink-main)' }}>Correo electrónico</label>
                    <div className="inputContainer">
                        <OutlinedInput
                            type="email"
                            name="email"
                            disabled={disabledStatus}
                            onChange={handleChange}
                            value={info.email}
                            sx={classes.input}
                        />
                    </div>
                </div>
                <div className="perfilGridItem">
                    <label style={{ color: disabledStatus ? 'var(--blink-gray)' : 'var(--blink-main)' }}>Celular</label>
                    <div className="inputContainer">
                        <OutlinedInput
                            type="text"
                            name="telReg"
                            disabled={disabledStatus}
                            onChange={handleChange}
                            value={info.telReg}
                            sx={{
                                ...classes.input,
                                width: "25%",
                            }}
                        />

                        <OutlinedInput
                            type="number"
                            name="tel"
                            disabled={disabledStatus}
                            onChange={handleChange}
                            sx={{
                                ...classes.input,
                                width: "75%",
                            }}
                        />
                    </div>
                </div>
                <div className="perfilGridItem">
                    <label style={{ color: disabledStatus ? 'var(--blink-gray)' : 'var(--blink-main)' }}>Tipo y Nº de documento</label>
                    <div className="inputContainer">
                        <FormControl sx={{ width: "25%" }}>
                            <Select
                                disabled={disabledStatus}
                                defaultValue={'DNI'}
                                sx={classes.input}
                                IconComponent={KeyboardArrowDownOutlinedIcon}
                            >
                                <MenuItem value={"DNI"}>DNI</MenuItem>
                                <MenuItem value={"Pasaporte"}>Pasaporte</MenuItem>
                            </Select>
                        </FormControl>

                        <OutlinedInput
                            type="number"
                            name="document"
                            disabled={disabledStatus}
                            onChange={handleChange}
                            sx={{
                                ...classes.input,
                                width: "75%",
                            }}
                        />
                    </div>
                </div>
                <div className="perfilGridItem">
                    <label style={{ color: disabledStatus ? 'var(--blink-gray)' : 'var(--blink-main)' }}>DNI Frente</label>
                    <div className="inputContainer">
                        <label
                            style={{
                                justifyContent: files.documentFront && !disabledStatus ? 'space-between' : 'center'
                            }}
                            className={
                                disabledStatus
                                    ? 'filelabel disabled'
                                    : files.documentFront
                                        ? 'filelabel withFile'
                                        : 'filelabel'}>
                            {files.documentFront === null || files.documentFront === undefined ? (
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.88732 24C5.73396 24 3.88106 23.2238 2.32864 21.6714C0.776213 20.1189 0 18.266 0 16.1127C0 14.1596 0.619718 12.4382 1.85915 10.9484C3.09859 9.45853 4.69484 8.56338 6.64789 8.26291C7.14867 5.83412 8.32551 3.84976 10.1784 2.30986C12.0313 0.769953 14.1721 0 16.6009 0C19.4304 0 21.8028 1.02034 23.7183 3.06103C25.6338 5.10172 26.5916 7.54929 26.5916 10.4038V11.3052C28.3944 11.2551 29.9218 11.8372 31.1737 13.0516C32.4257 14.266 33.0516 15.7997 33.0516 17.6526C33.0516 19.3803 32.4257 20.8701 31.1737 22.1221C29.9218 23.374 28.4319 24 26.7042 24H17.6526C17.0516 24 16.5258 23.7746 16.0751 23.3239C15.6244 22.8732 15.3991 22.3474 15.3991 21.7465V12.0563L12.2817 15.1737L10.6667 13.5587L16.5258 7.69953L22.385 13.5587L20.77 15.1737L17.6526 12.0563V21.7465H26.7042C27.831 21.7465 28.795 21.3459 29.5962 20.5446C30.3975 19.7433 30.7981 18.7793 30.7981 17.6526C30.7981 16.5258 30.3975 15.5618 29.5962 14.7606C28.795 13.9593 27.831 13.5587 26.7042 13.5587H24.338V10.4038C24.338 8.17527 23.5806 6.25978 22.0657 4.65728C20.5509 3.05477 18.6792 2.25352 16.4507 2.25352C14.2222 2.25352 12.3443 3.05477 10.8169 4.65728C9.28951 6.25978 8.52582 8.17527 8.52582 10.4038H7.81221C6.25978 10.4038 4.94523 10.9484 3.86854 12.0376C2.79186 13.1268 2.25352 14.4726 2.25352 16.0751C2.25352 17.6275 2.80438 18.9609 3.9061 20.0751C5.00782 21.1894 6.3349 21.7465 7.88732 21.7465H13.1455V24H7.88732Z" />
                                </svg>
                            ) : <div></div>}
                            <span className="title documentFront">Cargá tu archivo</span>
                            <input
                                className="fileUpload"
                                id="fileInput"
                                type="file"
                                name="documentFront"
                                disabled={disabledStatus}
                                accept="image/png, image/gif, image/jpeg"
                                onChange={handleFileChange}
                            />
                            {(files.documentFront && !disabledStatus) &&
                                <svg
                                    onClick={(e) => clearFileInput(e, 'documentFront')}
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.3679 3.51491C1.71018 5.17263 0.587346 7.29077 0.141379 9.60149C-0.304589 11.9122 -0.0536552 14.3117 0.862446 16.4966C1.77855 18.6814 3.31867 20.5535 5.28806 21.8761C7.25745 23.1987 9.56765 23.9124 11.9265 23.9269C14.2854 23.9414 16.587 23.2561 18.5403 21.9576C20.4935 20.6591 22.0108 18.8058 22.9001 16.6321C23.7894 14.4583 24.0108 12.0617 23.5364 9.74534C23.062 7.42897 21.913 5.29685 20.2348 3.61862C17.9827 1.37134 14.942 0.0983122 11.7799 0.0788679C8.61778 0.0594248 5.59253 1.29515 3.3679 3.51491V3.51491ZM18.9243 19.0713C17.5428 20.4527 15.7777 21.3884 13.8521 21.76C11.9265 22.1317 9.92692 21.9226 8.1062 21.1591C6.28548 20.3957 4.7254 19.1123 3.62325 17.4711C2.5211 15.83 1.92638 13.9048 1.9143 11.9391C1.90221 9.97335 2.4733 8.05535 3.55535 6.42763C4.6374 4.7999 6.18181 3.53555 7.99328 2.79447C9.80474 2.05339 11.8019 1.86885 13.7322 2.2642C15.6625 2.65955 17.4393 3.61703 18.8378 5.01555C20.7105 6.89232 21.7713 9.42621 21.7876 12.0613C21.8038 14.6963 20.774 17.2174 18.9243 19.0713ZM15.3455 8.50787C15.533 8.69541 15.6393 8.94885 15.6409 9.21245C15.6426 9.47604 15.5394 9.7282 15.3541 9.91344L13.2588 12.0088L15.3801 14.1302C15.5676 14.3177 15.6739 14.5711 15.6755 14.8347C15.6771 15.0983 15.574 15.3505 15.3887 15.5357C15.2035 15.721 14.9513 15.8241 14.6877 15.8225C14.4241 15.8209 14.1707 15.7146 13.9831 15.5271L11.8618 13.4058L9.76643 15.5012C9.58119 15.6864 9.32903 15.7896 9.06544 15.7879C8.80184 15.7863 8.5484 15.6801 8.36086 15.4925C8.17333 15.305 8.06706 15.0515 8.06544 14.7879C8.06382 14.5243 8.16698 14.2722 8.35222 14.0869L10.4476 11.9915L8.32629 9.87023C8.13876 9.68269 8.03249 9.42925 8.03087 9.16565C8.02925 8.90206 8.13241 8.6499 8.31765 8.46466C8.50289 8.27941 8.75505 8.17626 9.01865 8.17788C9.28224 8.1795 9.53568 8.28576 9.72322 8.4733L11.8445 10.5946L13.9399 8.49923C14.1252 8.31398 14.3773 8.21083 14.6409 8.21245C14.9045 8.21407 15.158 8.32034 15.3455 8.50787Z" fill="white" />
                                </svg>
                            }
                        </label>
                    </div>
                </div>
                <div className="perfilGridItem">
                    <label style={{ color: disabledStatus ? 'var(--blink-gray)' : 'var(--blink-main)' }}>DNI Dorso</label>
                    <div className="inputContainer">
                        <label
                            style={{
                                justifyContent: files.documentBack && !disabledStatus ? 'space-between' : 'center'
                            }}
                            className={
                                disabledStatus
                                    ? 'filelabel disabled'
                                    : files.documentBack
                                        ? 'filelabel withFile'
                                        : 'filelabel'}>
                            {files.documentBack === null || files.documentBack === undefined ? (
                                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.88732 24C5.73396 24 3.88106 23.2238 2.32864 21.6714C0.776213 20.1189 0 18.266 0 16.1127C0 14.1596 0.619718 12.4382 1.85915 10.9484C3.09859 9.45853 4.69484 8.56338 6.64789 8.26291C7.14867 5.83412 8.32551 3.84976 10.1784 2.30986C12.0313 0.769953 14.1721 0 16.6009 0C19.4304 0 21.8028 1.02034 23.7183 3.06103C25.6338 5.10172 26.5916 7.54929 26.5916 10.4038V11.3052C28.3944 11.2551 29.9218 11.8372 31.1737 13.0516C32.4257 14.266 33.0516 15.7997 33.0516 17.6526C33.0516 19.3803 32.4257 20.8701 31.1737 22.1221C29.9218 23.374 28.4319 24 26.7042 24H17.6526C17.0516 24 16.5258 23.7746 16.0751 23.3239C15.6244 22.8732 15.3991 22.3474 15.3991 21.7465V12.0563L12.2817 15.1737L10.6667 13.5587L16.5258 7.69953L22.385 13.5587L20.77 15.1737L17.6526 12.0563V21.7465H26.7042C27.831 21.7465 28.795 21.3459 29.5962 20.5446C30.3975 19.7433 30.7981 18.7793 30.7981 17.6526C30.7981 16.5258 30.3975 15.5618 29.5962 14.7606C28.795 13.9593 27.831 13.5587 26.7042 13.5587H24.338V10.4038C24.338 8.17527 23.5806 6.25978 22.0657 4.65728C20.5509 3.05477 18.6792 2.25352 16.4507 2.25352C14.2222 2.25352 12.3443 3.05477 10.8169 4.65728C9.28951 6.25978 8.52582 8.17527 8.52582 10.4038H7.81221C6.25978 10.4038 4.94523 10.9484 3.86854 12.0376C2.79186 13.1268 2.25352 14.4726 2.25352 16.0751C2.25352 17.6275 2.80438 18.9609 3.9061 20.0751C5.00782 21.1894 6.3349 21.7465 7.88732 21.7465H13.1455V24H7.88732Z" />
                                </svg>
                            ) : <div></div>}
                            <span className="title documentBack">Cargá tu archivo</span>
                            <input
                                className="fileUpload"
                                id="fileInput"
                                type="file"
                                name="documentBack"
                                disabled={disabledStatus}
                                accept="image/png, image/gif, image/jpeg"
                                onChange={handleFileChange}
                            />
                            {(files.documentBack && !disabledStatus) && (
                                <svg
                                    onClick={(e) => clearFileInput(e, 'documentBack')}
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.3679 3.51491C1.71018 5.17263 0.587346 7.29077 0.141379 9.60149C-0.304589 11.9122 -0.0536552 14.3117 0.862446 16.4966C1.77855 18.6814 3.31867 20.5535 5.28806 21.8761C7.25745 23.1987 9.56765 23.9124 11.9265 23.9269C14.2854 23.9414 16.587 23.2561 18.5403 21.9576C20.4935 20.6591 22.0108 18.8058 22.9001 16.6321C23.7894 14.4583 24.0108 12.0617 23.5364 9.74534C23.062 7.42897 21.913 5.29685 20.2348 3.61862C17.9827 1.37134 14.942 0.0983122 11.7799 0.0788679C8.61778 0.0594248 5.59253 1.29515 3.3679 3.51491V3.51491ZM18.9243 19.0713C17.5428 20.4527 15.7777 21.3884 13.8521 21.76C11.9265 22.1317 9.92692 21.9226 8.1062 21.1591C6.28548 20.3957 4.7254 19.1123 3.62325 17.4711C2.5211 15.83 1.92638 13.9048 1.9143 11.9391C1.90221 9.97335 2.4733 8.05535 3.55535 6.42763C4.6374 4.7999 6.18181 3.53555 7.99328 2.79447C9.80474 2.05339 11.8019 1.86885 13.7322 2.2642C15.6625 2.65955 17.4393 3.61703 18.8378 5.01555C20.7105 6.89232 21.7713 9.42621 21.7876 12.0613C21.8038 14.6963 20.774 17.2174 18.9243 19.0713ZM15.3455 8.50787C15.533 8.69541 15.6393 8.94885 15.6409 9.21245C15.6426 9.47604 15.5394 9.7282 15.3541 9.91344L13.2588 12.0088L15.3801 14.1302C15.5676 14.3177 15.6739 14.5711 15.6755 14.8347C15.6771 15.0983 15.574 15.3505 15.3887 15.5357C15.2035 15.721 14.9513 15.8241 14.6877 15.8225C14.4241 15.8209 14.1707 15.7146 13.9831 15.5271L11.8618 13.4058L9.76643 15.5012C9.58119 15.6864 9.32903 15.7896 9.06544 15.7879C8.80184 15.7863 8.5484 15.6801 8.36086 15.4925C8.17333 15.305 8.06706 15.0515 8.06544 14.7879C8.06382 14.5243 8.16698 14.2722 8.35222 14.0869L10.4476 11.9915L8.32629 9.87023C8.13876 9.68269 8.03249 9.42925 8.03087 9.16565C8.02925 8.90206 8.13241 8.6499 8.31765 8.46466C8.50289 8.27941 8.75505 8.17626 9.01865 8.17788C9.28224 8.1795 9.53568 8.28576 9.72322 8.4733L11.8445 10.5946L13.9399 8.49923C14.1252 8.31398 14.3773 8.21083 14.6409 8.21245C14.9045 8.21407 15.158 8.32034 15.3455 8.50787Z" fill="white" />
                                </svg>
                            )}
                        </label>
                    </div>
                </div>
                <div className="perfilGridItem direccion">
                    <label style={{ color: disabledStatus ? 'var(--blink-gray)' : 'var(--blink-main)' }}>Dirección</label>
                    <div className="inputContainer">
                        <OutlinedInput
                            type="text"
                            name="address"
                            disabled={disabledStatus}
                            onChange={handleChange}
                            sx={classes.input}
                        />
                    </div>
                </div>
            </div>

            <h3>Cambiar la contraseña</h3>

            <div className="perfilGrid">
                <div className="perfilGridItem">
                    <label>Contraseña actual</label>
                    <OutlinedInput type="password" sx={classes.input} />
                </div>
                <div className="perfilGridItem">
                    <label>Nueva contraseña</label>
                    <OutlinedInput type="password" sx={classes.input} />
                </div>
                <div className="perfilGridItem">
                    <label>Confirmar contraseña</label>
                    <OutlinedInput type="password" sx={classes.input} />
                </div>
            </div>
        </div>
    )
}
export default PerfilDatosPersonales