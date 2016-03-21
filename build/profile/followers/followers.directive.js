(function () {
    'use strict';

    angular
        .module('wishlist.profile')
        .directive('followers', followers);

    followers.$inject = [

    ];

    function  followers() {
        return {
            replace: true,
            controller: 'FollowersController',
            controllerAs: 'followers',
            templateUrl: './profile/followers/followers.html'
        };
    }
})();