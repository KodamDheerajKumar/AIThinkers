const array = [1,[2],3,[4],[5]];
array.flat();            //by default flat() is flat(1)

const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat()

(5) [1, 2, 3, Array(1), Array(1)]
0: 1
1: 2
2: 3
3: [Array(1)]
4: [Array(1)]
length: 5
[[Prototype]]: Array(0)



array.flat(3)

(5) [1, 2, 3, 4, 5]

const entries =['bob','sally',,,,,,'cindy'];
entries.flat()                     // flat removes extra commas      

(3) ['bob', 'sally', 'cindy']


const entries =[['bob','belly'],'sally',,,,,,'smith','cindy'];
const entries2=entries.flatMap(name =>name +'amith')
undefined
entries2
(4) ['bob,bellyamith', 'sallyamith', 'smithamith', 'cindyamith']


const userEmail="      eddytheeagle@gmail.com"
const userEmail2="bobthebuilder@gmail.com      "
userEmail.trimStart();
userEmail2.trimEnd();

console.log(userEmail);
console.log(userEmail2);
console.log(userEmail.trimStart());
console.log(userEmail.trimEnd());

'    eddytheeagle@gmail.com'
'bobthebuilder@gmail.com   '
eddytheeagle@gmail.com
bobthebuilder@gmail.com


fromEntries:          //it transforms a list of key value pairs into objects

userProfiles=[['Arjun','50'],['Raghs','66'],['Aniketh','1']];
Object.fromEntries(userProfiles)

{Arjun: '50', Raghs: '66', Aniketh: '1'}
Aniketh: "1"
Arjun: "50"
Raghs: "66"
[[Prototype]]: Object


userProfiles=[['Arjun','50'],['Raghs','66'],['Aniketh','1']];
const obj=Object.fromEntries(userProfiles);
Object.entries(obj)         //used to convert object into an Array


(3) [Array(2), Array(2), Array(2)]
0: (2) ['Arjun', '50']
1: (2) ['Raghs', '66']
2: (2) ['Aniketh', '1']
length: 3
[[Prototype]]: Array(0)


try {
	4+5;
}catch{
	console.log("you messed up!")
}

9


try {
	4+ghg;
}catch{
	console.log("you messed up!")
}

you messed up!










// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

array.flat(3)
(5) [1, 2, 3, 4, 5]


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];



//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'



//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

trapped.flat(50)

or

trapped.flat(Infinity);
// Infintiy is actually a LARGE number in JavaScipt. 
//It represents the maximum amount of memory that we can hold for a number!




//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '

userEmail3.trim()
'cannotfillemailformcorrectly@gmail.com'
   or
userEmail3.trimStart().trimEnd();
'cannotfillemailformcorrectly@gmail.com'


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }


const users2=Object.entries(users) 
console.log(users2)
(3) [Array(2), Array(2), Array(2)]
0: (2) ['user1', 18273]
1: (2) ['user2', 92833]
2: (2) ['user3', 90315]
length: 3
[[Prototype]]: Array(0)
//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

users3= users2.map((user) => [user[0], user[1] * 2]);
console.log(user3);

(3) [Array(2), Array(2), Array(2)]
0: (2) ['user1', 36546]
1: (2) ['user2', 185666]
2: (2) ['user3', 180630]
length: 3
[[Prototype]]: Array(0)


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

const users4=Object.fromEntries(users3);
console.log(users4);

{user1: 36546, user2: 185666, user3: 180630}