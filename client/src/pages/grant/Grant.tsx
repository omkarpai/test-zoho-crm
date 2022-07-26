import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AccessGrant, getAccessToken } from '../../api/GetAccessToken'

function Grant() {
    const [params] = useSearchParams()

    useEffect(() => {
        console.log(params)
        const ag = new AccessGrant(params)

        const getTOken = async () => {
            const token = await getAccessToken(ag)
            console.log(token)
        }
        getTOken()
    }, [params])

    return <div>Grant</div>
}

export default Grant
