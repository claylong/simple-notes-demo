import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import 'angular-ui-router-uib-modal';
import { NoteEditComponent } from './note-edit.component';
import { NoteDetailModule } from '../note-detail/note-detail.module';
import { NotesService } from '../notes.service';
import './note-edit.css';

export const NoteEditModule = angular
  .module('noteEdit', [
    uiRouter,
    uiBootstrap,
    'ui.router.modal',
    NoteDetailModule,
  ])
  .component('notesEdit', NoteEditComponent)
  .service('NotesService', NotesService)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('notes.note', {
        url: '/note/:id',
        modal: ['note'],
        component: 'notesEdit',
        resolve: {
          note: ($transition$, NotesService) => {
            var key = $transition$.params().id;
            return NotesService.getNoteById(key);
          }, 
        }
      });
  })
  .name;