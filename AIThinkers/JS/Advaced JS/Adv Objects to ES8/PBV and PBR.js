var a=5;
var b=a;
b++;
console.log(a);    //5
console.log(b);   //6


let obj1={name: 'Yao', password: '123'};
let obj2=obj1;
obj2.password='easypeasy';

console.log(obj1);     //{name:'Yao' , password:'easypeasy'}
console.log(obj2);      //{name:'Yao' , password:'easypeasy'}




var c=[1,2,3,4,5];
var d=c;
d.push(987654);
console.log(d);    //[1,2,3,4,5,987654]
console.log(c);    //[1,2,3,4,5,987654]





var c=[1,2,3,4,5];
var d=[].concat(c);
d.push(987654);
console.log(d);    //[1,2,3,4,5]
console.log(c);    //[1,2,3,4,5,987654]



let obj ={a:'a',b:'b',c:'c'};
let clone =Object.assign({},obj);
let clone2={...obj}

obj.c =5;
console.log(obj);       //{a:'a',b:'b',c:5}
console.log(clone);     //{a:'a',b:'b',c:'c'}
console.log(clone2);    //{a:'a',b:'b',c:'c'}




let obj ={
	a:'a',
	b:'b',
	c:{
		deep: 'try and copy me'
	}
};
let clone =Object.assign({},obj);
let clone2={...obj}
let superClone =JSON.parse(JSON.stringify(obj))

obj.c.deep ='hahaha';
console.log(obj);            //{a:'a',b:'b',c:{deep:'hahaha'}}
console.log(clone);          //{a:'a',b:'b',c:{deep:'hahaha'}}
console.log(clone2);         //{a:'a',b:'b',c:{deep:'hahaha'}}
console.log(superClone)      //{a:'a',b:'b',c:{deep:'try and copy me'}}
