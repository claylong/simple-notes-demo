export const AppComponent = {
  template: `
<div>
  <nav user="$ctrl.user" on-logout="$ctrl.logout();"></nav>
  <sidebar></sidebar>
  <div>
    <div ui-view></div>
  </div>
</div>
    `
};