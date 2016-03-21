(function () {
    'use strict';

    angular
        .module('wishlist.follow')
        .directive('followContent', profileContent);

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