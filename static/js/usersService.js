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
for (var i = 1; i <= 20; i++) {
    users.push({
        'id':"REUT PT 000" + i, 'name':"REUT PT 000" + i
    });
    users.push({
        'id':"REUT OT 000" + i, 'name':"REUT OT 000" + i
    });
}
