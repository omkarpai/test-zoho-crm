import { URLSearchParams } from 'url'
import axios from 'axios'

export class AccessGrant {
    code: string | undefined

    location: string | undefined

    accountsServer: string | undefined

    constructor(params: URLSearchParams) {
        const paramMap = new Map()
        params.forEach((value, key) => {
            paramMap.set(key, value)
        })
        this.code = paramMap.get('code')
        this.location = paramMap.get('location')
        this.accountsServer = paramMap.get('accounts-server')
    }
}

interface GetAccessTokenResponse {
    access_token: string
    refresh_token: string
    api_domain: string
    token_type: string
    expires_in: number
}

const getAccessToken = async (grant: AccessGrant) => {
    const res = await axios.request<GetAccessTokenResponse>({
        method: 'get',
        url: '/auth/access-token',
        params: grant,
    })
    return res.data
}

export { getAccessToken }
