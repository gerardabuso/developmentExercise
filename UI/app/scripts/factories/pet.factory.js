(function() {
	'use-strict';

	angular
		.module('sampleApp')
		.factory('PetFactory', PetFactory);

	PetFactory.inject = ['$filter'];

	function PetFactory($filter) {
		var exports = {
			convertPetList: convertPetList
		};
 
		return exports;

		/************************************** CONSTRUCTORS ***************************************/
		function Pet(item) {
			var pet = this;

			if (angular.isDefined(item) && angular.isObject(item) && item !== null) {
				pet.id = item.Id;
				pet.name = item.Name;
			}
		}

		/************************************** CONVERT METHODS ***************************************/

		function convertPetList(items) {
			var convertedList = [];

			angular.forEach(items, function(item) {
				convertedList.push(convertPet(item));
			});

			return convertedList;
		}

		function convertPet(item) {
			return new Pet(item);
		}
	}
})();
