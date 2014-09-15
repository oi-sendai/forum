'use strict'; 

var ngAdmin = angular.module('ngAdmin', [
    // 'ngCookies', 
    // 'ui.router',
    'ngResource',
    // 'ngAnimate',
    // 'textAngular',
    'categoryAdminControl'
]);

var categoryAdminControl = angular.module('categoryAdminControl', []);

categoryAdminControl.controller('categoryAdminControl', function($scope, RestFactory){
    $scope.debug = 'categoryAdminControl';
    $scope.endpoint = "rest/category";
    $scope.formData = {};
    $scope.categoryList = [];
    $scope.test = 'rest/user';


    $scope.init = function(){
        RestFactory.getAll($scope.endpoint).then(function(response) {
            console.log(response);
            $scope.categoryList = response.data;
        });
    }; 
    $scope.init();

    $scope.addCategory = function(){
        // I have no idea why this didn't work with .then but 
        RestFactory.create($scope.endpoint, $scope.formData).success(function(response) {
            $scope.formData = {}; // clear the form so our user is ready to enter another
            $scope.init();

        });
    }; 
    $scope.deleteCategory = function(id){
        // I have no idea why this didn't work with .then but 
        console.log('clik');
        RestFactory.destroy($scope.endpoint, id).success(function(response) {
            console.log('delete');
            $scope.init();
        });
    }; 
});


ngAdmin.factory("RestFactory", function($http,$resource) {
  var factory = {};

  factory.getAll = function (endpoint) {
    return $http.get(endpoint);
  };
  factory.create = function (endpoint, dataObject) {
    // why doesn't this work with then
    return $http.post(endpoint, dataObject);
  };
  factory.getOne = function (endpoint, id) {
    return $http.get(endpoint + '/' + id);
  };
  factory.update = function (id, dataObject) {
    return $http.put(endpoint + '/' + cust.ID, cust)
  };
  factory.destroy = function (endpoint, id) {
    console.log(endpoint + '/' + id);
        return $http.delete(endpoint + '/' + id);
  };
  return factory
});

ngAdmin.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.xsrfHeaderName="x-csrf-token";
    $httpProvider.defaults.xsrfCookieName="x-csrf-token";

}]);

// eshoprShop.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', 
//     function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $uiViewScrollProvider, $anchorScrollProvider ) {

//     // Anonymous routes
//     $stateProvider
//         .state('admin', {
//             abstract: true,
//             // template: '<ui-view autoscroll="false"/>',
//             templateUrl: 'public',
//             data: {
//                 access: access.public
//             }
//         })
//         // Home
//         .state('admin.home', {
//             url: '/admin/',
//             template: 'this is an angular app'
//             // views:{
//             //     'main':{
//             //         templateUrl:'blog/public/list',
//             //         controller: 'publicBlogController'
//             //     },
//             //     'sidebar': {
//             //         templateUrl: 'blog/public/sidebar',
//             //         controller: 'publicBlogController'
//             //     }
//             // }
//         });
// });