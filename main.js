/* global angular, Firebase, $ */
angular.module('grocery', ['firebase']).controller('mainCtrl',
  function ($scope, $firebase) {
    'use strict';

    var listRef = new Firebase('https://t-groceries.firebaseio.com/list');
    $scope.list = $firebase(listRef);

    $scope.enter = function (e, item) {
      if (e.keyCode === 13) {
        $scope.add(item);
      }
    };

    $scope.add = function (item) {
      $scope.list.$add(item);
      $scope.newItem = '';
      $('input').focus();
    };

    $scope.delete = function (key) {
      $scope.list.$remove(key);
    };
  }
);
