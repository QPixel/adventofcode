// holy shit this one is bad
const fs = require('fs');
const { join } = require('path');

const inputPath = join(__dirname, "./input.txt");

function loadInput() {
	// load file and convert to array of nums (can be changed on the fly)
	const result = fs.readFileSync(inputPath, { encoding: "utf-8" }).split("\n");
	return result;
}

function findCommonBinary(arr, type) {
	let zeroCount = 0; 
	let oneCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "0") {
			zeroCount++
		} else {
			oneCount++;
		}
	}
	if (type === 0) {
		return zeroCount > oneCount ? "0" : "1"
	} else {
		return zeroCount <= oneCount ? "0" : "1" 
	} 
}

function findCommonBit(data, pos) {
	let arr = [];
	for (let l = 0; l < data.length; l++) {
		arr.push(data[l][pos]);
	}
	return arr
}

function processInput() {
	const data = loadInput();
	let oxygenRating = "";
	let co2Rating = "";
	let pos = 0;
	let array = data;
	while (true) {
		// O(N)
		let commonBitArray = findCommonBit(array, pos);
		let commonBit = findCommonBinary(commonBitArray, 0);
		array = array.filter(v => v[pos] === commonBit);
		pos++;
		if (typeof array[1] === "undefined") {
			break;
		}
	}
	oxygenRating = array[0];
	array = data;
	pos = 0;
	while (true) {
		let commonBitArray = findCommonBit(array, pos);
		let commonBit = findCommonBinary(commonBitArray, 1);

		array = array.filter(v => v[pos] === commonBit);
		pos++;
		if (typeof array[1] === "undefined") {
			break;
		}
	}
	co2Rating = array[0];
	console.log(oxygenRating, co2Rating);
	// not 2388407
	console.log(parseInt(Number(oxygenRating), 2) * parseInt(Number(co2Rating), 2));
}

console.time('processInput');
processInput();
console.timeEnd('processInput');