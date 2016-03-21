(function () {
    'use strict';

    angular
        .module('wishlist.profile')
        .directive('profileContent', profileContent);

    profileContent.$inject = [];

    function profileContent() {
        return {
            replace: true,
            controller: 'ProfileController',
            controllerAs: 'profile',
            templateUrl: 'profile/content/content.html'
        };
    }
})();