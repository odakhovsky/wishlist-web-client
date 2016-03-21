(function () {
    'use strict';

    angular
        .module('wishlist.auth')
        .controller('RegistrationController', RegistrationController);

    RegistrationController.$inject = [
        '$mdToast', '$location',
        'RegistrationUtils'
    ];

    function RegistrationController($mdToast, $location,
                                    RegistrationUtils) {
        var vm = this;

        vm.goHomePage = function(){
            $location.path('/home');
        }
        vm.registration = function (user) {
            RegistrationUtils.registration(user)
                .then(function () {
                    vm.goHomePage();
                }, function (err) {
                    var notification = (err.status == 401 ) ? err.data.message : 'непонятно';
                    $mdToast.show(
                        $mdToast.simple()
                            .textContent(notification)
                            .hideDelay(3000)
                    );
                });
        };
    }
})();