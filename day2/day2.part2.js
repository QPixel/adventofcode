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
	let aim = 0;
	data.map((v) => {
		if 
	})
	for (let i = 0; i < data.length; i++) {
		let split = data[i].split(" ");
		if (split[0] === "forward") {
			horizontal = horizontal + Number(split[1])
			if (aim !== 0) {
				depth = depth + (aim * Number(split[1]));
			}
		} else if (split[0] === "up") {
			aim = aim - Number(split[1]);
		} else if (split[0] === "down") {
			aim = aim + Number(split[1]);
		}
	} 
	console.log(horizontal, depth, aim);
	console.log(horizontal * depth);
}

processInput();