(function () {
    'use strict';

    angular
        .module('sampleApp')
        .config(['$locationProvider', function($locationProvider) {
        	$locationProvider.html5Mode(true);
        }])
        .run(moduleRun);

    moduleRun.$inject = ['AppRoute', 'AppRouteFactory'];

    function moduleRun(AppRoute, AppRouteFactory) {
    	AppRoute.loadStates(AppRouteFactory.getStates(), '/');
    }
})();