
export const AuthFormComponent = {
  bindings: {
    user: '<',
    button: '@',
    message: '@',
    onSubmit: '&'
  },
  template: require('./auth-form.html'),
  controller: class AuthFormComponent {
    constructor() {
      'ngInject';

      function AuthFormController() {
        var ctrl = this;
        ctrl.$onChanges = function (changes) {
          if (changes.user) {
            ctrl.user = angular.copy(ctrl.user);
          }
        };
      }
    }

    submitForm() {
      ctrl.onSubmit({
        $event: {
          user: ctrl.user
        }
      });
    }
  }
};
