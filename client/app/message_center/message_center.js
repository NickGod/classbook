'use strict';

angular.module('proApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('message_center', {
        url: '/message_center',
        templateUrl: 'app/message_center/message_center.html',
        controller: 'MessageCenterCtrl'
      });
  });