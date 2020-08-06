import axios from 'axios';
import { BaseInfoService } from '../base-info.service';
import { SERVERINFO } from '../../constants/server-info';
import { MockUrl } from './mock-url';
import router from '../../router';

export class HttpRequestService {
  constructor(){
    this._redirected = false;
  }
  static checkClientToken(params){
    const user = BaseInfoService.getUser();
    if(!params.skipValidation && (!user || !user.token) && !this._redirected && window.location.hash.toLowerCase().indexOf('/login/') === -1 ){
      this._redirected = true;
      router.push({name:'login',params:{url: encodeURIComponent(window.location.href)}});
    }
    this._redirected = false;
    return true;
  }
  static post(params){
    if(!this.checkClientToken(params)) {
      return ;
    }
    if(!SERVERINFO.serverIP){
      MockUrl.mockData(params);
      return this.apiAxios('GET',params.url,params)
    }
    if(!this.HandleRequest(params)){
      return new Promise(function(resolve,reject){
        reject();
      })
    }
    return this.apiAxios('POST',params.url,params);
  }
  static apiAxios(method,url,params){
    let headers = {};
    if(params.headers){
      params.headers.forEach(element => {
        headers[element.name] = element.value;
      });
    }
    const promise = new Promise(function(resolve,reject){
      if(params){
        params = filterNull(params);
      }
      axios({
        method:method,
        baseURL: SERVERINFO.serverIP,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params.body : null,
        params: method === 'GET' || method === 'DELETE' ? params.params : null,
        withCredentials: false,
        headers: headers
      }).then((res)=>{
        if(res.code === 200 ){
          resolve(res.data)
        }else {
          resolveError(res);
          reject(res.data);
        }
      }).catch((err)=> {
        resolveError(err);
        reject((err.response && err.response.data) ? err.response.data : err.response);
      });
    });
    return promise;

    function filterNull(o){
      for(const key in o){
        if(o[key] === null) {
          delete o[key];
        }
        if (toType(o[key]) === 'string'){
          o[key] = o[key].trim();
        }
        else if (toType(o[key]) === 'object'){
          o[key] = filterNull(o[key]);
        }
        else if (toType(o[key]) === 'array'){
          o[key] = filterNull(o[key]);
        }
      }
      return o;
    }
    function toType(obj) {
      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    function resolveError(err) {
      if (err.status === 401 || err.status === 0 || err.toString().toLowerCase().indexOf('401') > -1) {
        const userInfo = JSON.parse(LocalDataService.cookieGet('userInfo'));
        if (userInfo && userInfo.token) {
          userInfo.token = '';
          LocalDataService.cookieSet('userInfo', JSON.stringify(userInfo));
        }
        if (!HttpRequestService._redirected && window.location.hash.toLowerCase().indexOf('/login/') === -1) {
          HttpRequestService._redirected = true;
          router.push({ name: 'login', params: { url: encodeURIComponent(window.location.href) } });
        }
      }
      console.log('error as follows:');
      console.log(err);
    }
  }
}
