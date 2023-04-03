import React, { createContext, useState } from 'react'

export const UserGlobalContext = createContext()

const UserContext = ({ children }) => {

    // const [user, setUser] = useState({
    //     id: 18,
    //     firstname: "Julián",
    //     surname: "Gómez",
    //     username: "Julian",
    //     level: 0,
    //     email: "test@gmail.com",
    //     birth: null,
    //     tel: null,
    //     telReg: '+54',
    //     docunent: null,
    //     address: null,
    //     status: 2
    // })

    const userStatuses = {
        nuevo: 0,
        aprobado: 1,
        completo: 2
    }

    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

    return (
        <UserGlobalContext.Provider
            value={{user, setUser, userStatuses}}
        >
            {children}
        </UserGlobalContext.Provider>
    )
}

export default UserContext