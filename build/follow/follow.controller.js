(function () {
    'use strict';

    angular
        .module('wishlist.follow')
        .controller('FollowController', FollowController);

    FollowController.$inject = ['$location', '$auth', 'LoginUtils','$routeParams'];

    function FollowController($location, $auth, LoginUtils,$routeParams) {
        var vm = this;

        var followers = 'followers';
        var following = 'following';

        vm.user = {}

        var show = $routeParams.show;
        if (!show || show !== following || show != followers){
            console.log("bla");
        }

        console.log(show);

    }
})();