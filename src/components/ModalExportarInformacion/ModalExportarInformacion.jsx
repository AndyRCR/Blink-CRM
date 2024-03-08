import React from 'react'
import "./ModalExportarInformacion.css"
import {Dialog } from '@mui/material';

const ModalExportarInformacion = ({ open, handleClose}) => {
    const handleExport = () => {
    
      console.log('Exportando datos...');
      handleClose();
    };
  
    return (
        <Dialog open={open} onClose={handleClose}>
        <div className='ContainerExport'>
             <h2>¿Deseas exportar toda la informacion?</h2>
          <div className='Subtitle_Exportar'>
            <h3>Se exportaran todos los datos correspondientes a las cuentas.</h3>
          </div>
          <div className='Flex'>
            <button onClick={handleClose} className='buttonVariant'>
                Cancelar
            </button>
            <button onClick={handleExport} className='secondaryButton' autoFocus>
                Exportar
            </button>
          </div>
        </div>
         
        </Dialog>
    );
}

export default ModalExportarInformacion