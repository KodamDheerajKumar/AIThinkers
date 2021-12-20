// var button = document.getElementsByTagName('button')[0];
// button.addEventListener("mouseleave",function(){     // mouseleave || mouseover || clickme are attributes of   events
// 	console.log("CLICK!!!");
// })



var button =document.getElementById("enter");
var input =document.getElementById("userinput");
var ul=document.querySelector("ul");


function inputLength(){
	return input.value.length;
}

function creatListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value)); //to add value to list
		ul.appendChild(li);
		input.value= ""; 
}

function addListAfterClick() {
	if (inputLength()>0) { 
	creatListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength()>0 && event.keycode ===13) { 
	creatListElement();
	}
}


button.addEventListener("click",addListAfterClick);
	// if (inputLength()>0) { 
	// creatListElement();   //if value not given and pressed enetr it should not take value
		// var li = document.createElement("li");
		// li.appendChild(document.createTextNode(input.value)); //to add value to list
		// ul.appendChild(li);
		// input.value= "";        // for emptying after enetering list
	
input.addEventListener("keypress",addListAfterKeypress);
	   //if value not given and pressed enetr it should not take value
		// var li = document.createElement("li");
		// li.appendChild(document.createTextNode(input.value)); //to add value to list
		// ul.appendChild(li);
		// input.value= "";        // for emptying after enetering list
