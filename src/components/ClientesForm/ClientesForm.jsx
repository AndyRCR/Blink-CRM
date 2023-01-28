import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material"
import { useEffect, useState } from "react"
import classes from "../../theme/Styles"
import Switch from "../Switch/Switch"
import "./ClientesForm.css"

const cotizaciones = [
    { prepaga: 'OMINT', plan: '4021', monto: '10.000', cuota: '0.00' },
    { prepaga: 'DOCTORED', plan: '3000', monto: '20.000', cuota: '0.00' },
    { prepaga: 'GALENO', plan: 'ORO 550', monto: '30.000', cuota: '0.00' }
]

const ClientesForm = ({ client }) => {
    const [request, setRequest] = useState({
        name: client.client,
        situation: client.situation,
        telReg: "+54",
    })

    const [optionals, setOptinals] = useState({
        couple: true,
        childs: true,
    })

    const handleChange = (evt) => {
        const { name, value } = evt.target

        setRequest({
            ...request,
            [name]: value,
        })
    }

    useEffect(() => {
        setRequest({
            name: client.client,
            situation: client.situation,
            telReg: "+54",
        })
    }, [client])

    return (
        <div className="clientesForm">
            <div className="formSection">
                <h3>Datos de cotización</h3>
                <div className="formGrid">
                    <div className="formItem">
                        <label>Nombre completo</label>
                        <div className="inputContainer">
                            <OutlinedInput
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={request.name ?? ""}
                                sx={classes.input}
                            />
                        </div>
                    </div>
                    <div className="formItem age">
                        <label>Edad</label>
                        <div className="inputContainer">
                            <OutlinedInput type="number" name="age" sx={classes.input} />
                        </div>
                    </div>
                    <div className="formItem situation">
                        <label>Situación laboral</label>
                        <div className="inputContainer">
                            <FormControl sx={{ width: "100%" }}>
                                <Select
                                    defaultValue={request.situation ?? ""}
                                    sx={classes.input}
                                >
                                    <MenuItem value={"Monotributista"}>Monotributista</MenuItem>
                                    <MenuItem value={"Particular"}>Particular</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="formItem email">
                        <label>Correo electrónico*</label>
                        <div className="inputContainer">
                            <OutlinedInput type="email" name="email" sx={classes.input} />
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Celular</label>
                        <div className="inputContainer telInput">
                            <OutlinedInput
                                className="telReg"
                                type="text"
                                name="telReg"
                                onChange={handleChange}
                                value={client.telReg ?? ""}
                                sx={classes.input}
                            />

                            <OutlinedInput
                                className="tel"
                                type="number"
                                name="tel"
                                sx={classes.input}
                            />
                        </div>
                    </div>
                    <div className="formItem">
                        <label>Zona</label>
                        <div className="inputContainer">
                            <FormControl sx={{ width: "100%" }}>
                                <Select defaultValue={1} sx={classes.input}>
                                    <MenuItem value={1}>Elija una zona</MenuItem>
                                    <MenuItem value={"CABA"}>CABA</MenuItem>
                                    <MenuItem value={"GBA Norte"}>GBA Norte</MenuItem>
                                    <MenuItem value={"GBA Sur"}>GBA Sur</MenuItem>
                                    <MenuItem value={"GBA Oeste"}>GBA Oeste</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="formItem optional">
                        <p>Quiero incluir a mi pareja</p>
                        <Switch setState={setOptinals} state={optionals} name="couple" />
                    </div>
                    <div className="formItem optional">
                        <div className="formItem">
                            <label>Edad pareja</label>
                            <div className="inputContainer">
                                <OutlinedInput
                                    type="number"
                                    name="coupleAge"
                                    disabled={!optionals.couple}
                                    sx={{
                                        ...classes.input,
                                        width: '60px'
                                    }}
                                />
                            </div>
                        </div>
                        <p>Quiero incluir a mis hijos/as</p>
                    </div>
                    <div className="formItem optional">
                        <Switch setState={setOptinals} state={optionals} name="childs" />
                        <div className="formItem">
                            <label>Cantidad de hijos/as</label>
                            <div className="inputContainer">
                                <OutlinedInput
                                    type="number"
                                    name="childs"
                                    disabled={!optionals.childs}
                                    sx={{
                                        ...classes.input,
                                        width: '60px'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="formSection">
                <h3>Opciones de prepaga</h3>
                <div className="formGrid">
                    {cotizaciones.map((cotizacion, i) => {
                        return (
                            <div key={`cotizacion${i}`} className="formItem cotizacion">
                                <div className="title">Cotización {i + 1}</div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Prepaga</td>
                                            <td>{cotizacion.prepaga}</td>
                                        </tr>
                                        <tr>
                                            <td>Plan</td>
                                            <td>{cotizacion.plan}</td>
                                        </tr>
                                        <tr>
                                            <td>Monto</td>
                                            <td>${cotizacion.monto}</td>
                                        </tr>
                                        <tr>
                                            <td>Cuota</td>
                                            <td>${cotizacion.cuota}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="modalButton">
                <button className="secondaryButton">
                    Generar solicitud
                </button>
            </div>
        </div>
    )
}
export default ClientesForm
