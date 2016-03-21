(function () {
    'use strict';

    angular
        .module('wishlist.auth')
        .directive('registration', registration);

    registration.$inject = [];

    function  registration() {
        return {
            replace: true,
            controller: 'RegistrationController',
            controllerAs: 'registration',
            templateUrl: './auth/registration/registration.html'
        };
    }
})();