
export const CommonComponent =
  {
    controller: class CommonComponent {
      constructor(AuthService, $state) {
        'ngInject';
        // this.authService = AuthService;
        // this.state = $state;
      }

      $onInit() {
        // this.user = AuthService.getUser();
      }

      // logout() {
      //   this.authService.logout().then(function () {
      //     this.state.go('auth.login');
      //   });
      // };
    }
  };
