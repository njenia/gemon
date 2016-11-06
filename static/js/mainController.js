angular.module('gemon').controller('MainCtrl', function ($scope, UsersService) {
    $scope.users = UsersService.getUsers();
});




