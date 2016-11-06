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

var users = [
    {
        'id':"testohad", 'name':"Ohad Doron"
    },
    {
        'id':"2", 'name':"Israel Israeli"
    },
    {
        'id':"3", 'name':"Gretel Nyggard"
    }
];