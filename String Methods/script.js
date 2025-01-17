//1) length
//returns the length of a string

let str = "Roshan Roy";
console.log(str.length);

//2) charAt()
//returns a character from a string.

console.log(str.charAt(4));

//3) indexof()
//returns the index of first occurance of a string in a string.

console.log(str.indexOf("R"));

//4) lastIndexof()
//returns the position of last occurance of a string in a string.

console.log(str.lastIndexOf("R"));

//5) trim()
//removes white spaces from both sides of a string.

let message = "   Hello World   ";
console.log(message.trim());

//6) toUpperCase()
//converts to upper case.

console.log(str.toUpperCase());

//7) toLowerCase()
//converts to lower case.

console.log(str.toLowerCase());

//8) repeat
//repeats a string.

console.log(str.repeat(4));

//9) startsWith()
//returns true if a string starts with a particular value. Otherwise false.

console.log(str.startsWith("A"));

//10) endsWith()
//returns true if a string ends with a particular value. Otherwise false.

console.log(str.endsWith("y"));

//11) includes()
//returns true if a string contains a specified value. Otherwise false.

console.log(str.includes("n"));

//12) replace()
//replaces the first occurance of a specified value with another value in a string.

let text = "Please visit Microsoft & Microsoft";
console.log(text.replace("Microsoft", "W3 Schools"));
console.log(text.replace(/Microsoft/g, "W3 Schools"));
console.log(text.replace(/MICROSOFT/i, "W3 Schools"));

//13) replaceAll()
//replaces all the occurance of a specified value with another value in a string.

let phnNumber = "123-456-7890";
console.log(phnNumber.replaceAll("-", ""));

//14) padStart()
//pads a string from the start.

console.log(phnNumber.padStart(15, "0"));

//15) padEnd()
//pads a string from the end.

console.log(phnNumber.padEnd(15, "x"));
