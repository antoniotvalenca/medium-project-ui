angular.module('medium').factory('UserService', ['$http', function($http) {
    var url = 'http://localhost:3000'; // URL do seu backend

    return {
        login: function(user) {
            return $http.post(url + '/login', user);
        },
        signup: function(user) {
            return $http.post(url + '/signup', user);
        }
    };
}]);
