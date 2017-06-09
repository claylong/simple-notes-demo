import angular from 'angular';
import { NotesListComponent } from './notes-list.component';
import { NoteModule } from '../note/note.module';

export const NotesListModule = angular
  .module('notes.list', [
    NoteModule
  ])
  .component('notesList', NotesListComponent)
  .name;