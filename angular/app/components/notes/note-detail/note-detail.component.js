export const NoteDetailComponent = {
    bindings: {
        note: '<'
    },
    template: require('./note-detail.html'),
    controller: class NoteDetailComponent {
        constructor() {
            'ngInject';
        }
        $onChanges(changes) {
            if (changes.note) {
                this.note = Object.assign({}, this.note);
            }
        }
    }
}