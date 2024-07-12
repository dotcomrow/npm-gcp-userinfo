import GCPUserInfo from '../src/GCPUserInfo.js';
import { GCPAccessToken } from 'npm-gcp-token';
import * as fs from 'fs';

const keyFilePath = '/Users/admin/secrets/google.key'; // replace with the path to your service account key file
const keyFileContent = fs.readFileSync(keyFilePath, 'utf8');

var accessToken = new GCPAccessToken(keyFileContent);
var token = await accessToken.getAccessToken('openid profile email https://www.googleapis.com/auth/admin.directory.group.readonly');

console.log(await GCPUserInfo.getUserInfo(token.access_token, "113903586019246158170", "suncoast.systems"))
