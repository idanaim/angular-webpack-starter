import vendors from 'vendor'
import services from 'services/services.module'
import state1Module from 'states/state1/state1.moudle'

class AppController {

  constructor() {
    this.title = 'Angular Webpack Minimal Starter';
    this.info = 'more info';
    this.version = 'my version';
  }

}
function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {
   $urlRouterProvider.otherwise('/state1/substate1');

}

angular.module('app.starter', [
    'ui.router',
    'ui.bootstrap',
    services.name,
    state1Module.name
]).config(appConfig)
  .controller('AppController', AppController);

angular.bootstrap(document, ['app.starter']);
