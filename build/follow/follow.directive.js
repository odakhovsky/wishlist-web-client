(function () {
    'use strict';

    angular
        .module('wishlist.follow')
        .directive('follow', follow);

    follow.$inject = [

    ];

    function  follow() {
        return {
            replace: true,
            controller: 'FollowController',
            controllerAs: 'follow',
            templateUrl: './follow/follow.html'
        };
    }
})();