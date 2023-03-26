import { useEffect, useState } from "react"

const useList = (obj) => {
    const [data, setData] = useState(null)

    const fetchData = () => {
        fetch(`https://bff.blinksalud.com/api/v1/${obj}`)
            .then(response => response.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])
    
    return { [obj]: data }
}

export default useList