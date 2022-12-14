require("dotenv").config();

const getClientId = () => {
    return process.env.ZOHO_CLIENT_ID ? process.env.ZOHO_CLIENT_ID : "";
};

const getClientSecret = () => {
    return process.env.ZOHO_CLIENT_SECRET ? process.env.ZOHO_CLIENT_SECRET : "";
};

const getPort = () => {
    return process.env.PORT ? process.env.PORT : 4545;
};

const getRedirectURI = () => {
    return process.env.REDIRECT_URI ? process.env.REDIRECT_URI : "http://localhost:3000/grant";
};

const getZohoApiVersion = () => {
    return process.env.ZOHO_API_VERSION ? process.env.ZOHO_API_VERSION : "v3";
};

const ENV = {
    ZOHO_CLIENT_ID: getClientId(),
    ZOHO_CLIENT_SECRET: getClientSecret(),
    ZOHO_API_VERSION: getZohoApiVersion(),
    PORT: getPort(),
    REDIRECT_URI: getRedirectURI(),
};
export default ENV;
