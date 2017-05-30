import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loadingBar from 'angular-loading-bar';
import 'angular-loading-bar/build/loading-bar.css';
import { CommonComponent } from './common.component';
import { NavModule } from './nav/nav.module';
// import { SidebarModule } from './sidebar/sidebar.module';

export const CommonModule = angular
  .module('app.common', [
    uiRouter,
    loadingBar,
    NavModule,
    // SidebarModule
  ])
  .component('app.common', CommonComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('app', {
        redirectTo: 'notes',
        url: '/app',
        // data: {
        //   requiredAuth: true
        // },
        component: 'app.common'
      })
  })
  .config((cfpLoadingBarProvider) => {
    'ngInject';
    cfpLoadingBarProvider.includeSpinner = false;
  })
  .run(($transitions, cfpLoadingBar) => {
    'ngInject';
    $transitions.onStart({}, cfpLoadingBar.start);
    $transitions.onSuccess({}, cfpLoadingBar.complete);
  })
  .name;