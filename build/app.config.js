(function () {
  'use strict';

  angular
      .module('wishlist')
      .config(configURL)
      .config(configAuth)
      .config(configHttp);

  configURL.$inject = ['$routeProvider'];
  configAuth.$inject = ['$authProvider'];
  configHttp.$inject = ['$httpProvider', '$authProvider'];

  function configURL($routeProvider) {
    $routeProvider
        .when('/profile/:nick', {
          template: '<profile></profile>'
        })
        .when('/profile/:nick/followers',{
          template: '<followers></followers>'
        })
        .when('/home', {
          template: '<home></home>'
        })
        .when('/registration', {
          template: '<registration></registration>'
        })
        .when('/info', {
          template: 'info page'
        })
        .otherwise({
          redirectTo: '/home'
        });
  }

  function configHttp($httpProvider, $authProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

  }

  function configAuth($authProvider) {
    $authProvider.httpInterceptor = function () {
      return true;
    };
    $authProvider.baseUrl = 'http://localhost:8080';
    $authProvider.loginUrl = '/api/auth/login';
    $authProvider.signupUrl = '/api/auth/registration';
    $authProvider.tokenName = 'token';
    $authProvider.storageType = 'sessionStorage';
    $authProvider.authToken = 'Bearer';
    $authProvider.authHeader = 'Authorization';
  }
})();