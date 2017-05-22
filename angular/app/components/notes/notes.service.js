export class NotesService {

  constructor(AuthService, $http) {
    'ngInject';
    this.$http = $http;
    this.user = 'clong';//AuthService.getUser();
  }
  createNote(note) {
    return this.$http
      .post('/api/notes', note).then(response => response.data);
  }
  getNoteById(id) {
    return this.$http
      .get(`/api/notes/${id}`).then(response => response.data);
  }
  getAllNotes() {
    return this.$http
      .get('/api/notes')
      .then(response => response.data);
  }
  updateNote(note) {
    return this.$http
      .put(`/api/notes/${note.id}`, note)
      .then(response => response.data);
  }
  deleteNote(note) {
    return this.$http
      .delete(`/api/notes/${note.id}`);
  }
}