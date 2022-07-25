enum ModulePermission {
    ALL,
    READ,
    CREATE,
    UPDATE,
    DELETE,
}

class Module {
    apiName: string;
    scope: string;

    constructor(apiName: string, permission: ModulePermission) {
        this.apiName = apiName;
        this.scope = `modules.${apiName.toLowerCase()}.${ModulePermission[permission]}`;
        if (!apiName) this.scope = `modules.${ModulePermission[ModulePermission.ALL]}`;
    }
}

export class Modules {
    public static readonly ALL = new Module("", ModulePermission.ALL);
    public static readonly LEADS_ALL = new Module("Leads", ModulePermission.ALL);
}
