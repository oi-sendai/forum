'use strict'; 

var ngTopic = angular.module('ngTopic', [
    // 'ngCookies', 
    'ui.router',
    'ngResource',
    // 'ngAnimate',
    // 'textAngular',
    'commentControl',
    'userControl'
    // 'UserFactory'
]);

var userControl = angular.module('userControl', []);
userControl.controller('userControl', function($scope){
    $scope.debug = 'userControl';
    $scope.endpoint = "rest/user";
    $scope.formData = {};
    // $scope.categoryList = [];

    $scope.init = function(){
        // RestFactory.getAll($scope.endpoint).then(function(response) {
        //     console.log(response.user);
        //     $scope.categoryList = response.data;
        // });
    }; 
    $scope.init();

    $scope.test = function(input) {
        var foo = input;
        foo = input+'works yass';
        return foo
    }
});

var commentControl = angular.module('commentControl', []);
commentControl.controller('commentControl', function($scope, CommentFactory){
    $scope.debug = 'commentControl';
    $scope.endpoint = "rest/user";
    $scope.formData = {};
    // $scope.categoryList = [];


    $scope.init = function(){

    }; 
    $scope.init();

    $scope.test = function(input) {
        var foo = input;
        foo = input+'works yass';
        return foo
    }
    $scope.addComment = function(){
        console.log('post_id');
        console.log($scope.post_id);
        console.log('formData');
        console.log($scope.formData);
        CommentFactory.addComment($scope.formData).then(function(response) {
            console.log(response)
            console.log('works now');
            // $scope.comments = response.data;
            // $scope.refresh(); //refreshPosts();
        });
    };
});


ngTopic.factory("CommentFactory", function($http,$resource) {
    var factory = {};

    factory.addComment = function(postData){
        return $http.get('/rest/reply');
    };

    return factory
});