angular.module('medium').controller('PostController', ['$scope', 'PostService', function($scope, PostService) {
    $scope.posts = [];
    $scope.post = {};

    $scope.loadPosts = function() {
        PostService.getAllPosts()
            .then(function(response) {
                $scope.posts = response.data.data; // dps mudo no back pra ficar com a estrutura certa
            })
            .catch(function(error) {
                console.error('Erro ao carregar posts:', error);
            });
    };

    $scope.loadPost = function(postId) {
        PostService.getPostById(postId)
            .then(function(response) {
                $scope.post = response.data.data;
            })
            .catch(function(error) {
                console.error('Erro ao carregar post:', error);
            });
    };

    $scope.createPost = function(post) {
        PostService.createPost(post)
            .then(function(response) {
                $scope.posts.push(response.data.data);
                $scope.post = {};
            })
            .catch(function(error) {
                console.error('Erro ao criar post:', error);
            });
    };

    $scope.deletePost = function(postId) {
        PostService.deletePost(postId)
            .then(function(response) {
                $scope.posts = $scope.posts.filter(post => post.id !== postId);
            })
            .catch(function(error) {
                console.error('Erro ao deletar post:', error);
            });
    };

    $scope.likePost = function(postId) {
        PostService.likePost(postId)
            .then(function(response) {
                let post = $scope.posts.find(post => post.id === postId);
                if (post) {
                    post.likes += 1;
                }
            })
            .catch(function(error) {
                console.error('Erro ao curtir post:', error);
            });
    };

    $scope.dislikePost = function(postId) {
        PostService.dislikePost(postId)
            .then(function(response) {
                let post = $scope.posts.find(post => post.id === postId);
                if (post) {
                    post.likes -= 1;
                }
            })
            .catch(function(error) {
                console.error('Erro ao descurtir post:', error);
            });
    };

    $scope.loadPosts();
}]);
