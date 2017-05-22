import angular from 'angular';
import { AuthFormComponent } from './auth-form.component.js';

export const AuthFormModule = angular
  .module('authForm', [])
  .component('authForm', AuthFormComponent)
  .name;
