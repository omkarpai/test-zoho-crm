import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

class AccessGrant {
    code: string | undefined

    location: string | undefined

    accountsServer: string | undefined

    constructor(paramMap: Map<string, string>) {
        this.code = paramMap.get('code')
        this.location = paramMap.get('location')
        this.accountsServer = paramMap.get('accounts-server')
    }
}

function Grant() {
    const [params] = useSearchParams()

    useEffect(() => {
        const paramMap = new Map()
        params.forEach((value, key) => {
            paramMap.set(key, value)
        })
        const ag = new AccessGrant(paramMap)
        console.log(ag)
    }, [params])

    return <div>Grant</div>
}

export default Grant
