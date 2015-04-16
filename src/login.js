import {inject} from 'aurelia-framework';
import {LoginApi} from './login-api';

@inject(LoginApi)
export class Login {

  credentials = {
    username: 'admin',
    pass: 'admin'
  }

  constructor(api){
    this.api = api;
  }

  activate(params, qs, config) {
  }


  get canLogin() {
    return this.credentials.username && this.credentials.pass && !this.api.isRequesting;
  }

  login() {

  }
}
