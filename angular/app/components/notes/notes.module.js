import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { NotesComponent } from './notes.component';
import { NotesService } from './notes.service';
import { NotesListModule } from './notes-list/notes-list.module';
import { NoteEditModule } from './note-edit/note-edit.module';
import './notes.css';

export const NotesModule = angular
  .module('notes', [
    uiRouter,
    NotesListModule,
    NoteEditModule
  ])
  .component('notes', NotesComponent)
  .service('NotesService', NotesService)
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';
    $stateProvider
      .state('notes', {
        url: '/notes',
        component: 'notes',
        resolve: {
          notes: NotesService => NotesService.getAllNotes()
        }
      });
  })
  .name;