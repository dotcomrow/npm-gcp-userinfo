import axios, { AxiosResponse } from 'axios';
import UserInfo from './UserInfo.js';
import GroupInfo from './GroupInfo.js'

export default class GCPUserInfo {
  public static async getUserInfo(accessToken: string, userId: string, domain: string): Promise<any> {
    const url = `https://admin.googleapis.com/admin/directory/v1/groups?userKey=${userId}&domain=${domain}`;    

    try {
      return this.processResponse(await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }));
    } catch (error) {
      console.error(`Error fetching user info`, (error as any).response?.data || (error as any).message);
    }
  }

  private static processResponse(response: AxiosResponse<any>): any {
    if (response.status !== 200) {
      throw new Error(`Unexpected response status: ${response.status}`);
    }

    if (!response.data) {
      throw new Error('No data received');
    }

    if (!response.data.groups) {
      throw new Error('No groups found');
    }

    var groups: Array<GroupInfo> =  [];
    response.data.groups.forEach((group: any) => {
      groups.push(new GroupInfo(
        group.name,
        group.kind,
        group.id,
        group.etag,
        group.email,
        group.directMembersCount,
        group.description,
        group.adminCreated,
        group.nonEditableAliases));
    });

    return new UserInfo(groups);
  }
}
