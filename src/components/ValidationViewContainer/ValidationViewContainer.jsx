import React from "react"
import ValidationForm from "../ValidationForm/ValidationForm"
import "./ValidationViewContainer.css"

const ValidationViewContainer = () => {

    return (
        <div className="validationViewContainer">
            <div className="validationContainer">
                <div className="validationTitle">
                    Contános un poco de tu experiencia
                </div>
                <ValidationForm/>
            </div>
        </div>
    )
}
export default ValidationViewContainer