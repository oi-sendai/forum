'use strict'; 

var ngAdmin = angular.module('ngAdmin', [
    // 'ngCookies', 
    // 'ui.router',
    // 'ngResource',
    // 'ngAnimate',
    // 'textAngular',
    'categoryAdminControl',
]);

var categoryAdminControl = angular.module('categoryAdminControl', []);

categoryAdminControl.controller('categoryAdminControl', function($scope){
    $scope.debug = 'categoryAdminControl';
});

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