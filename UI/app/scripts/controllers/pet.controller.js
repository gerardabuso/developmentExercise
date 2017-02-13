(function() {
    'use strict';

	angular.module('sampleApp')
		.controller('PetController', PetController);

	PetController.inject = ['PetService', 'PetFactory', '$scope', '$filter'];

	function PetController(PetService, PetFactory, $scope, $filter) {
		var vm = this;

		vm.files = [];
	    vm.petList = [];
		vm.selectedPetId = null;
		vm.dropText = 'Drag and drop, or ';

		vm.submit = submit;
		vm.remove = remove;

	    activate();

	    function activate() {
	    	getPetList();
			addDragEventListeners();
	    }

	    function getPetList() {
			PetService.getPetList().then(
	    		function(response) {
		    		vm.petList = PetFactory.convertPetList(response.data);
		    	});
	    }
		
		function submit() {
			if ((vm.files.length > 0) && (vm.selectedPetId !== null)) {
				var fileNames = '';
				angular.forEach(vm.files, function(item) {
					fileNames = fileNames + (item.name || item.webkitRelativePath) + ', ';
				});
				fileNames = fileNames.substring(0, fileNames.lastIndexOf(', '));
				
				var pet = $filter('filter')(vm.petList, {id: vm.selectedPetId})[0];
				if (angular.isDefined(pet)) {
					alert('Thank you for submitting: ' + fileNames + ' for ' + pet.name + '.');
					clearValues();
				}
			} else {
				alert('Please select your pet and/or files for your pet.');
			}
		}

		function clearValues() {
			vm.selectedPetId = null;
			vm.files = [];
		}

		function dragEnterLeave(event) {
			event.stopPropagation();
			event.preventDefault();
		}

		function addDragEventListeners() {
			var dropbox = document.getElementById("dropbox");

			dropbox.addEventListener("dragenter", dragEnterLeave, false);
			dropbox.addEventListener("dragleave", dragEnterLeave, false);
			dropbox.addEventListener("dragover", function(event) {
				event.stopPropagation();
				event.preventDefault();
				var clazz = 'not-available'
				var ok = event.dataTransfer && event.dataTransfer.types && event.dataTransfer.types.indexOf('Files') >= 0;
			}, false);
			dropbox.addEventListener("drop", function(event) {
				console.log('drop event:', JSON.parse(JSON.stringify(event.dataTransfer)));
				event.stopPropagation();
				event.preventDefault();
				var files = event.dataTransfer.files;
				if (files.length > 0) {
					$scope.$apply(function() {
						vm.files = [];
						for (var i = 0; i < files.length; i++) {
							vm.files.push(files[i]);
						}
					});
				}
			}, false);
		}

		function remove(index) {
			vm.files.splice(index, 1);
		}
	}
})();
