import { useEffect, useState } from "react"

const zones = [
    'CABA',
    'GBA Norte',
    'GBA Sur',
    'GBA Oeste'
]

const situation = [
    'Monotributista',
    'Relación de dependencia',
    'Particular'
]

const usePlan = (data) => {
    const [plan, setPlan] = useState(null)

    const fetchPlan = () => {
        fetch(`
            https://quoter.blinksalud.com/api/v1/quote
            ?firstname=${data.firstname}
            &email=${data.email}
            &phone=${data.phone}
            &age=${data.age}
            &couple=${data.couple}
            &coupleage=${data.coupleage}
            &sons=${data.sons}
            &employ=${data.employ}
            &zone=${data.zone}`)
            .then(response => response.json())
            .then(data => setPlan(data))
    }

    useEffect(() => {
        fetchPlan()
    }, [])
    
    return { plan }
}

export default usePlan