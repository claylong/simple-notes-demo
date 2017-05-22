export const NotesListComponent = {
    bindings: {
        notes: '<'
    },
    template: require('./notes-list.html'),
    controller: class NotesListComponent {
        constructor() {
            'ngInject';
        }
        $onChanges(changes) {
            if (changes.notes) {
                this.notes = Object.assign({}, this.notes);
            }
        }
    }
}