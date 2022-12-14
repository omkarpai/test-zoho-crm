import axios from "axios";
import FormData from "form-data";
import ENV from "../../env";
import { Modules } from "./Modules";

const serviceName = "ZohoCRM";

export interface AccessGrant {
    code: string;
    location: string;
    accountsServer: string;
}

interface GetAccessTokenResponse {
    access_token: string;
    refresh_token: string;
    api_domain: string;
    token_type: string;
    expires_in: number;
}

interface AccessDetails {
    accessToken: string;
    apiDomain: string;
}

const getScope = () => {
    return `${serviceName}.${Modules.LEADS_ALL.scope},${serviceName}.users.ALL`;
};

const getLoginLink = () => {
    const scope = getScope();
    const clientId = ENV.ZOHO_CLIENT_ID;
    const responseType = "code";
    const accessType = "online";
    const redirectUri = ENV.REDIRECT_URI;
    return `https://accounts.zoho.com/oauth/v2/auth?scope=${scope}&client_id=${clientId}&response_type=${responseType}&access_type=${accessType}&redirect_uri=${redirectUri}`;
};

const getZohoAccessToken = async (ag: AccessGrant) => {
    try {
        const data = new FormData();
        data.append("grant_type", "authorization_code");
        data.append("client_id", ENV.ZOHO_CLIENT_ID);
        data.append("client_secret", ENV.ZOHO_CLIENT_SECRET);
        data.append("redirect_uri", ENV.REDIRECT_URI);
        data.append("code", ag.code);
        const res = await axios.request<GetAccessTokenResponse>({
            method: "post",
            baseURL: ag.accountsServer,
            url: "/oauth/v2/token",
            data,
        });
        return res.data;
    } catch (e: any) {
        console.log(e);
        return e.toJSON();
    }
};

interface GetRecordsQueryParams {
    fields: Array<String>;
    cvid: number;
    page: number;
    per_page: number;
    page_token: number;
    sort_order: string;
    sort_by: string;
    converted: string;
    territory_id: number;
    include_child: boolean;
}

// Module APIs
// Leads module
const getRecords = async (ad: AccessDetails) => {};

export { getLoginLink, getZohoAccessToken };
