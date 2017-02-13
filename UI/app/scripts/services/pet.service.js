(function() {
	'use-strict';

	angular
		.module('sampleApp')
		.service('PetService', PetService);

	PetService.inject = ['$http'];

	function PetService($http) {
		var vm = this;
		var baseUrl = 'http://localhost:8080/api';
		var petsSuffix = '/pets';
		var jsonSuffix = '?type=json';
		var headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

		vm.getPetList = getPetList;

		function getPetList() {
			var url = baseUrl + petsSuffix + jsonSuffix;

	    	return $http.get(url, {
                data: '',
                headers: headers
            });
	    }
	}
})();
