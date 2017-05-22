import angular from 'angular';
import { NotesListComponent } from './notes-list.component';
//import './todo-form.scss';

export const NotesListModule = angular
  .module('notes.list', [])
  .component('notesList', NotesListComponent)
  .name;