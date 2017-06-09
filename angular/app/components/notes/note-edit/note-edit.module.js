import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { NoteEditComponent } from './note-edit.component';
import { NoteDetailModule } from '../note-detail/note-detail.module';
import { NotesService } from '../notes.service';

export const NoteEditModule = angular
  .module('notes.edit', [
    uiRouter,
    NoteDetailModule
  ])
  .component('notesEdit', NoteEditComponent)
  .service('NotesService', NotesService)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
      .state('note', {
        url: '/note/:id',
        component: 'notesEdit',
        resolve: {
          note: ($transition$, NotesService) => {
            var key = $transition$.params().id;
            return NotesService.getNoteById(key);
          }
        }
      });
  })
  .name;