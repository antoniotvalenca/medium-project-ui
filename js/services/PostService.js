angular.module('medium').factory('PostService', ['$http', function($http) {
    const port = "3000"
    const url = `http://localhost:${port}`;

    return {
        getAllPosts: function() {
            return $http.get(url + '/posts');
        },
        getPostById: function(id) {
            return $http.get(url + '/posts/' + id);
        },
        createPost: function(post) {
            return $http.post(url + '/post/create', post);
        },
        likePost: function(id) {
            return $http.post(url + '/' + id + '/like');
        },
        dislikePost: function(id) {
            return $http.post(url + '/' + id + '/dislike');
        }
    };
}]);
