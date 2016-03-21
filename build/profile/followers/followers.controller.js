(function () {
  'use strict';

  angular
      .module('wishlist.profile')
      .controller('FollowersController', FollowersController);

  FollowersController.$inject = ['$location', '$auth', 'LoginUtils', '$routeParams', 'FollowersUtils'];

  function FollowersController($location, $auth, LoginUtils, $routeParams, FollowersUtils) {
    var vm = this;
    var nick = $routeParams.nick;

    vm.params = {
      page: 1
    }

    vm.user = {}

    init();
    function init() {
      vm.loading = true;

      if (LoginUtils.isLogged()) {

        loadFollowers(nick, vm.params);

      } else {
        return $location.path('/home');
      }

    }

    function loadFollowers(nick, params) {
      FollowersUtils.getUserFollowers(nick, params)
          .then(function (ok) {
            console.log(JSON.stringify(ok));
          }, function (err) {
            $log.log('[ERROR] FollowersUtils.getUserFollowers()', err);
          });
    }
  }
})();