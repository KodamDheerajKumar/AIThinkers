var  database= [
{
	username:"Dheeraj",
	password:"1234"
},

{
	username:"Raghs",
	password:"secret"
},
{
	username:"Arjun",
	password:"bot50"
}
];

var newsfeed=[
{
	username:"Amul",
	timeline:"Helloo"
},
{
	username:"Shiva",
	timeline:"Hiiiii"
},
{
	username:"Aniketh",
	timeline:"Heyyy"
}
];


function isUserValid(username,password) {
	for (var i=0; i<database.length; i++) {
		if(database[i].username ===username &&
			database[i].password ===password) {
			return true;

		}
	}
	return false;
}

function signIn(username, password){
	if (isUserValid(username ,password)) {
		console.log(newsfeed);
	} else {
		alert("sorry wrong username and password");

	}

}

var userNameprompt=prompt("what's ur username?");
var userPasswordprompt=prompt("what's ur password?");


signIn(userNameprompt,userPasswordprompt);
