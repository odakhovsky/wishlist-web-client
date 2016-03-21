(function () {
    'use strict';

    angular
        .module('wishlist', [
            'ngMaterial',
            'ngRoute',
            'satellizer',
            'wishlist.auth',
            'wishlist.home',
            'wishlist.profile',
        ])
        .constant('server_host', 'http://localhost:8080/');
})();