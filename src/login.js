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

  get canLogin() {
    return this.credentials.username && this.credentials.pass && !this.api.isRequesting;
  }

  login() {
    this.api.login(this.credentials)
      .then(x => this.router.navigate('ci-builds'));
  }
}
