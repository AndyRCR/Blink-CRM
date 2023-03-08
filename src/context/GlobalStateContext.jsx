import React, { createContext, useEffect, useState } from 'react'
import result from './ExampleResult'

export const GlobalContext = createContext()

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const stringFormatter = x => {
    return x
        .replaceAll('Ã³', 'o')
        .replaceAll('ã‘', 'ñ')
        .replaceAll('ã�', 'i')
}

const formatClinics = clinicList => {
    return clinicList === null
        ? []
        : clinicList
            .trim()
            .replaceAll('\u00cc\ufffd', '')
            .replaceAll('\u00cc\u0192', '')
            .replaceAll('\u00c3\u2018', 'Ñ')
            .replaceAll(', ', '-')
            .replaceAll('\r\n\r\n', '-')
            .replaceAll('\r\n', '-')
            .split('-')
            .map(el => {
                return el.trim().split(" ").length === 1 && el.trim().length < 6
                    ? el.trim().toUpperCase()
                    : stringFormatter(el.trim().toLowerCase()).replace(/\b\w/g, letra => letra.toUpperCase())
            })
}

const cotizedBy = ['Propio', 'Derivado', 'Mi landing', 'Cliente']
const status = ['Ingresada', 'En proceso', 'Incompleto', 'Observada']
const situation = ['Monotributista', 'Particular']
const plans = ['Plan 1000', 'Plan 2000', 'Plan 3000', 'Plan 4000', 'Plan 15 AZUL', 'Plan 55 VERDE', 'Plan 80 ORO']

