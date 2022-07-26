import axios from 'axios'
import { useEffect, useState } from 'react'

interface GetLoginLinkResponse {
    link: string
}

const getLoginLink = async () => {
    const res = await axios.request<GetLoginLinkResponse>({
        method: 'get',
        url: '/auth/login',
    })
    return res.data
}

const useLoginLink = () => {
    const [loginLink, setloginLink] = useState('')
    useEffect(() => {
        const callApi = async () => {
            const loginLinkResponse = await getLoginLink()
            setloginLink(loginLinkResponse.link)
        }
        callApi()
    }, [])
    return loginLink
}

export { getLoginLink, useLoginLink }
