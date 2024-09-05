angular.module('medium', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'PostController'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'UserController'
        })
        .when('/signup', {
            templateUrl: 'views/signup.html',
            controller: 'UserController'
        })
        .when('/post/:id', {
            templateUrl: 'views/post.html',
            controller: 'PostController'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);

