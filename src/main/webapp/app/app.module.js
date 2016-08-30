(function () {
    'use strict';

    angular
        .module('autopos', [
            'ngStorage',
            'tmh.dynamicLocale',
            'pascalprecht.translate',
            'ngResource',
            'ngCookies',
            'ngAria',
            'ngCacheBuster',
            'ngFileUpload',
            'ui.bootstrap',
            'ui.bootstrap.datetimepicker',
            'ui.router',
            'infinite-scroll',
            'angular-loading-bar',
            'angularMoment'
        ])
        .run(run);

    run.$inject = ['stateHandler', 'translationHandler', 'moment'];

    function run(stateHandler, translationHandler, moment) {
        Date.prototype.toJSON = function () {
            return moment(this).format("YYYY-MM-DDTHH:mm:ss");
        };

        stateHandler.initialize();
        translationHandler.initialize();
    }
})();
