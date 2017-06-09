import angular from 'angular';
import { NoteComponent } from './note.component';
import './note.css';

export const NoteModule = angular
  .module('note', [])
  .component('note', NoteComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .name;