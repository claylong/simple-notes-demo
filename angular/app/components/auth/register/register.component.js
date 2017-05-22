import { AtuhService } from '../auth.service';

export const RegisterComponent = {
  template: require('./register.html'),
  controller: class RegisterComponent {

    constructor(AuthService, $state) {
      'ngInject';
      this.authService = AuthService;
      this.$state = $state;
    }

    $onInit() {
      this.error = null;
      this.user = {
        email: '',
        password: ''
      };
    }

    createUser(event) {
      return AuthService
        .register(event.user)
        .then(function () {
          $state.go('app');
        }, function (reason) {
          this.error = reason.message;
        });
    }
  }
};



