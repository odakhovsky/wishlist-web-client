(function () {
    'use strict';

    angular
        .module('wishlist.follow')
        .controller('FollowController', HomeController);

    HomeController.$inject = ['$location', '$auth', 'LoginUtils'];

    function HomeController($location, $auth, LoginUtils) {
        var vm = this;
        vm.user = {}

    }
})();