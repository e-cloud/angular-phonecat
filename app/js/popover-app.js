var app = angular.module('mgcrea.ngStrapDocs', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);

app.controller('MainCtrl', function ($scope) {});

'use strict';

angular.module('mgcrea.ngStrapDocs')

.config(function ($popoverProvider) {
  angular.extend($popoverProvider.defaults, {
    html: true,
    animation: 'am-flip-x',
    trigger: 'hover'
  });
})

.controller('PopoverDemoCtrl', function ($scope) {

  $scope.popover = {
    title: 'Title',
    content: 'Hello Popover<br />This is a multiline message!'
  };

  // Controller usage example
  /*
  var myPopover = $popover(angular.element(document.querySelector('#test')), {title: 'Title', content: 'Hello Popover<br />This is a multiline message!', placement: 'right'});
  $scope.showTooltip = function() {
    myPopover.$promise.then(myPopover.show);
  };
  $scope.hideTooltip = function() {
    myPopover.$promise.then(myPopover.hide);
  };
  */

});