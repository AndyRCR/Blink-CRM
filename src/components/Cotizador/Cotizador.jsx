import { useState } from "react"
import CotizadorForm from "../CotizadorForm/CotizadorForm"
import CotizadorResultsContainer from "../CotizadorResultsContainer/CotizadorResultsContainer"

const Cotizador = () => {

    const [state, setState] = useState(1)

    return (
        <div className="cotizador">
            {state === 1 ? <CotizadorForm setState={setState}/> : <CotizadorResultsContainer/>}
        </div>
    )
}
export default Cotizador