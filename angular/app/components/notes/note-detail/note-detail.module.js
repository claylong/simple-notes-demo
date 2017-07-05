import angular from 'angular';
import { NoteDetailComponent } from './note-detail.component';

export const NoteDetailModule = angular
  .module('noteDetail', [
  ])
  .component('noteDetail', NoteDetailComponent)
  .value('EventEmitter', payload => ({ $event: payload }))
  .directive('autoSize', ['$timeout', function ($timeout) {
    // adapted from conversation at https://gist.github.com/thomseddon/4703968
    return function (scope, element, attr, ctrl) {
      var minHeight;
      var $shadowtx = angular.element("<textarea class='" + attr['class'] + "'></textarea>");
      //add to element parent
      angular.element(element.parent()[0]).append($shadowtx);
      element.css({ resize: "none" }).parent().css({ position: "relative" });

      var update = function (addtext) {
        $shadowtx.val(element.val() + (addtext ? addtext : ''));
        element.css('height', Math.max($shadowtx[0].scrollHeight, minHeight) + 2 + 'px');
      };

      element.bind('keydown', function (event) {
        var keyc = event.keyCode || event.which;
        if (keyc == 13) {
          update("\n");
        }
      }).bind('keyup', function (event) {
        var keyc = event.keyCode || event.which;
        if ((keyc == 46) || (keyc == 8)) { //delete, backspace, not fired by scope.$watch
          update();
        }
      });

      $timeout(function () {
        minHeight = element[0].offsetHeight;
        $shadowtx.css({
          position: 'absolute',
          top: '-1000px',
          left: '-1000px',
          resize: 'none',
          width: element.clientWidth,
          height: element.clientHeight
        });
        update();
      }, 0);

      scope.$watch(attr['ngModel'], function (v) { update(); });
    };
  }])
  .name;