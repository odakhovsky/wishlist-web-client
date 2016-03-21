(function () {
    'use strict';

    angular
        .module('wishlist.profile')
        .directive('followContent', followersContent);

    followersContent.$inject = [];

    function followersContent() {
        return {
            replace: true,
            controller: 'FollowersController',
            controllerAs: 'followers',
            templateUrl: './profile/followers/content/content.html'
        };
    }
})();