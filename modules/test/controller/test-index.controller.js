(function () {
	'use strict';
	angular
            .module('app')
            .controller('TestIndexController', TestIndexControllerController);
			TestIndexController.$inject = ['$rootScope', '$scope'];
	function TestIndexController($rootScope, $scope) {
	    $rootScope.title = "Test Index Controller";	
		function initController() {
			
		}
		initController();
		
	}

})();