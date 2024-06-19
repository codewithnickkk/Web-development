console.log("hello")
alert("hello");
var a = 5;
var b = 29.43612736;
var c = "chiku";
var d = "213.323";

console.log(a,b,c,d)
console.log(typeof a,typeof b,typeof c,typeof d)
//using var is bad technique instead use let to assign variable.
// reason: let can be used as assign variable globally as well as in block codes,
//whereas var can only be used for global declaration.

//there are 7 types of primitive data types
/* 1) Null 2)Number 3)String 4)Symbol 5)Undefined 6)Boolean 7)Big Int */

let e =null;
let f =123;
let g ="pom";
let h ="@";
let i =undefined;
let j =true;
let k =234729834692864829734279238;

console.log(e, f, g, h, i, j, k)
console.log(typeof e, typeof f, typeof g, typeof h, typeof i, typeof j, typeof k)

const l =3;//once constant is declared it cannot be changed.
//object

let o ={
    name : 'nikunj',
    'job role' : 'web-dev',//since job roll has space init is is written in quotes
}
console.log(o)
console.log(typeof o)
o.salary = "100 crores";
console.log(o)