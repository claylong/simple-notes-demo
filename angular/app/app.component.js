export const AppComponent = {
  template: `
<div>
  <div class="container-fluid">
    <nav user="$ctrl.user" on-logout="$ctrl.logout();"></nav>
    <div>
      <div ui-view></div>
    </div>
  </div>
</div>
    `,
  controller: class CommonComponent {
    constructor(AuthService, $state) {
      'ngInject';
      this.authService = AuthService;
      this.state = $state;
    }

    $onInit() {
      this.user = 'clong';//this.authService.getUser();
    }

    logout() {
      this.authService.logout().then(function () {
        this.state.go('auth.login');
      });
    };
  }
};