(function () {
  'use strict';

  angular
      .module('wishlist.profile')
      .factory('ProfileUtils', ProfileUtils);

  ProfileUtils.$inject = [
    '$q', '$http',
    'server_host'
  ];

  function ProfileUtils($q, $http,
                        server_host) {
    var service = {
      getUserInfo: getUserInfo,
      getUserByNick: getUserByNick,
      follow: follow,
      followStatistic: followStatistic,
      redirectToOwnPage:redirectToOwnPage
    };


    function redirectToOwnPage(){
      var defer = $q.defer();
      $http.get(server_host + 'api/users/nick')
          .success(function (ok, status, headers, config) {
            defer.resolve(ok);
          })
          .error(function (err, status, headers, config) {
            debugger;
            defer.reject(err);
          });

      return defer.promise;
    }

    function followStatistic(nick) {
      var defer = $q.defer();

      $http.get(server_host + 'api/users/' + nick + '/statistic')
          .success(function (ok, status, headers, config) {
            defer.resolve(ok);
          })
          .error(function (err, status, headers, config) {
            debugger;
            defer.reject(err);
          });

      return defer.promise;
    }

    function follow(nick, status) {
      var defer = $q.defer();

      var link = !status ? 'follow' : 'unfollow';
      $http.get(server_host + 'api/users/' + link + '/' + nick)
          .success(function (ok, status, headers, config) {
            defer.resolve(ok);
          })
          .error(function (err, status, headers, config) {
            debugger;
            defer.reject(err);
          });

      return defer.promise;
    }

    function getUserByNick(nick) {
      var defer = $q.defer();

      $http.get(server_host + 'api/users/nick/' + nick)
          .success(function (ok, status, headers, config) {
            defer.resolve(ok);
          })
          .error(function (err, status, headers, config) {
            defer.reject(err);
          });

      return defer.promise;
    }

    function getUserInfo() {
      var defer = $q.defer();

      $http.get(server_host + 'api/users')
          .success(function (ok, status, headers, config) {
            defer.resolve(ok);
          })
          .error(function (err, status, headers, config) {
            debugger;
            defer.reject(err);
          });

      return defer.promise;
    }

    return service;
  }
})();