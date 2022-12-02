const fs = require("fs");
const path = require("path");


const inputPath = path.join(__dirname, "./input.txt");
// abstract this to better code
function loadInput() {
	const file = fs.readFileSync(inputPath);
	const numArr = [];
	const result = file.toString().split("\n").forEach((v) => {
		numArr.push(parseInt(v));
	});
	return numArr
}

function createThreeMeasureSum(result) {
	let a,b,c = 0;
	let pointer = 0;
	const outputArr = [];
	for (let i = 0; i < result.length; i++) {
		outputArr.push(result[i] + result[i+1] + result[i+2]);
	}
	return outputArr;
}

function processInput() {
	const result = loadInput();
	const arrSums = createThreeMeasureSum(result);
	console.log(arrSums)
	let lastItem = arrSums[0];
	let measurement = 0;
	arrSums.forEach(v => {
		if (v > lastItem) {
			measurement++
			lastItem = v;
		} else {
			lastItem = v;
		}
	});
	console.log(measurement);

}

processInput();