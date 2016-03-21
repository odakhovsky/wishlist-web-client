(function () {
  'use strict';

  angular
      .module('wishlist.auth')
      .controller('LoginController', LoginController);

  LoginController.$inject = [
    '$mdToast', '$location',
    'LoginUtils'
  ];

  function LoginController($mdToast, $location,
                           LoginUtils) {
    var vm = this;
    vm.login = function (user) {
      LoginUtils.login(user)
          .then(function (data) {
            $location.path('/profile/' + data.data.user.nick);

          }, function (err) {
            var notification = (err.status == 401 ) ? 'Невірно вказано логін|пароль' : 'непонятно';

            $mdToast.show(
                $mdToast.simple()
                    .textContent(notification)
                    .hideDelay(3000)
            );
          });
    };

    vm.goCreateAccPage = function () {
      $location.path('/registration');
    }
  }
})();