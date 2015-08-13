/**
 * Created by idannaim on 8/11/15.
 */
//substates
import Substate1   from './substate1/substate1.moudle';
import Substate2   from './substate2/substate2.moudle';
//current controller
import {State1Controller} from './state1.controller';

function adminConfig($stateProvider) {
    $stateProvider
        .state('state1', {
            url: '/state1',
            templateUrl: "states/State1/State1.html",
            controller: 'State1Controller as State1'
        })
}

export default angular.module('state1.module', [
    'ui.router',
    Substate1.name,
    Substate2.name
])
    .config(adminConfig)
    .controller('State1Controller', State1Controller)