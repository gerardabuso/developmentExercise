(function () {
    'use strict';

    angular
        .module('sampleApp')
        .factory('AppRouteFactory', AppRouteFactory);

    function AppRouteFactory() {
        // Expose Methods.
        var exports = {
        	getStates: getStates
        };

        return exports;

		function getStates() {
			return [
				{
					state : 'pet',
					config : {
						url : '/',
						views : {
							'@' : {
						     	controller: 'PetController',
          						controllerAs: 'petCtrl',
								templateUrl : 'views/pet.html'
							}
						},
						params: {
            				id: null
						},
						resolve : {
							loadDeps : ['$ocLazyLoad', function($ocLazyLoad) {
								return $ocLazyLoad.load([
									'scripts/controllers/pet.controller.js',
									'scripts/services/pet.service.js',
									'scripts/factories/pet.factory.js'
								]);
							}]
						}
					}
				}
			];
		}
    }
})();
