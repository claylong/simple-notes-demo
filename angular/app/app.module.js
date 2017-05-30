import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.css';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from './common/common.module';
import './app.css';

export const AppModule = angular
  .module('app', [
    uiRouter,
    uiBootstrap,
    CommonModule,
    ComponentsModule
  ])
  .component('app', AppComponent)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $urlRouterProvider.otherwise('/notes');
  })
  .name;