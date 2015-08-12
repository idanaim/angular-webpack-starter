/**
 * Created by idannaim on 8/11/15.
 */
import {BuildersController} from './builders.controller'

function buildersConfig($stateProvider) {
    $stateProvider.state('suppliers.builders', {
        url: '/builders',
        templateUrl: 'states/suppliers/builders/builders.html',
        controller: 'BuildersController as Builders'
    })
}
export default angular.module('suppliers.builders', [])
    .config(buildersConfig)
   .controller('BuildersController', BuildersController);