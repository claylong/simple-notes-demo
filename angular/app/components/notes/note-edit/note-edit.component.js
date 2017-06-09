export const NoteEditComponent = {
    bindings: {
        note: '<'
    },
    template: require('./note-edit.html'),
    controller: class NoteEditComponent {
        constructor($state, NotesService, cfpLoadingBar, $window) {
            'ngInject';
            this.$state = $state;
            this.notesService = NotesService;
            this.loadingBar = cfpLoadingBar;
            this.$window = $window;
        }
        updateNote(event) {
            this.loadingBar.start();
            return this.notesService
                .updateNote(event.note)
                .then(this.loadingBar.complete, this.loadingBar.complete);
        };
        deleteNote(event) {
            var message = 'Delete note?';
            var $state = this.$state;
            
            if (this.$window.confirm(message)) {
                return this.notesService
                    .deleteNote(event.note)
                    .then(() => {
                        $state.go('notes');
                    });
            }
        };
    }
};