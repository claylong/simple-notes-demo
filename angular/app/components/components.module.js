import angular from 'angular';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';

export const ComponentsModule = angular
  .module('app.components', [
    AuthModule,
    NotesModule
  ])
  .name;
