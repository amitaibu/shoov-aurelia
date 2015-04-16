import {inject} from 'aurelia-framework';
import {LoginApi} from './login-api';

@inject(LoginApi)
export class Login {
  username = '';
  pass = 'bar';

  constructor(api){
    this.api = api;
  }

  activate(params, qs, config) {
  }


  get canLogin() {
    return this.username && this.pass && !this.api.isRequesting;
  }

  login() {

  }
}
