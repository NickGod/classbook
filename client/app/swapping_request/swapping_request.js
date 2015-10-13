'use strict';

angular.module('proApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('swapping_request', {
        url: '/swapping_request',
        templateUrl: 'app/swapping_request/swapping_request.html',
        controller: 'SwappingRequestCtrl'
      });
  });