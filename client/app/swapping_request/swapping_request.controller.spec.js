'use strict';

describe('Controller: SwappingRequestCtrl', function () {

  // load the controller's module
  beforeEach(module('proApp'));

  var SwappingRequestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SwappingRequestCtrl = $controller('SwappingRequestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
