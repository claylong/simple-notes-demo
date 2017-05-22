import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { AuthService } from './auth.service';
import { AuthFormModule } from './auth-form/auth-form.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';

export const AuthModule = angular
  .module('auth', [
    uiRouter,
    AuthFormModule,
    LoginModule,
    RegisterModule
  ])
  .service('AuthService', AuthService)
  .config(function () {})
  // .run(($transitions, $state, AuthService) => {
  //   $transitions.onStart({
  //     to: function (state) {
  //       return !!(state.data && state.data.requiredAuth);
  //     }
  //   }, function() {
  //     return AuthService
  //       .requireAuthentication()
  //       .catch(function () {
  //         return $state.target('auth.login');
  //       });
  //   });
  //   $transitions.onStart({
  //     to: 'auth.*'
  //   }, function () {
  //     if (false) {
  //       return $state.target('app');
  //     }
  //   });
  // })
  .name;
