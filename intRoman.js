/**
 * Conversão de inteiro para Romanos
 * */

 const intToRoman = (num) => {
 	let pattern = {
 		M: 1000,
 		CM: 900, 
 		D: 500, 
 		CD: 400, 
 		C: 100,
 		XC: 90,
 		L: 50,
 		XL:40,
 		X:10,
 		IX: 9,
 		V: 5,
 		IV: 4,
 		I: 1
 	}

 	let roman = '';

 	for(let i in pattern){
 		let q = Math.floor(num / pattern[i]);
 		num -= q * pattern[i]
 		roman += i.repeat(q);
 	}

 	return roman;

 }


console.log(intToRoman(1345));
console.log(intToRoman(510));
console.log(intToRoman(123));