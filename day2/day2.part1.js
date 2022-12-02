const fs = require('fs');
const { join } = require('path');

const inputPath = join(__dirname, "./input.txt");

function loadInput() {
	// load file and convert to array of nums (can be changed on the fly)
	const result = fs.readFileSync(inputPath, {encoding: "utf-8"}).split("\n");
	return result;
}

function processInput() {
	const data = loadInput();
	let horizontal = 0;
	let depth = 0;
	for (let i = 0; i < data.length; i++) {
		let split = data[i].split(" ");
		if (split[0] === "forward") {
			horizontal = horizontal + Number(split[1])
		} else if (split[0] === "up") {
			depth = depth - Number(split[1])
		} else if (split[0] === "down") {
			depth = depth + Number(split[1])
		}
	}  
	console.log(horizontal, depth);
	console.log(horizontal * depth);
}

processInput();