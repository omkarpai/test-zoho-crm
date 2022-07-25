import ENV from "../../env";
import { Modules } from "./Modules";

const serviceName = "ZohoCRM";

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

export { getLoginLink };
