(function () {
    'use strict';

    angular
        .module('wishlist.profile')
        .directive('profileSidebar', profileSidebar);

    profileSidebar.$inject = [];

    function profileSidebar() {
        return {
            replace: true,
            controller: 'ProfileController',
            controllerAs: 'profile',
            templateUrl: 'profile/sidebar/sidebar.html'
        };
    }
})();