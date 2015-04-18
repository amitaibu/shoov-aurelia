import {inject} from 'aurelia-framework';
import {Router, Redirect} from 'aurelia-router';
import {LoginApi} from './login-api';
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

@inject(Router)
@inject(LoginApi)
export class App {
  constructor(router, api) {
    this.router = router;
    this.api = api;

    this.router.configure(config => {
      config.title = 'DemoApp';
      // Add a route filter to the authorize extensibility point.
      config.addPipelineStep('authorize', AuthorizeStep);
      config.map([
        { route: '',              moduleId: './no-selection',   title: 'Select'},
        { route: 'contacts/:id',  moduleId: './contact-detail' },
        { route: 'login',         moduleId: './login', nav: true},
        { route: 'ui-builds',     moduleId: './ui-builds', nav: true, title: 'UI-Builds', auth: true},
        { route: 'screenshots/:id', moduleId: './screenshots', title: 'Regression screenshots', auth: true}
      ]);
    });
  }
}

class AuthorizeStep {
  run(routingContext, next) {
    // Check if the route has an "auth" key
    // The reason for using `nextInstructions` is because
    // this includes child routes.
    if (routingContext.nextInstructions.some(i => i.config.auth)) {
      var isLoggedIn = localStorage.getItem('access_token');
      if (!isLoggedIn) {
        return next.cancel(new Redirect('login'));
      }
    }

    return next();
  }
}
