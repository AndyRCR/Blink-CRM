import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import classes from '../../theme/Styles'
import './PrepagasDocumentos.css'

const logos = [
'https://www.grupopremedic.com.ar/padmin/newWeb/web/images/logo_premedic.png',
'https://repo.sancorsalud.com.ar/webinstitucional/assets/images/logo_web.svg',
'https://autogestion.omint.com.ar/static/media/logo_omint_azul.ed33c453.svg']
const folleteria = ['Cartilla Médica', 'Planes', 'Folletería Navideña', 'Folletería Dia de la Madre']

const PrepagasDocumentos = () => {
  return (
    <div className='prepagasDocumentos'>
      {logos.map((logo, i) => {
        return (
          <div className='accordionContainer' key={`accordion${i+1}`}>
            <div className='documentHeader'>
              <img src={logo} alt={`logo${i+1}`} />
              <p>
                <span>Agregar pequeña descripcion de la prepaga. Sumar detalle de la condición comercial en cada una.</span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper et ultricies sagittis eget nulla laoreet. Sagittis.
              </p>
            </div>
            <Accordion sx={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                Folletería
              </AccordionSummary>
              {folleteria.map( (folleto, i) => {
                return (
                  <AccordionDetails key={`folleto${i}`}>
                    <div className='documentItem'>
                      <p>{folleto}</p>
                      <div className='documentIcons'>
                        <VisibilityOutlinedIcon sx={{
                          width: 'auto',
                          height: '24px',
                          cursor: 'pointer'
                        }}/>
                        <FileDownloadOutlinedIcon sx={{
                          width: 'auto',
                          height: '24px',
                          cursor: 'pointer'
                        }}/>
                      </div>
                    </div>
                  </AccordionDetails>
                )
              })}
            </Accordion>

            <Accordion sx={classes.accordion}>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                Documentos ADM
              </AccordionSummary>
              {[...Array(5).keys()].map( doc => {
                return (
                  <AccordionDetails key={`folleto${doc + 1}`}>
                    <div className='documentItem'>
                      <p>Documento Nº{doc + 1}</p>
                      <div className='documentIcons'>
                        <VisibilityOutlinedIcon sx={{
                          width: 'auto',
                          height: '24px',
                          cursor: 'pointer'
                        }}/>
                        <FileDownloadOutlinedIcon sx={{
                          width: 'auto',
                          height: '24px',
                          cursor: 'pointer'
                        }}/>
                      </div>
                    </div>
                  </AccordionDetails>
                )
              })}
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}
export default PrepagasDocumentos