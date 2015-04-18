import {inject} from 'aurelia-framework';
import {BuildsApi} from './services/builds-api';

@inject(BuildsApi)
export class CiBuilds {

  constructor(buildsApi) {
    this.buildsApi = buildsApi;

    var self = this;
    buildsApi.getBuilds()
      .then(response => {
        var data = JSON.parse(response.response).data;
        self.builds = data;
      });
  }


}
