export const SidebarComponent = {
  template: require('./sidebar.html'),
  controller: class SidebarComponent {
    constructor() {
      'ngInject';
    }
    $onInit() {
      this.noteTags = [{
        label: 'All',
      }, {
        label: 'Personal',
      }, {
        label: 'Work',
      }, {
        label: 'Todo',
      }, {
        label: 'Shared',
      }];
    }
  }
};