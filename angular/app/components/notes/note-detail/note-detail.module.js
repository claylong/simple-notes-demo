import angular from 'angular';
import { NoteDetailComponent } from './note-detail.component';
//import './todo-form.scss';

export const NoteDetailModule = angular
  .module('note.detail', [])
  .component('noteDetail', NoteDetailComponent)
  .name;