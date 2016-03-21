(function () {
    'use strict';

    angular
        .module('wishlist.follow')
        .directive('followContent', followContent);

    followContent.$inject = [];

    function followContent() {
        return {
            replace: true,
            controller: 'FollowController',
            controllerAs: 'follow',
            templateUrl: 'follow/content/content.html'
        };
    }
})();