const GlobalStateContext = ({ children }) => {

    /**
     * Carousel
     */
    const [results, setResults] = useState(null)
    const [resultClinics, setResultClinics] = useState(null)
    const [itemCheckeds, setItemCheckeds] = useState(0)
    const [position, setPosition] = useState(0)

    /**
     * Responsive navbar
     */
    const [isDisplayed, setIsDisplayed] = useState(false)
    const [filtersDisplayed, setFiltersDisplayed] = useState(false)
    const [responsiveMenuDisplayed, setResponsiveMenuDisplayed] = useState(false)

    /**
     *  Filters
     */
    const [filteredResults, setFilteredResults] = useState(null)
    const [clinicsFiltereds, setClinicsFiltereds] = useState([])
    const [benefitsFiltereds, setBenefitsFiltereds] = useState([])
    const [providersFiltereds, setProvidersFiltered] = useState([])
    const [minBudget, setMinBudget] = useState('')
    const [maxBudget, setMaxBudget] = useState('')
    const [orderBy, setOrderBy] = useState('default')

    /**
     * General
     */
    const [menuState, setMenuState] = useState(false)
    const [windowHeight, setWindowHeight] = useState(document.body.clientWidth)

    /**
     * Questions
     */
    const [currentLevel, setCurrentLevel] = useState(null)
    const [questionTimer, setQuestionTimer] = useState(false)
    const secondsForTest = 20

    const [user, setUser] = useState({
        id: 18,
        firstname: "Julián",
        surname: "Gómez",
        username: "Julian",
        level: 0,
        email: "test@gmail.com",
        birth: null,
        tel: null,
        telReg: '+54',
        docunent: null,
        address: null,
        status: 2
    })

    const [lastSales, setLastSales] = useState([
        { id: 1221, prepaga: 'SMG', plan: 'SMG 50', capitas: 1, titular: 'Avan Fátima', monto: '24.877' },
        { id: 1222, prepaga: 'OMINT', plan: 'PLAN 2500', capitas: 3, titular: 'Pérez Nicolás', monto: '25.770' },
        { id: 1223, prepaga: 'PREMEDIC', plan: 'PLAN C 300', capitas: 1, titular: 'Olmos Melina', monto: '16.600' },
        { id: 1224, prepaga: 'DOCTORED', plan: 'PLAN 2000', capitas: 1, titular: 'Soria Yohana', monto: '5.233' },
        { id: 1225, prepaga: 'OMINT', plan: 'PLAN 4500', capitas: 1, titular: 'Ortiz Sofía', monto: '11.636' }
    ])

    const [quotes, setQuotes] = useState([
        { id: 1, fecha: '14/11/2022', nombre: 'Buscaglia', apellido: 'Rosana Nilda', prepaga: 'OMINT', plan: 4500, capitas: 1 },
        { id: 2, fecha: '14/11/2022', nombre: 'Busca', apellido: 'Rosda', prepaga: 'OMINT', plan: 4500, capitas: 2 }
    ])

    const userStatuses = {
        nuevo: 0,
        aprobado: 1,
        completo: 2
    }

    const [clients, setClients] = useState([
        { id: '0001', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test1', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0002', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test2', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0003', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test3', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0004', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test4', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0005', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test5', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0006', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test6', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0007', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test7', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0008', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test8', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0009', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test9', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0010', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test10', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0011', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test11', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0012', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test12', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0013', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test13', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0014', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test14', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' },
        { id: '0015', cotizedBy: cotizedBy[random(0, 3)], client: 'Buscaglia test15', capitas: random(1, 5), prepaga: 'OMINT', plan: 'PLAN 4500', situation: situation[random(0, 1)], date: '14/11/2022' }
    ])

    const [ventas, setVentas] = useState([...Array(15).keys()].map((el, i) => {
        return {
            id: 3445 + i,
            status: status[random(0, 3)],
            prepaga: 'OMINT',
            plan: 'PLAN 4500',
            client: `Buscaglia test${i + 1}`,
            situation: situation[random(0, 1)],
            quote: '1.267,98',
            validityDate: '14/11/2022',
            lote: '11/2022',
            value: '24.897,73',
            commission: '7.469,32',
            capitas: 5,
            quotations: [
                { prepaga: 'DOCTORED', plan: '3000', ammount: '20.000' },
                { prepaga: 'OMINT', plan: '4021', ammount: '10.000' },
                { prepaga: 'GALENO', plan: 'ORO 550', ammount: '30.000' }
            ],
            relatives: [
                { firstName: 'Homero', lastName: 'Simson', relation: 'Pareja', document: '482354546', birthdate: '20/02/1963' },
                { firstName: 'Margaret', lastName: 'Simson', relation: 'Otro', document: '482354546', birthdate: '16/06/1973' },
                { firstName: 'Lisa', lastName: 'Simson', relation: 'Hijo/a', document: '482354546', birthdate: '23/10/2014' },
                { firstName: 'Hugo', lastName: 'Simson', relation: 'Hijo/a', document: '482354546', birthdate: '05/09/2016' }
            ]
        }
    }))

    const [clinics, setClinics] = useState(
        ['Hospital Italiano', ...[...Array(30).keys()].map(el => `Opcion ${el + 1}`)]
            .map(clinic => {
                return {
                    clinic,
                    prepagas: [
                        { logo: 'https://www.grupopremedic.com.ar/padmin/newWeb/web/images/logo_premedic.png', plans: plans },
                        { logo: 'https://repo.sancorsalud.com.ar/webinstitucional/assets/images/logo_web.svg', plans: plans },
                        { logo: 'https://autogestion.omint.com.ar/static/media/logo_omint_azul.ed33c453.svg', plans: plans }
                    ]
                }
            })
    )

    const obtainResults = () => {
        let resultArr = []
        let clinicArr = []

        result.forEach(arr => arr.forEach(el => resultArr.push(el)))
        let newArr = resultArr.map((el, index) => { return { ...el, clinics: formatClinics(el.clinics), pos: index } })
        setResults(newArr)

        newArr.forEach(el => el.clinics.forEach(clinic => clinicArr.push(clinic)))
        setResultClinics(Array.from(new Set(clinicArr)).sort())
    }

    const [tests, setTests] = useState([
        { approbed: false, attempts: 0, date: null },
        { approbed: false, attempts: 0, date: null },
        { approbed: false, attempts: 0, date: null },
        { approbed: false, attempts: 0, date: null },
        { approbed: false, attempts: 0, date: null },
        { approbed: false, attempts: 0, date: null },
        { approbed: false, attempts: 0, date: null }
    ])


    const handleResize = () => setWindowHeight(document.body.clientWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

        // eslint-disable-next-line
    }, [])

    return (
        <GlobalContext.Provider
            value={{
                userStatuses,
                user, setUser,
                lastSales, setLastSales,
                quotes, setQuotes,
                clients, setClients,
                clinics, setClinics,
                menuState, setMenuState,
                results, setResults,
                resultClinics, setResultClinics,
                itemCheckeds, setItemCheckeds,
                position, setPosition,
                isDisplayed, setIsDisplayed,
                filtersDisplayed, setFiltersDisplayed,
                filteredResults, setFilteredResults,
                clinicsFiltereds, setClinicsFiltereds,
                benefitsFiltereds, setBenefitsFiltereds,
                providersFiltereds, setProvidersFiltered,
                minBudget, setMinBudget,
                maxBudget, setMaxBudget,
                orderBy, setOrderBy,
                ventas, setVentas,
                tests, setTests,
                obtainResults,
                questionTimer, setQuestionTimer,
                currentLevel, setCurrentLevel,
                secondsForTest, windowHeight,
                responsiveMenuDisplayed, setResponsiveMenuDisplayed
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalStateContext