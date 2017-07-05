export const NoteEditComponent = {
    bindings: {
        resolve: '<'
    },
    template: require('./note-edit.html'),
    controller: class NoteEditComponent {
        constructor($state, NotesService, cfpLoadingBar, $window, EventEmitter) {
            'ngInject';
            this.$state = $state;
            this.notesService = NotesService;
            this.loadingBar = cfpLoadingBar;
            this.$window = $window;
            this.EventEmitter = EventEmitter;
        }
        closeNote() {
            this.$state.go('^', {}, { reload: true });
        }
        updateNote(event) {
            this.loadingBar.start();
            this.notesService
                .updateNote(event.note)
                .then(() => {
                    this.loadingBar.complete();
                    this.closeNote();
                },
                this.loadingBar.complete);

        };
        deleteNote(event) {
            var message = 'Delete note?';
            var $state = this.$state;

            if (this.$window.confirm(message)) {
                this.loadingBar.start();
                return this.notesService
                    .deleteNote(event.note)
                    .then(() => {
                        this.loadingBar.complete();
                        this.closeNote();
                    },
                    this.loadingBar.complete);
            }
        };
    },
};