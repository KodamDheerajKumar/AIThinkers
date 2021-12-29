const flattened = [[0,1], [2,3],[4,5]].reduce(
	(accumulator,array)=> {
		console.log('array',array);
		console.log('accumulator',accumulator);
		return accumulator.concat(array)
},  []);
	

==>
array (2) [0, 1]
accumulator []
array (2) [2, 3]
accumulator (2) [0, 1]
array (2) [4, 5]
accumulator (4) [0, 1, 2, 3]



const flattened = [[0,1], [2,3],[4,5]].reduce(
	(accumulator,array)=> {
		console.log('array',array);
		console.log('accumulator',accumulator);
		return [].concat(array)
},  []);
	
const flattened = [[0,1], [2,3],[4,5]].reduce(
	(accumulator,array)=> {
		console.log('array',array);
		console.log('accumulator',accumulator);
		return [].concat(array)
},  []);


array (2) [0, 1]
accumulator []
array (2) [2, 3]
accumulator (2) [0, 1]
array (2) [4, 5]
accumulator (2) [2, 3]



//

const flattened = [[0,1], [2,3],[4,5]].reduce(
	(accumulator,array)=> {
		debugger;
		return [].concat(array)
},  []);




////////////////Completed till the advanced JS section////////////////////////
