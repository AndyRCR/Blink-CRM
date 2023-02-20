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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import classes from "../../theme/Styles"
import $ from 'jquery'
import "./PerfilDatosPersonales.css"

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
      $(`.filelabel .title.${e.target.name}`).text(fileName)
    } else {
      $(`.filelabel .title.${e.target.name}`).text(labelVal)
    }
  }

  return (
    <div className="perfilDatosPersonales">
      <div className="perfilGrid">
        <div className="perfilGridItem">
          <label>Fecha de nacimiento</label>
          <div className="inputContainer">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                inputFormat="MM/DD/YYYY"
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
          <label>Correo electrónico</label>
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
          <label>Celular</label>
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
          <label>Tipo y Nº de documento</label>
          <div className="inputContainer">
            <FormControl sx={{ width: "25%" }}>
              <Select
                disabled={disabledStatus}
                value={"DNI"}
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
          <label>DNI Frente</label>
          <div className="inputContainer">
            <label className={disabledStatus ? 'filelabel disabled' : 'filelabel'}>
              {files.documentFront === null ? (
                <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
              ) : false}
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
            </label>
          </div>
        </div>
        <div className="perfilGridItem">
          <label>DNI Dorso</label>
          <div className="inputContainer">
            <label className={disabledStatus ? 'filelabel disabled' : 'filelabel'}>
              {files.documentBack === null ? (
                <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
              ) : false}
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
            </label>
          </div>
        </div>
        <div className="perfilGridItem direccion">
          <label>Dirección</label>
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
