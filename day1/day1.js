const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "./input.txt");

function loadInput() {
	const file = fs.readFileSync(inputPath);
	const numArr = [];
	const result = file.toString().split("\n").forEach((v) => {
		numArr.push(parseInt(v));
	});
	console.log(numArr)
	return numArr
}

function processInput() {
	const result = loadInput();

	let lastItem = result[0];
	let measurement = 0;
	const adjMeasurement = (v) => {
		measurement++
		lastItem = v
	}
	result.forEach((v) => {
		v > lastItem ? adjMeasurement(v) : lastItem = v;
	});
	console.log(measurement)
}

processInput();