var todo = [
"clean room",
"brush",
"Eercise",
"Study JS",
"EAt Healthy",
];

var todoImportant =[
"clean room!",
"brush!",
"Eercise!",
"Study JS!",
"EAt Healthy!",
]

//for:

var todoLength =todo.length;
for (var i=0; i<todoLength ; i++) {
	todo[i]=todo[i]+"!";
	todo.pop();
}


//while:

// var counterOne=10;
// while(counterOne>0){
// 	console.log(counterOne);
// 	counterOne--;
// }


//do while:

// var counterTwo=10;
// do {
// 	console.log(counterTwo)
// 	counterTwo--;
// }while(counterTwo>0);


//forEach:

// var todoLength=todo.length;

// for(var i=0;i<todoLength;i++) {
// 	console.log(todo[i],i);
// }

// todo.forEach(function(todo,i) {
// 	console.log(todo,i);
// })
 


// function  logTodo(todo,i) {
// 	console.log(todo,i);

// 	// body...
// }

// todo.forEach(logTodo);
// todoImportant.forEach(logTodo);