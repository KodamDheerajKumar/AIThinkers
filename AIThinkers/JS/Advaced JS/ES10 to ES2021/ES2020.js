MAX_SAFE_INTEGER Value is 9007199254740991

typeof 1
'number'

typeof 1n
'bigint'

//bigint

bigint is used to do arithematic operations that are greater than MAX_SAFE_INTEGER .


//optional chaining operator ?.

let pokemon={
	pikachu:{
		species:'Dragon Pokemon',
		height:1.8,
		weight:30

	}
}
let weight2 = pokemon?.pikachu?.weight
console.log(weight2);

30


//Nullish coalescing operator ??


let pokemon={
	pikachu:{
		species:'Dragon Pokemon',
		height:1.8,
		weight:30,
		power:'fire'

	}
}
let power = pokemon?.pikachu?.power || 'no power'
console.log(power);

fire



let pokemon={
	pikachu:{
		species:'Dragon Pokemon',
		height:1.8,
		weight:30,
	}
}
let power = pokemon?.pikachu?.power || 'no power'
console.log(power);


no power




let pokemon={
	pikachu:{
		species:'Dragon Pokemon',
		height:1.8,
		weight:30,
		power:''
	}
}
let power = pokemon?.pikachu?.power || 'no power'
console.log(power);


no power



let pokemon={
	pikachu:{
		species:'Dragon Pokemon',
		height:1.8,
		weight:30,
		power=0
	}
}
let power = pokemon?.pikachu?.power || 'no power'
console.log(power);


no power


let pokemon={
	pikachu:{
		species:'Dragon Pokemon',
		height:1.8,
		weight:30,
		power=0
	}
}
let power = pokemon?.pikachu?.power ?? 'no power'
console.log(power);  


0


//////////////////Exercise////////////////////////////////


// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER)    //9007199254740991
console.log(Number.MIN_SAFE_INTEGER)    //-9007199254740991

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n  // bigint will be summed up with bigints only

3n + 4n + 1n  //8n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


==>
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon ?.raichu && will_pokemon ?.pikachu ?.friend ?.charizard){
    console.log('fight!')
}else{
     console.log('walk away...')
}



// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')                //false 
console.log(null ?? 'hellooo')                 //hellooo
console.log(null || 'hellooo')                 //hellooo
console.log((false || null) ?? 'hellooo')      //hellooo
console.log(null ?? (false || 'hellooo'))      //hellooo