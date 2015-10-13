'use strict';

angular.module('proApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('user_profile', {
        url: '/user_profile',
        templateUrl: 'app/user_profile/user_profile.html',
        controller: 'UserProfileCtrl'
      });
  });