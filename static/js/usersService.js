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
        'id':"REUT PT 0001", 'name':"REUT PT 0001"
    },
    {
        'id':"REUT PT 0002", 'name':"REUT PT 0002"
    },
    {
        'id':"REUT PT 0005", 'name':"REUT PT 0005"
    },
    {
        'id':"REUT OT 0001", 'name':"REUT OT 0001"
    },
    {
        'id':"REUT OT 0002", 'name':"REUT OT 0002"
    },
    {
        'id':"REUT OT 0003", 'name':"REUT OT 0003"
    }
];