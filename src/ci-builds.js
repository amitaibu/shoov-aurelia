import {inject} from 'aurelia-framework';
import {ReposApi} from './services/repos-api';

@inject(ReposApi)
export class CiBuilds {

  constructor(reposApi) {
    this.reposApi = reposApi;
  }

  activate(params, qs, config) {
    this.reposApi.get()
      .then(response => {
        var data = JSON.parse(response.response).data;
        this.repos = data;
      });
  }


}
