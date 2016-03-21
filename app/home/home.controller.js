(function () {
    'use strict';

    angular
        .module('wishlist.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', '$auth', 'LoginUtils'];

    function HomeController($location, $auth, LoginUtils) {
        var vm = this;
        vm.user = {}

        vm.logout = function () {
            $auth.logout();
        }
    }
})();