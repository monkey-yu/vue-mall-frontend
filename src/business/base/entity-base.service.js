import { HttpRequestService } from './http-request.service';
import { HttpOptions } from '../../models/base/http.model';

export class EntityBaseService {
  constructor(_restapibase){
    this.restapibase = _restapibase;
  }

}
