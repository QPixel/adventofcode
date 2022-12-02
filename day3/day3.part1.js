const fs = require('fs');
const { join } = require('path');

const inputPath = join(__dirname, "./input.txt");

function loadInput() {
	// load file and convert to array of nums (can be changed on the fly)
	const result = fs.readFileSync(inputPath, {encoding: "utf-8"}).split("\n")///map(Number);
	return result;
}

function findMostCommonBinary(arr) {
	let zeroCount = 0;
	let oneCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "0") {
			zeroCount++
		} else {
			oneCount++;
		}
	}
	console.log(zeroCount, oneCount);
	return zeroCount > oneCount ? 0 : 1;
}
function findLeastCommonBinary(arr) {
	let zeroCount = 0;
	let oneCount = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === "0") {
			zeroCount++
		} else {
			oneCount++;
		}
	}
	console.log(zeroCount, oneCount);
	return zeroCount < oneCount ? 0 : 0;
}

function processInput() {
	const data = loadInput();
	let gammaRate = "";
	let epsilonRate = "";
	// console.log(data)
	// first find the gamma rate
	let index = 0;
	for (let i = 0; i < 12; i++) {
		let arr = [];
		for (let l = 0; l < data.length; l++) {
			arr.push(data[l][i]);
		}
		gammaRate += findMostCommonBinary(arr);
		epsilonRate += findLeastCommonBinary(arr);
		console.log(gammaRate, epsilonRate);
	}
}

processInput();