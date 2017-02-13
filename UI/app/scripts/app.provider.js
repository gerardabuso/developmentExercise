(function() {
	'use-strict';

    angular
        .module('sampleApp')
        .provider('AppRoute', AppRouteProvider);

    AppRouteProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppRouteProvider($stateProvider, $urlRouterProvider) {
        this.$get = AppRoute;
        AppRoute.$inject = ['$state'];

        function AppRoute($state) {
            var hasDefaultState = false;
            var exports = {
                loadStates: loadStates,
                getStates: getStates
            };

            return exports;

            function loadStates(states, defaultState) {
                angular.forEach(states, function(state) {
                    $stateProvider.state(state.state, state.config);
                });

                if (defaultState && !hasDefaultState) {
                    hasDefaultState = true;
                    $urlRouterProvider.otherwise(defaultState);
                }
            }

            function getStates() {
                return $state.get();
            }
        }
    }
})();
