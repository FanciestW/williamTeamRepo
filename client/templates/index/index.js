Template.users.helpers({
    'user': function() {
        return NucleusUsers.find()
    }
});

window.onload=function(){
	document.getElementById("add").onclick = addUser;
}

function addUser(){
	var user_name = document.getElementById("user-field").value;
	var user_id = document.getElementById("id-field").value;
	NucleusUsers.insert({
		username: user_name,
		userid: user_id
	})
}

function clearUsers(){
	Meteor.call('removeAllPosts')
}