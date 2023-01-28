import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalStateContext";
import ValidationForm from "../ValidationForm/ValidationForm";
import ValidationSuccess from "../ValidationSuccess/ValidationSuccess";
import "./ValidationViewContainer.css";

const ValidationViewContainer = () => {
  const { validationState } = useContext(GlobalContext)

  useEffect(() => {
    const handleResize = () => {
      const width = document.querySelector(".validationSlider").clientWidth
  
      document
        .querySelectorAll(".validationSlider .validationSection")
        .forEach((el) => {
          el.style.transform = `translateX(-${width * validationState}px)`
        })
    }

    if(validationState === 0){
      document.body.style.overflowY = 'auto'
    }else{
      document.body.style.overflowY = 'hidden'
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [validationState])

  return (
    <div className="validationViewContainer">
      <div>
        <div className="validationTitle">
          Contános un poco de tu experiencia
        </div>
        <div className="validationSlider">
          <ValidationForm />
          <ValidationSuccess />
        </div>
      </div>
    </div>
  );
};

export default ValidationViewContainer;
