/**
 * Created by idannaim on 8/11/15.
 */
import {Substate1Controller} from './substate1.controller'

function buildersConfig($stateProvider) {
    $stateProvider.state('state1.substate1', {
        url: '/substate1',
        templateUrl: 'states/state1/substate1/substate1.html',
        controller: 'Substate1Controller as Substate1'
    })
}
export default angular.module('state1.substate1', [])
    .config(buildersConfig)
   .controller('Substate1Controller', Substate1Controller);