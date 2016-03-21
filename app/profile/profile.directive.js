(function () {
    'use strict';

    angular
        .module('wishlist.profile')
        .directive('profile', profile);

    profile.$inject = [];

    function profile() {
        return {
            replace: true,
            controller: 'ProfileController',
            controllerAs: 'profile',
            templateUrl: 'profile/profile.html'
        };
    }
})();