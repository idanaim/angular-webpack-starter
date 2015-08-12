/**
 * Created by idannaim on 8/11/15.
 */

import Builders   from './builders/builders.moudle';


import {SuppliersController} from './supplier.controller';

function adminConfig($stateProvider) {
    $stateProvider
        .state('suppliers', {
            url: '/suppliers',
            parent: 'app-layout',
            templateUrl: "states/suppliers/suppliers.html",
            controller: 'SuppliersController as Supplier'
        })
}

export default angular.module('suppliers.module', [
    'ui.router',
    Builders.name
])
    .config(adminConfig)
    .controller('SuppliersController', SuppliersController)