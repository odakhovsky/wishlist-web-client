(function () {
  'use strict';

  angular
      .module('wishlist.auth')
      .factory('LoginUtils', LoginUtils);

  LoginUtils.$inject = [
    '$q', '$http',
    '$auth', 'server_host', '$location'
  ];

  function LoginUtils($q, $http,
                      $auth, server_host, $location) {
    var service = {
      login: login,
      logout: logout,
      isLogged: isLogged
    };

    function login(user) {
      var defer = $q.defer();

      $auth.login(user)
          .then(function (ok) {
            defer.resolve(ok);
          }, function (err) {
            defer.reject(err);
          });

      return defer.promise;
    }

    function logout() {
      $http.get(server_host + 'api/auth/logout')
          .then(function () {
            $auth.logout();
            $location.path('/home');
          });
    }

    function isLogged() {
      return $auth.isAuthenticated();
    }

    return service;
  }
})();