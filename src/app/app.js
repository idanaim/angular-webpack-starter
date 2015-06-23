import angular     from 'angular';
import appStyle    from 'app/app.less';
import appTemplate from 'app/app.html';
import appConfig   from 'app/app.json';

// module definition
export default angular.module('app.starter', [])
  .directive('app', appDirective);

// app directive factory function
function appDirective() {
  return {
    restrict: 'E',
    template: appTemplate,
    controller: AppController,
    controllerAs: 'app'
  }
}

// app directive controller
class AppController {

  constructor() {
    this.title = appConfig.PAGE_TITLE;
  }

}

angular.bootstrap(document, ['app.starter']);
