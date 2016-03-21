(function () {
    'use strict';

    angular
        .module('wishlist.profile')
        .directive('profileToolbar', profileToolbar);

    profileToolbar.$inject = [];

    function profileToolbar() {
        return {
            replace: true,
            controller: 'ProfileController',
            controllerAs: 'profile',
            templateUrl: 'profile/toolbar/toolbar.html'
        };
    }
})();