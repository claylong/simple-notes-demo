export const SidebarComponent = {
  template: require('./sidebar.html'),
  controller: class SidebarComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
      this.contactTags = [{
        label: 'All contacts',
        icon: 'star',
        state: 'none'
      }, {
        label: 'Friends',
        icon: 'people',
        state: 'friends'
      }, {
        label: 'Family',
        icon: 'child_care',
        state: 'family'
      }, {
        label: 'Acquaintances',
        icon: 'accessibility',
        state: 'acquaintances'
      }, {
        label: 'Following',
        icon: 'remove_red_eye',
        state: 'following'
      }];
    }
  }
};