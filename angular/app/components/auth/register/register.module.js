import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { RegisterComponent } from './register.component';

export const RegisterModule = angular
    .module('register', [
        uiRouter
    ])
    .component('register', RegisterComponent)
    // .config(($stateProvider) => {
    //     'ngInject';
    //     $stateProvider
    //         .state('auth.register', {
    //             url: '/register',
    //             component: 'register'
    //         });
    // })
    .name;
