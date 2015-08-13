/**
 * Created by idannaim on 8/11/15.
 */
import {Substate2Controller} from './substate2.controller'

function buildersConfig($stateProvider) {
    $stateProvider.state('state1.substate2', {
        url: '/substate2',
        templateUrl: 'states/state1/substate2/substate2.html',
        controller: 'Substate2Controller as Substate2'
    })
}
export default angular.module('state1.substate2', [])
    .config(buildersConfig)
   .controller('Substate2Controller', Substate2Controller);