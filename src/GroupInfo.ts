export default class GroupInfo {
    public name: string = '';
    public kind: string = '';
    public id: string = '';
    public etag: string = '';
    public email: string = '';
    public directMembersCount: string = '';
    public description: string = '';
    public adminCreated: boolean = false;
    public nonEditableAliases: Array<string> = [];
    
    constructor(name: string, kind: string, id: string, etag: string, email: string, directMembersCount: string, description: string, adminCreated: boolean, nonEditableAliases: Array<string>) {
        this.name = name;
        this.kind = kind;
        this.id = id;
        this.etag = etag;
        this.email = email;
        this.directMembersCount = directMembersCount;
        this.description = description;
        this.adminCreated = adminCreated;
        this.nonEditableAliases = nonEditableAliases

    }
}