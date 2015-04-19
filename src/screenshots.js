import {inject} from 'aurelia-framework';
import {BuildsApi} from './services/builds-api';
import {ScreenshotsApi} from './services/screenshots-api';

@inject(BuildsApi, ScreenshotsApi)
export class Screenshots {

  constructor(buildsApi, screenshotsApi) {
    this.buildsApi = buildsApi;
    this.screenshotsApi = screenshotsApi;
  }

  activate(params, queryString, routeConfig) {
    var buildId = params.id;
    this.buildsApi.get(buildId)
      .then(response => {
        var data = JSON.parse(response.response).data;
        this.build = data[0];
      });

    this.screenshotsApi.get(buildId)
      .then(response => {
        var data = JSON.parse(response.response).data;
        this.screenshots = data;
      });

    this.showDiff = false;  
  }


}
