import { LocalDataService } from '../utils';

export class BaseInfoService {
  static getUser() {
    let userInfo;
    try {
      if (LocalDataService.cookieGet('userInfo')) {
        userInfo = JSON.parse(LocalDataService.cookieGet('userInfo'));
      }
      if (!userInfo || !userInfo.token) {
        return null;
      } else {
        userInfo.expire = ((new Date()).valueOf() + 60 * 60 * 1000);
        LocalDataService.cookieSet('userInfo', JSON.stringify(userInfo), (60 * 60).toString());
        return userInfo;
      }
    } catch (ex) { }
    return userInfo;
  }
}
