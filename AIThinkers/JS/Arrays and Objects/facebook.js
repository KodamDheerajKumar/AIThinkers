var  database=[
{
username:"Dheeraj",
password:"1234",
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

var userNameprompt=prompt("what's ur username?");
var userPasswordprompt=prompt("what's ur password?");

function signIn(user, pass){
	if (user === database[0].username &&
		pass=== database[0].password) {
		console.log(newsfeed);
	} else {
		alert("sorry wrong username and password");

	}

}

signIn(userNameprompt,userPasswordprompt);
