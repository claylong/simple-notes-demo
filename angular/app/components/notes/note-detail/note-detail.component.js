export const NoteDetailComponent = {
    bindings: {
        note: '<',
        onSave: '&',
        onUpdate: '&',
        onDelete: '&'
    },
    template: require('./note-detail.html'),
    controller: class NoteDetailComponent {
        constructor(EventEmitter) {
            'ngInject';
            this.EventEmitter = EventEmitter;
        }
        $onInit() {
            this.isNewNote = !this.note.$id;
        }
        saveNote() {
            this.onSave(
                this.EventEmitter({
                    note: this.note
                })
            );
        }
        updateNote() {
            this.onUpdate(
                this.EventEmitter({
                    note: this.note
                })
            );
        }
        deleteNote() {
            this.onDelete(
                this.EventEmitter({
                    note: this.note
                })
            );
        }
    }
};