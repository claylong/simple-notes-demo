import angular from 'angular';
import { SidebarComponent } from './sidebar.component';

export const SidebarModule = angular
  .module('sidebar', [])
  .component('sidebar', SidebarComponent)
  .name;
