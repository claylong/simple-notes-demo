export const NotesListComponent = {
    bindings: {
        notes: '<'
    },
    template: require('./notes-list.html'),
    controller: class NotesListComponent {
        constructor($state) {
            'ngInject';
            this.state = $state;
        }
        $onChanges(changes) {
            if (changes.notes) {
                this.notes = Object.assign({}, this.notes);
            }
        }
        goToNote({note}) {
            console.log("goToNote " + note);
            this.state.go('note', {
                id: note.id
            });
        }
    }
};