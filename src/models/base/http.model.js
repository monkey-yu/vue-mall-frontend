export class HttpOptions {
  constructor(url = null, body = null, headers = null){
    this.url = url;
    this.body = body;
    thid.headers = headers;
    this.params = null;
    this.skipValidation = false;
    this.success = null;
    this.fail = null;
  }
}
export class HttpHeader {
  constructor(name,value){
    this.name=name;
    this.value = value;
  }
}
