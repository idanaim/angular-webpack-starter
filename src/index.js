import angular from 'angular';
import styles  from 'index.css';
import config  from 'index.json';

class AppController {

  constructor() {
    this.title = 'Angular Webpack Minimal Starter';
    this.info = angular.version;
    this.version = config.version;
  }

}

angular.module('app.starter', [])
  .controller('AppController', AppController);

angular.bootstrap(document, ['app.starter']);
