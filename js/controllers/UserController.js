angular.module('medium').controller('UserController', ['$scope', 'UserService', '$location', function($scope, UserService, $location) {

    $scope.login = function() {
        UserService.login($scope.user).then(function(response) {

            localStorage.setItem('token', response.data.data);
            $location.path('/home');
        }, function(error) {
            $scope.error = 'Erro ao fazer login.';
        });
    };

    $scope.signup = function() {
        UserService.signup($scope.user).then(function(response) {
            $location.path('/home');
        }, function(error) {
            $scope.error = 'Erro ao cadastrar.';
        });
    };
}]);
