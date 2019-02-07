var fs = require('fs');
var linesArray = fs.readFileSync('input.txt').split('\n');
var numbsArr = linesArray[1].split(' ');
var newArr = [];

function IsHaveNum( num ) {
	newArr.forEach(function(num2) {
		if num2 == num return true;
	}
	return false;
}

function FindNum() {
	for ( let i = 0; i < linesArray[0]; i++ ) {
		numbsArr.forEach(function(num2) {
			let num = num2 % i;
			if ( !IsHaveNum( num ) ) newArr.push( num ) else return i;
		}
	}
}
                     
fs.writeFileSync('output.txt', FindNum())
