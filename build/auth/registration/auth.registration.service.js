(function () {
    'use strict';

    angular
        .module('wishlist.auth')
        .factory('RegistrationUtils', RegistrationUtils);

    RegistrationUtils.$inject = [
        '$q', '$http', 'server_host','$auth'
    ];

    function RegistrationUtils($q, $http, server_host) {
        var service = {
            registration: registration,
            isNickFree: isNickFree,
            isEmailFree: isEmailFree,
        };

        function registration(user) {
            var defer = $q.defer();

            $http.post(server_host + 'api/auth/registration', user)
                .then(function (ok) {
                    defer.resolve(ok);
                }, function (err) {
                    defer.reject(err);
                });

            return defer.promise;
        }

        function isNickFree(nick) {
            var defer = $q.defer();
            $http.get(server_host + 'api/auth/isNickFree/' + nick)
                .then(function (ok) {
                    defer.resolve(ok);
                }, function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        }

        function isEmailFree(login) {
            var defer = $q.defer();
            $http.get(server_host + 'api/auth/isLoginFree/' + login)
                .then(function (ok) {
                    defer.resolve(ok);
                }, function (err) {
                    defer.reject(err);
                });
            return defer.promise;
        }

        return service;
    }
})();