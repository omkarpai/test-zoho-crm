import { Modules } from "./Modules";

const serviceName = "ZohoCRM";

const getScope = () => {
    return `${serviceName}.${Modules.LEADS_ALL.scope},${serviceName}.users.ALL`;
};

export { getScope };
