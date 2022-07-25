import ENV from "../../env";
import { getScope } from "./ScopeHelper";

const getLoginLink = () => {
    const scope = getScope();
    const clientId = ENV.ZOHO_CLIENT_ID;
    const responseType = "code";
    const accessType = "online";
    const redirectUri = ENV.REDIRECT_URI;
    return `https://accounts.zoho.com/oauth/v2/auth?scope=${scope}&client_id=${clientId}&response_type=${responseType}&access_type=${accessType}&redirect_uri=${redirectUri}`;
};

export { getLoginLink };
