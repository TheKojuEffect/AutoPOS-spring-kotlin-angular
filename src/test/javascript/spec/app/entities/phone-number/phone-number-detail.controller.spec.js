'use strict';

describe('Controller Tests', function() {

    describe('Phone Management Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPhoneNumber;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPhoneNumber = jasmine.createSpy('MockPhoneNumber');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Phone': MockPhoneNumber
            };
            createController = function() {
                $injector.get('$controller')("PhoneNumberDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'autoPosApp:phoneNumberUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
