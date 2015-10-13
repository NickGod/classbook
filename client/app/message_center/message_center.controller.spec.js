'use strict';

describe('Controller: MessageCenterCtrl', function () {

  // load the controller's module
  beforeEach(module('proApp'));

  var MessageCenterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MessageCenterCtrl = $controller('MessageCenterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
