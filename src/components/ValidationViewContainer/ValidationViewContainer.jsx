import React, { useState } from "react"
import ValidationForm from "../ValidationForm/ValidationForm"
import "./ValidationViewContainer.css"

const ValidationViewContainer = () => {

    const [showTitle, setShowTitle] = useState(true)
    
    return (
        <div className="validationViewContainer">
            <div className="validationContainer">
                <div className="validationTitle" style={{
                    display: showTitle ? 'block' : 'none'
                }}>
                    Contános un poco de tu experiencia
                </div>
                <ValidationForm setShowTitle={setShowTitle}/>
            </div>
        </div>
    )
}
export default ValidationViewContainer