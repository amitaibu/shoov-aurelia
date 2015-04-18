import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {LoginApi} from './login-api';

@inject(Router, LoginApi)
export class Login {

  credentials = {
    username: 'admin',
    pass: 'admin'
  }

  constructor(router, api) {
    this.router = router;
    this.api = api;
  }

  activate(params, qs, config) {
  }


  get canLogin() {
    // return this.credentials.username && this.credentials.pass && !this.api.isRequesting;
    return this.credentials.username && this.credentials.pass;
  }

  login() {
    this.api.login(this.credentials)
      .then({
        this.router.navigate('');
      });
  }
}