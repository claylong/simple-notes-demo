import angular from 'angular';
import { NotesListComponent } from './notes-list.component';
import { NoteDetailModule } from '../note-detail/note-detail.module';
//import './todo-form.scss';

export const NotesListModule = angular
  .module('notes.list', [
    NoteDetailModule
  ])
  .component('notesList', NotesListComponent)
  .name;