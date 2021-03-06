export const NoteComponent = {
    bindings: {
        note: '<',
        onSelect: '&'
    },
    template: require('./note.html'),
    controller: class NoteComponent {
        constructor(EventEmitter) {
            'ngInject';
            this.EventEmitter = EventEmitter;
        }
        $onChanges(changes) {
            if (changes.note) {
                this.note = Object.assign({}, this.note);
            }
        }
        selectNote() {
            this.onSelect(
                this.EventEmitter({
                    note: this.note
                })
            );
        }
    }
};