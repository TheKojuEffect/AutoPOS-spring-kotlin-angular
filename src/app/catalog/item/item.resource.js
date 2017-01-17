(function () {
    'use strict';
    angular
        .module('autopos')
        .factory('Item', Item);

    Item.$inject = ['$resource'];

    function Item($resource) {
        const resourceUrl = 'api/items/:id';

        return $resource(resourceUrl, {}, {
            query: {method: 'GET', isArray: true},
            get: {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            getWithDetail: {
                method: 'GET',
                params: {
                    detail: true
                },
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            update: {method: 'PUT'},
            costPrices: {url: 'api/items/:id/costPrices', method: 'GET', isArray: true}
        });
    }
})();
