import GroupInfo from './GroupInfo.js';

export default class UserInfo {
    public groups: Array<GroupInfo> = [];

    constructor(groups: Array<GroupInfo>) {
        this.groups = groups;
    }
}