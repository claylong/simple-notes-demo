import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loadingBar from 'angular-loading-bar';
//import { CommonComponent } from './common.component';
import { NavModule } from './nav/nav.module';
import { SidebarModule } from './sidebar/sidebar.module';

export const CommonModule = angular
  .module('app.common', [
    uiRouter,
    loadingBar,
    NavModule,
    SidebarModule
  ])
  //.component('app.common', CommonComponent)
  .config(['$stateProvider', ($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('app', {
        redirectTo: 'notes',
        url: '/app',
        data: {
          requiredAuth: true
        },
        component: 'app'
      })
  }])
  // .run(['$transitions', function ($transitions, cfpLoadingBar) {
  //   $transitions.onStart({}, cfpLoadingBar.start);
  //   $transitions.onSuccess({}, cfpLoadingBar.complete);
  // }])
  .name;
