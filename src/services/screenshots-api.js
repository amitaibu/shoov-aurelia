import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class ScreenshotsApi {
  baseUri = 'http://localhost/shoov/www'

  constructor(http){
    this.http = http;
  }

  get(buildId) {
    this.isRequesting = true;


    var params = {
      'sort': '-id',
      'filter[build]': buildId,
    };

    return this.http
    .configure(x => {
      x.withBaseUri(this.baseUri);
      x.withHeader('access-token', localStorage.getItem('access_token'));
    })
    .get('api/screenshots', params);
  }
}
