'use strict';

describe('Controller: ReleaseCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('woxApp'));

  var ReleaseCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReleaseCreateCtrl = $controller('ReleaseCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
