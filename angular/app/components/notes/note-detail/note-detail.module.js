import angular from 'angular';
import { NoteDetailComponent } from './note-detail.component';

export const NoteDetailModule = angular
  .module('noteDetail', [
  ])
  .component('noteDetail', NoteDetailComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;