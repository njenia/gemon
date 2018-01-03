angular.module('gemon').service('UsersService', function () {
   return {
   	'getUser': function(userId) {
   		for (var i = 0; i < users.length; i++) { 
   			user = users[i];
   			if (user.id === userId) {
   				return user;
   			}
   		}
   	},
   	'getUsers': function() {
   		return users;
   	}
   }
});

var users = [];
for (var i = 1; i <= 9; i++) {
    users.push({
        'id':"ALYN 000" + i, 'name': "ALYN 000" + i
    });
}
for (var i = 10; i <= 20; i++) {
    users.push({
        'id':"ALYN 00" + i, 'name': "ALYN 00" + i
    });
}
