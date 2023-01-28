import React, { useContext } from "react";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import classes from "../../theme/Styles";
import { GlobalContext } from "../../context/GlobalStateContext";

const ValidationForm = () => {

    const {setValidationState} = useContext(GlobalContext)

  return (
    <div className="validationSection">
      <div className="validationForm">
        <div className="validationItem">
          <p>1. ¿Tenés experiencia en ventas?</p>
          <RadioGroup sx={classes.radioGroup}>
            <FormControlLabel value="si" control={<Radio />} label="Sí" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </div>

        <div className="validationItem">
          <p>
            2. ¿Tenés experiencia en comercialización de Medicina Privada u
            Obras Sociales?
          </p>
          <RadioGroup sx={classes.radioGroup}>
            <FormControlLabel value="si" control={<Radio />} label="Sí" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </div>

        <div className="validationItem">
          <p>
            3. ¿Te encontrás actualmente comercializando Medicina Privada u Obra
            Social?
          </p>
          <RadioGroup sx={classes.radioGroup}>
            <FormControlLabel value="si" control={<Radio />} label="Sí" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </div>

        <div className="validationItem">
          <p>
            4. ¿Trabajas en relación de dependencia en alguna compañía o como
            intermediario a través de un Broker?
          </p>
          <RadioGroup sx={classes.radioGroup}>
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="En relación de dependencia"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Como intermediario o a través de un broker"
            />
          </RadioGroup>
        </div>

        <div className="validationButton">
            <button
            onClick={() => {
                window.scrollTo({top: 0, behavior: 'smooth'})
                setValidationState(1)
            }}
            className="secondaryButton">
                Finalizar
            </button>
        </div>
      </div>
    </div>
  );
};

export default ValidationForm;
