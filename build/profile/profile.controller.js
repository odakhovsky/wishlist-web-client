(function () {
  'use strict';

  angular
      .module('wishlist.profile')
      .controller('ProfileController', ProfileController);

  ProfileController.$inject = [
    '$log', '$location',
    'ProfileUtils', 'LoginUtils', '$mdSidenav', '$routeParams'
  ];

  function ProfileController($log, $location,
                             ProfileUtils, LoginUtils, $mdSidenav, $routeParams) {
    var vm = this;

    vm.toggleMenuIcon = './assets/images/ic_menu_black_24px.svg';
    vm.exitIcon = './assets/images/ic_exit_to_app_black_24px.svg';
    vm.exitIcon_w = './assets/images/ic_exit_to_app_white_24px.svg';
    vm.myProfilePage = './assets/images/ic_home_black_24px.svg';
    vm.settingsIcon = './assets/images/ic_settings_black_24px.svg';

    vm.openLeftMenu = function () {
      $mdSidenav('left').toggle();
    };
    vm.loading = true;
    var nick = $routeParams.nick;
    vm.user = {};

    init();
    function init() {
      vm.loading = true;
      if (!LoginUtils.isLogged()) {
        return $location.path('/home');
      }
      if (!nick) {
        return $location.path('/home');
      }

      ProfileUtils.getUserByNick(nick)
          .then(function (ok) {
            vm.user = ok;
            vm.followButtonText = ok.followerStatistic.followedByMe ? 'Unfollow' : 'Follow';
            vm.followStatistic = ok.followerStatistic;

            vm.loading = false;
          }, function (err) {
            $log.log('[ERROR] ProfileMeController.ProfileUtils.getUserByNick()', err);
            return $location.path('/home');
          });
    }

    vm.follow = function () {
      vm.loading = true;

      ProfileUtils.follow(nick,vm.followStatistic.followedByMe )
          .then(function (ok) {
            vm.user.followedByMe = ok;
            vm.followButtonText = ok ? 'Unfollow' : 'Follow';
            userFollowStatistic(nick);

            vm.loading = false;
          }, function (err) {
            $log.log('[ERROR] ProfileMeController.ProfileUtils.follow()', err);
            return $location.path('/home');
          });

    };


    function userFollowStatistic(nick) {
      ProfileUtils.followStatistic(nick).then(function (ok) {
        vm.followStatistic = ok;
      }, function (err) {
        $log.log('[ERROR] ProfileMeController.ProfileUtils.followStatistic()', err);
        return $location.path('/home');
      });
    }


    vm.close = function () {
      $mdSidenav('left').close()
          .then(function () {
            $log.debug("close LEFT is done");
          });
    };

    vm.redirectToProfile = function(nick){
      return (nick)? $location.path('/profile/' + nick) : '';
    };

    vm.logOut = function () {
      LoginUtils.logout();
    }

    vm.goOwnProfile = function(){
      ProfileUtils.redirectToOwnPage().then(function (ok) {
        $location.path('/profile/' + ok.message);
      },function(err){
        $log.log('[ERROR] ProfileMeController.ProfileUtils.redirectToOwnPage()', err);
      });
    }
  }
})
();