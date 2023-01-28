import { useState } from 'react'
import { FormControl, MenuItem, OutlinedInput, Select } from '@mui/material'
import { faCloudArrowUp, faFilePdf } from "@fortawesome/free-solid-svg-icons"
import classes from '../../theme/Styles'
import $ from 'jquery'
import './PerfilDatosBancarios.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PerfilDatosBancarios = ({disabledStatus}) => {

  const [info, setInfo] = useState({
    cuil: '',
    documents: {
      afip: null,
      cbu: null
    },
    bank: '',
    cbu: '',
    alias: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target

    setInfo({
      ...info,
      [name]: value,
    })
  }

  const handleFileChange = (e) => {
    setInfo({
      ...info,
      documents: {
        ...info.documents,
        [e.target.name]: e.target.files[0]
      }
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
    <div className="perfilDatosBancarios">
      <div className="perfilGrid">
        <div className="perfilGridItem">
          <label>CUIL/CUIT</label>
          <div className="inputContainer">
            <OutlinedInput
              type="number"
              name="cuil"
              disabled={disabledStatus}
              onChange={handleChange}
              value={info.cuil}
              sx={classes.input}
            />
          </div>
        </div>
        <div className="perfilGridItem">
          <label>Condición fiscal</label>
          <div className="inputContainer">
            <FormControl sx={{width: '100%'}}>
              <Select
                disabled={disabledStatus}
                defaultValue={1}
                sx={classes.input}
              >
                <MenuItem value={1}>Monotributista</MenuItem>
                <MenuItem value={2}>Particular</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="perfilGridItem">
          <label>Constancia de AFIP</label>
          <div className="inputContainer">
            <label className={disabledStatus ? 'filelabel disabled' : 'filelabel'}>
              {info.documents.afip === null ? (
                <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
              ) : <FontAwesomeIcon className="fileIcon" icon={faFilePdf}/>}
              <span className="title afip">Cargá tu archivo</span>
              <input
                className="fileUpload"
                id="fileInput"
                type="file"
                name="afip"
                disabled={disabledStatus}
                accept='application/pdf'
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <div className="perfilGridItem">
          <label>Banco</label>
          <div className="inputContainer">
            <OutlinedInput
              type="text"
              name="bank"
              disabled={disabledStatus}
              onChange={handleChange}
              value={info.bank}
              sx={classes.input}
            />
          </div>
        </div>
        <div className="perfilGridItem">
          <label>Tipo de cuenta</label>
          <div className="inputContainer">
            <FormControl sx={{width: '100%'}}>
              <Select
                disabled={disabledStatus}
                defaultValue={1}
                sx={classes.input}
              >
                <MenuItem value={1}>Caja de ahorros en pesos</MenuItem>
                <MenuItem value={2}>Cuenta corriente</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="perfilGridItem">
          <label>Constancia de CBU</label>
          <div className="inputContainer">
            <label className={disabledStatus ? 'filelabel disabled' : 'filelabel'}>
              {info.documents.cbu === null ? (
                <FontAwesomeIcon className="fileIcon" icon={faCloudArrowUp} />
              ) : <FontAwesomeIcon className="fileIcon" icon={faFilePdf}/>}
              <span className="title cbu">Cargá tu archivo</span>
              <input
                className="fileUpload"
                id="fileInput"
                type="file"
                name="cbu"
                disabled={disabledStatus}
                accept='application/pdf'
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>
        <div className="perfilGridItem">
          <label>CBU</label>
          <div className="inputContainer">
            <OutlinedInput
              type="number"
              name="cbu"
              disabled={disabledStatus}
              onChange={handleChange}
              value={info.cbu}
              sx={classes.input}
            />
          </div>
        </div>
        <div className="perfilGridItem">
          <label>Alias</label>
          <div className="inputContainer">
            <OutlinedInput
              type="text"
              name="alias"
              disabled={disabledStatus}
              onChange={handleChange}
              value={info.alias}
              sx={classes.input}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default PerfilDatosBancarios