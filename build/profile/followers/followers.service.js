(function () {
  'use strict';

  angular.module('wishlist.profile')
      .factory('FollowersUtils', FollowersUtils);

  FollowersUtils.$inject = [
    '$q', '$http',
    'server_host'
  ];

  function FollowersUtils($q, $http,
                          server_host) {
    var service = {
      getUserFollowers: getUserFollowers,
    };

    function getUserFollowers(nick, params) {
      var defer = $q.defer();
      var url = server_host + 'api/users/' + nick + '/followers';
      var params = {params:params};
      $http.get(url, JSON.stringify(params))
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