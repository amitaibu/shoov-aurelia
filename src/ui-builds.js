import {inject} from 'aurelia-framework';
import {BuildsApi} from './services/builds-api';

@inject(BuildsApi)
export class CiBuilds {

  constructor(buildsApi) {
    this.buildsApi = buildsApi;

    var self = this;

  }

  activate(params, qs, config) {
    this.buildsApi.get()
      .then(response => {
        var data = JSON.parse(response.response).data;
        this.builds = data;
      });
  }


}
