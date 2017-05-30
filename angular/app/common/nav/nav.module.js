import angular from 'angular';
import { NavComponent } from './nav.component';
import './nav.css';

export const NavModule = angular
  .module('nav', [])
  .component('nav', NavComponent)
  .name;
