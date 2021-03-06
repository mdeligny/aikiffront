'use strict';

angular.module('app')
  .service('merchantsService', function ($http, localUserService) {
    this.getMerchants = function (query) {
      return localUserService.getUser()
        .then(function (user) {
          return user._id;
        })
        .then(function (userId) {
          return $http.get('https://aikiff.herokuapp.com/merchants?userId=' + userId + '&' + query + '&limit=10');
        })
        .then(function (response) {
          return response.data;
        });
    };
  });
