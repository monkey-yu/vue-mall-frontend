export class LocalDataService {
  /** cookie functions start */
  static cookieGet(name) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (arr && arr.length > 1) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }

  static cookieRemove(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1000);
    var cval = this.cookieGet(name);
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
    }
  }

  /** expire: minutes */
  static cookieSet(name, value, expire = 60) {
    var exp = new Date();
    exp.setTime(exp.getTime() + expire * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
  }
  /** cookie functions end */

  /** localStorage start */
  static localStorageGetItem(name) {
    let data = localStorage.getItem(name);
    if (data) {
      try {
        data = JSON.parse(data);
      } catch (err) {}
    }
    return data;
  }

  static localStorageRemoveItem(name) {
    return localStorage.removeItem(name);
  }

  static localStorageSetItem(name, val) {
    if (val) {
      try {
        val = JSON.stringify(val);
      } catch (err) {}
    } else {
      val = '';
    }
    return localStorage.setItem(name, val);
  }
  /** localStorage end */
}
