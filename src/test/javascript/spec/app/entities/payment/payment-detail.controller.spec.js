'use strict';

describe('Controller Tests', function() {

    describe('Payment Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockPayment, MockVendor;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockPayment = jasmine.createSpy('MockPayment');
            MockVendor = jasmine.createSpy('MockVendor');


            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Payment': MockPayment,
                'Vendor': MockVendor
            };
            createController = function() {
                $injector.get('$controller')("PaymentDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'autopos:paymentUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
