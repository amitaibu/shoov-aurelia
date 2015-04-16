import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {LoginApi} from './login-api';

@inject(Router)
@inject(LoginApi)
export class App {
  constructor(router, api) {
    this.router = router;
    // this.api = api;

    this.router.configure(config => {
      config.title = 'DemoApp';
      config.map([
        { route: '',              moduleId: './no-selection',   title: 'Select'},
        { route: 'contacts/:id',  moduleId: './contact-detail' },
        { route: 'login',         moduleId: './login', nav: true }
      ]);
    });
  }
}
