import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { LoginComponent } from './login.component';

export const LoginModule = angular
    .module('login', [])
    .component('login', LoginComponent)
    // .config(($stateProvider, $urlRouterProvider) => {
    //     'ngInject';
    //     $stateProvider
    //         .state('auth', {
    //             redirectTo: 'auth.login',
    //             url: '/auth',
    //             template: '<div ui-view></div>'
    //         })
    //         .state('auth.login', {
    //             url: '/login',
    //             component: 'login'
    //         });
    //     $urlRouterProvider.otherwise('/auth/login');
    // })
    .name;
