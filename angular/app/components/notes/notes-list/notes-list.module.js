import angular from 'angular';
import { NotesListComponent } from './notes-list.component';
import { NoteModule } from '../note/note.module';
import 'angular-deckgrid/angular-deckgrid.js';
import './notes-list.css';

export const NotesListModule = angular
  .module('notes.list', [
    NoteModule,
    'akoenig.deckgrid'
  ])
  .component('notesList', NotesListComponent)
  .name;