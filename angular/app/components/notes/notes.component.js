export const NotesComponent = {
  bindings: {
    notes: '<'
  },
  template: require('./notes.html'),
  controller: class NotesComponent {
    constructor(NotesService) {
      'ngInject';
      this.notesService = NotesService;
    }
    $onInit() {
      this.newNote = {
        title: '',
        selected: false
      };
      // this.notes = [];
      // this.notesService.getAllNotes().then(response => this.notes = response);
    }
    $onChanges(changes) {
      if (changes.notes) {
        this.notes = Object.assign({}, this.notes);
      }
    }
    addNote({ note }) {
      if (!note) return;
      this.notes.unshift(note);
      this.newNote = {
        title: '',
        selected: false
      };
    }
  }
};