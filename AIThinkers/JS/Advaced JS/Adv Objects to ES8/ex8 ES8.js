'Turtle'.padStart(10);

'    turtle'


'Turtle'.padEnd(10);

'turtle    '

//
object.values

let obj = {
	username0 :'Santa',
	username1:'Rudolf',
	username2:'Mr.Grinch'
}

Object.keys(obj).forEach((key,index) =>{
	console.log(key,obj[key]);
})


Object.values(obj).forEach(value =>{
	console.log(value);
})

Object.entries(obj).forEach(value =>{
	console.log(value);
})









// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'              ==>
                           turtle = turtle.padStart(9);
                           rabbit = rabbit.padStart(9);
// when you do:           
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


==>
   ||<- Start line
🐢=======
       🐇

// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'


==>
Object.entries(obj).map(value => value.join(" ")).join(' ')