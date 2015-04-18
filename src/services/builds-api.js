import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class BuildsApi {
  baseUri = 'http://localhost/shoov/www'


  constructor(http){
    this.http = http;
  }

  getBuilds() {
    return this.http
    .configure(x => {
      x.withBaseUri(this.baseUri);
      x.withHeader('access-token', localStorage.getItem('access_token'));
    })
    .get('api/builds');
  }
}
