import {EntityBaseService} from './base/entity-base.service';
import { HttpRequestService } from './base/http-request.service';
import { HttpOptions, HttpHeader } from '../models/base/http.model';

const superClass = new EntityBaseService('api/user');
export class UserInfoBusiness extends EntityBaseService {
  constructor(){
    super('api/user/');
  }
  static login(loginName, loginPassword){
    if(!loginName || !loginPassword) {
      return new Promise(function(resolve,reject){
        reject('Please input required fields.');
      })
    }
    const options = new HttpOptions(superClass.restapibase + 'login', null,
      [new HttpHeader('loginName',loginName), new HttpHeader('password',loginPassword)]);
    options.skipValidation = true;
    return HttpRequestService.post(options);
  }
}
