import React, { createContext, useState } from 'react'

export const AbmGlobalContext = createContext()

const AbmContext = ({ children }) => {
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

	const [abmUser, setAbmUser] = useState(null)
	return (
		<AbmGlobalContext.Provider value={{ abmUser, setAbmUser }}>
			{children}
		</AbmGlobalContext.Provider>
	)
}

export default AbmContext
